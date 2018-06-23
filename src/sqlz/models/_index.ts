import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'

const config = require('../config/config.json')

// Import model specification from its own definition file.
import { LanguageInstance, LanguageAttributes } from './language'
import { AppUserInstance, AppUserAttributes } from './appuser'
import { NewsInstance, NewsAttributes } from './news'
import { ProjectInstance, ProjectAttributes } from './project'
import { ProductInstance, ProductAttributes } from './product'

import { AbilityInstance, AbilityAttributes } from './ability'
import { AbilityTagInstance, AbilityTagAttributes } from './abilityTag'

import { CategoryInstance, CategoryAttributes } from './category'
import { CategoryTagInstance, CategoryTagAttributes } from './categoryTag'

import { SeoTagInstance, SeoTagAttributes } from './seotag'
import { SeoTagTagInstance, SeoTagTagAttributes } from './seotagTag'


interface DbConnection {
  Language: Sequelize.Model<LanguageInstance, LanguageAttributes>,
  AppUser: Sequelize.Model<AppUserInstance, AppUserAttributes>,
  News: Sequelize.Model<NewsInstance, NewsAttributes>
  Project: Sequelize.Model<ProjectInstance, ProjectAttributes>,
  Product: Sequelize.Model<ProductInstance, ProductAttributes>,

  Ability: Sequelize.Model<AbilityInstance, AbilityAttributes>,
  AbilityTag: Sequelize.Model<AbilityTagInstance, AbilityTagAttributes>,

  Category: Sequelize.Model<CategoryInstance, CategoryAttributes>,
  CategoryTag: Sequelize.Model<CategoryTagInstance, CategoryTagAttributes>,

  SeoTag: Sequelize.Model<SeoTagInstance, SeoTagAttributes>,
  SeoTagTag: Sequelize.Model<SeoTagTagInstance, SeoTagTagAttributes>


}
let db = {}

const dbConfig = config[process.env.NODE_ENV]
const sequelize = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],
  dbConfig
)

const basename = path.basename(module.filename)
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(function(file) {
    const model = sequelize['import'](path.join(__dirname, file))
    // NOTE: you have to change from the original property notation to
    // index notation or tsc will complain about undefined property.
    db[model['name']] = model
  })

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db['sequelize'] = sequelize
db['Sequelize'] = Sequelize

export default <DbConnection>db
