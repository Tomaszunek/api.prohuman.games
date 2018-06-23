import { Request, Response } from 'express'
import { CategoryTagDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return CategoryTagDao
    .findAll()
    .then(categoriesTags => res.status(200).send(categoriesTags))
    .catch(error => res.boom.badRequest(error))
}
