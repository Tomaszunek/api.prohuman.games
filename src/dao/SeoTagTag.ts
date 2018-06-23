import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { SeoTagTagInstance } from './../sqlz/models/seotagTag'


export function findAll(): Promise<any> {
  return db.SeoTagTag
    .findAll({ include: [{ all: true }] })
}

