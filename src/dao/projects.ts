import * as uuid from 'uuid'
import db from '../sqlz/models/_index'
import { ProjectInstance } from './../sqlz/models/project'

export function findOne(language: ProjectInstance): Promise<any> {

  return db.Project.findOne({
    where: { name: 'fr' }
  })
    .then(project => {
      return db.Project
        .create({
          id: uuid.v1(),
          name: project.name,
          label: project.label
        })
    })
}


export function findAll(): Promise<any> {
  return db.Project
    .findAll({ include: [{ all: true }] })
}


export function findAllMainPage(): Promise<any> {
  return db.Project
    .findAll({
      include: [
        {
          model: db.CategoryTag,
          where: { itemType: 'project' },
          required: false,
          include: [
            { model: db.Category }
          ]
        }
      ]
    })
}
