import * as Sequelize from 'sequelize'

export interface SeoTagAttributes {
  id?: string
  label?: string
  text?: string
}

export interface SeoTagInstance extends Sequelize.Instance<SeoTagAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  label: string
  text: string
}

export default function defineSeoTag(sequelize: Sequelize.Sequelize, DataTypes) {
  const SeoTag = sequelize.define('SeoTag', {
    label: DataTypes.STRING(255),
    text: DataTypes.STRING(50)
  }, {
      classMethods: {
        associate: function(models) {

        }
      }
    })
  return SeoTag
}
