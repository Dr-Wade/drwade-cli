import {Command, flags} from '@oclif/command'
import { Answers } from 'inquirer'
import inquirer = require('inquirer')
import signale from 'signale'
import fs from 'fs'
import path from 'path'
import { cleanFolderName, copyFolder, loopThroughFiles } from '../../helpers/files'
import cli from 'cli-ux'
import Handlebars from 'handlebars'
//@ts-ignore
import spawn from 'await-spawn'

export default class GenerateProject extends Command {
  static description = 'Generate a new project'

  static flags = {
    help: flags.help({char: 'h'})
  }

  async run() {
    let responses: Answers = await inquirer.prompt([
      {
        name: 'name',
        type: 'input',
        message: 'Project name'
      },
      {
        name: 'language',
        type: 'list',
        message: 'Frontend framework',
        choices: [{ name: 'Vue.JS' }, { name: 'React.JS'}],
        default: 0,
        loop: true
      }
    ])
    cli.action.start('Creating project folder')
    const projectFolderPath = path.join(process.cwd(), cleanFolderName(responses.name));
    const clientFolderPath = path.join(projectFolderPath, 'client');
    if (!fs.existsSync(projectFolderPath))
      fs.mkdirSync(projectFolderPath);
    if (!fs.existsSync(clientFolderPath))
      fs.mkdirSync(clientFolderPath);
    cli.action.stop();
    switch (responses.language) {
      case 'Vue.JS':
        cli.action.start('Copying over the template files');
        const templateFolder = path.join(__dirname + '../../../templates/client/vuejs')
        try {
          await copyFolder(templateFolder, clientFolderPath);
        }
        catch(error) {
          signale.fatal(error)
          return;
        }
        cli.action.stop()
        cli.action.start('Generating your project');
        try {
          const templateData = {
            name: responses.name,
            author: "Edward Tombre",
            description: "My Awesome Project"
          }
          const generateFile = async function(file: string) {
            const fileType = file.split(".").reverse()[0];
            if (["js", "md", "json", "vue"].includes(fileType)) {
              const fileContent = await fs.promises.readFile(file);
              const template = Handlebars.compile(fileContent.toString())
              const replaced = template(templateData).toString();
              await fs.promises.writeFile(file, replaced, {encoding:'utf8',flag:'w'});
            }
          }
          await loopThroughFiles(clientFolderPath, generateFile)
        }
        catch(error) {
          signale.fatal(error);
          return;
        }
        cli.action.stop();
        cli.action.start('Getting to the project directory');
        //await spawn(`cd ${clientFolderPath} && npm i`,[], {stdio: 'inherit', shell: true});
        cli.action.stop();
        cli.action.start('Installing packages');
        console.log(clientFolderPath);
        await spawn(`cd ${clientFolderPath} && npm i`,[], {stdio: 'inherit', shell: true});
        cli.action.stop();
        signale.success('Your project has been setup');
        break;
      case 'React.JS':
        signale.error('React.JS is currently not supported.')
        break;
    }
  }
}
