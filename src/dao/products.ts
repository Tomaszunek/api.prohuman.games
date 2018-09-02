import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { ProductInstance } from './../sqlz/models/product'


export function findAll(): Promise<any> {
  return db.Product
    .findAll({ include: [{ all: true }] })
}

export function findAllMainPage(): Promise<any> {
  return db.Product
    .findAll({
      include: [
        {
          model: db.CategoryTag,
          where: { itemType: 'product' },
          required: false,
          include: [
            { model: db.Category }
          ]
        }
      ]
    })
}
