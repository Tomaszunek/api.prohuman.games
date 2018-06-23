import { Request, Response } from 'express'
import { AbilityDao } from '../../dao/_index'

export function list(req: Request, res: Response) {
  return AbilityDao
    .findAll()
    .then(abilities => res.status(200).send(abilities))
    .catch(error => res.boom.badRequest(error))
}
