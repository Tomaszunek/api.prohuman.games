import { Express } from 'express'
import { NewsController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/news', NewsController.NewsGet.list)

}
