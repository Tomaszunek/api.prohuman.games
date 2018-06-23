import { Request, Response } from 'express'
import { ProductsDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return ProductsDao
    .findAll()
    .then(products => res.status(200).send(products))
    .catch(error => res.boom.badRequest(error))
}
