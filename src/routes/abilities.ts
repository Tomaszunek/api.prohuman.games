import { Express } from 'express'
import { AbilitiesController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/abilities', AbilitiesController.AbilitiesGet.list)

}
