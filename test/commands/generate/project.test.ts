import {expect, test} from '@oclif/test'

describe('generate:project', () => {
  test
  .stdout()
  .command(['generate:project'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['generate:project', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
