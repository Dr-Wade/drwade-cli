import ncp from 'ncp'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
export const cleanFolderName = function (name: string) {
    return name.trim().toLowerCase().replace(/[^a-zA-Z0-9]/g,"")
}

export const copyFolder = async function (sourceFolder: string, destFolder: string) {
    await promisify(ncp)(sourceFolder, destFolder)
}

export const loopThroughFiles = async function(dir: string, process: any) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  await Promise.all(dirents.map(async (dirent: any) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? await loopThroughFiles(res, process) : await process(res);
  }));
}