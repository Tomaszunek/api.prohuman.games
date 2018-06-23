import { Express } from 'express'
import { AbilitiesTagsController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/abilities-tags', AbilitiesTagsController.AbilitiesTagsGet.list)

}
