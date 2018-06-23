import { Express } from 'express'
import { SeoTagsController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/seotags', SeoTagsController.SeoTagsGet.list)

}
