import { Request, Response } from 'express'
import { CategoryDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return CategoryDao
    .findAll()
    .then(categories => res.status(200).send(categories))
    .catch(error => res.boom.badRequest(error))
}
