import { Express } from 'express'
import { SeoTagTagsController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/seo-tag-tags', SeoTagTagsController.SeotagTagsGet.list)

}
