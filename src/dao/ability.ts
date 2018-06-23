import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { AbilityInstance } from './../sqlz/models/ability'


export function findAll(): Promise<any> {
  return db.Ability
    .findAll({ include: [{ all: true }] })
}

