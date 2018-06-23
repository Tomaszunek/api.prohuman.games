import * as Sequelize from 'sequelize'

export interface SeoTagTagAttributes {
  id?: string
  label?: string
  text?: string
}

export interface SeoTagTagInstance extends Sequelize.Instance<SeoTagTagAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  label: string
  text: string
}

export default function defineSeoTag(sequelize: Sequelize.Sequelize, DataTypes) {
  const SeoTagTag = sequelize.define('SeoTagTag', {
    label: DataTypes.STRING(255),
    text: DataTypes.STRING(50)
  }, {
      classMethods: {
        associate: function(models) {

        }
      }
    })
  return SeoTagTag
}
