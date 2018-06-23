import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { CategoryTagInstance } from './../sqlz/models/categoryTag'


export function findAll(): Promise<any> {
  return db.CategoryTag
    .findAll({ include: [{ all: true }] })
}

