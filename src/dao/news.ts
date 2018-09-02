import * as uuid from 'uuid'
import db from '../sqlz/models/_index'

export function findAll(): Promise<any> {
  return db.News
    .findAll({ include: [{ all: true }] })
}

export function findAllMainPage(): Promise<any> {
  return db.News
    .findAll({
      include: [
        {
          model: db.CategoryTag,
          where: { itemType: 'news' },
          required: false,
          include: [
            { model: db.Category }
          ]
        }
      ]
    })
}
