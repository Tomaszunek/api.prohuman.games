import { Express } from 'express'
import { ProductsController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/products', ProductsController.ProductGet.list)

}
