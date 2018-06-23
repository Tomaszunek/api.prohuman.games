import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { SeoTagInstance } from './../sqlz/models/seotag'


export function findAll(): Promise<any> {
  return db.SeoTag
    .findAll({ include: [{ all: true }] })
}

