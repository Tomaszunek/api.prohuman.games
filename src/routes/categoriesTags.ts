import { Express } from 'express'
import { CategoriesTagsController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/categories-tags', CategoriesTagsController.CategoriesTagsGet.list)

}
