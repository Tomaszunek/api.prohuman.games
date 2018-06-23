import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { AbilityTagInstance } from './../sqlz/models/abilityTag'


export function findAll(): Promise<any> {
  return db.AbilityTag
    .findAll({ include: [{ all: true }] })
}

