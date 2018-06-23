import { Request, Response } from 'express'
import { NewsDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return NewsDao
    .findAll()
    .then(news => res.status(200).send(news))
    .catch(error => res.boom.badRequest(error))
}
