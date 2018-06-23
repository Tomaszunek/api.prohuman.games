import { Request, Response } from 'express'
import { ProjectDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return ProjectDao
    .findAll()
    .then(projects => res.status(200).send(projects))
    .catch(error => res.boom.badRequest(error))
}
