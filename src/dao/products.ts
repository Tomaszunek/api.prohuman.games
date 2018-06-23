import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { ProductInstance } from './../sqlz/models/product'


export function findAll(): Promise<any> {
  return db.Product
    .findAll({ include: [{ all: true }] })
}

