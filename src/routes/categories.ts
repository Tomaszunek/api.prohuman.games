import { Express } from 'express'
import { CategoriesController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/categories', CategoriesController.CategoriesGet.list)

}
