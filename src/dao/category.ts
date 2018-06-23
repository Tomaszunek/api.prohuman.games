import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { CategoryInstance } from './../sqlz/models/category'


export function findAll(): Promise<any> {
  return db.Category
    .findAll({ include: [{ all: true }] })
}

