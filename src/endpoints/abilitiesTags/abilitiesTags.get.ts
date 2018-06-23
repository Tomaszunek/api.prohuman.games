import { Request, Response } from 'express'
import { AbilityTagDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return AbilityTagDao
    .findAll()
    .then(abilitiesTags => res.status(200).send(abilitiesTags))
    .catch(error => res.boom.badRequest(error))
}
