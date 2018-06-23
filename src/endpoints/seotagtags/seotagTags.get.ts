import { Request, Response } from 'express'
import { SeoTagTagDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return SeoTagTagDao
    .findAll()
    .then(seoTagTags => res.status(200).send(seoTagTags))
    .catch(error => res.boom.badRequest(error))
}
