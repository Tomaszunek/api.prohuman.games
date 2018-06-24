import { Express } from 'express'
import { TemplateContentController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/template-content', TemplateContentController.TemplateContentGet.list)

}
