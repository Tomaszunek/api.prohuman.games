import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { TemplateContentInstance } from './../sqlz/models/templateContent'


export function findAll(): Promise<any> {
  return db.TemplateContent
    .findAll({ include: [{ all: true }] })
}

