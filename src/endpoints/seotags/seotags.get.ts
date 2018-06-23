import { Request, Response } from 'express'
import { SeoTagDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return SeoTagDao
    .findAll()
    .then(seoTags => res.status(200).send(seoTags))
    .catch(error => res.boom.badRequest(error))
}
