import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'seeENV',
    dataset: 'production'
  }
})
