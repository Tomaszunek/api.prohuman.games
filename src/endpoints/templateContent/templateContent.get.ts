import { Request, Response } from 'express'
import { TemplateContentDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return TemplateContentDao
    .findAll()
    .then(projects => res.status(200).send(projects))
    .catch(error => res.boom.badRequest(error))
}
