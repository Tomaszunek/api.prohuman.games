import { Express } from 'express'
import { ProjectController } from '../endpoints/_index'

export function routes(app: Express) {

  app.get('/api/projects', ProjectController.ProjectsGet.list)

}
