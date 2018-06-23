import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { NewsInstance } from './../sqlz/models/news'


export function findAll(): Promise<any> {
  return db.News
    .findAll({ include: [{ all: true }] })
}

