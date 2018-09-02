import { Express } from 'express'
import { PageContentController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/mainpage/content', PageContentController.PageContentGet.mainPageContent)

}
