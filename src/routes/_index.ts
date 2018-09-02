import * as winston from 'winston'
import { Express, Request, Response } from 'express'
import * as LanguagesRoutes from './languages'
import * as AppUserRoutes from './appusers'
import * as NewsRoutes from './news'
import * as ProjectRoutes from './projects'
import * as ProductRoutes from './products'
import * as AbilityRoutes from './abilities'
import * as AbilityTagRoutes from './abilitiesTags'
import * as CategoryRoutes from './categories'
import * as CategoryTagRoutes from './categoriesTags'
import * as SeoTagRoutes from './seoTags'
import * as SeoTagTagsRoutes from './seoTagTags'
import * as TemplateContentRoutes from './templateContent'
import * as PageContent from './pageContent'

export function initRoutes(app: Express) {
  winston.log('info', '--> Initialisations des routes')

  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!'
  }))

  LanguagesRoutes.routes(app)
  AppUserRoutes.routes(app)
  NewsRoutes.routes(app)
  ProjectRoutes.routes(app)
  ProductRoutes.routes(app)
  TemplateContentRoutes.routes(app)
  AbilityRoutes.routes(app)
  AbilityTagRoutes.routes(app)
  CategoryRoutes.routes(app)
  CategoryTagRoutes.routes(app)
  SeoTagRoutes.routes(app)
  SeoTagTagsRoutes.routes(app)
  PageContent.routes(app)


  app.all('*', (req: Request, res: Response) => res.boom.notFound())
}
