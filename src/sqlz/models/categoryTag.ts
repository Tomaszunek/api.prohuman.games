import * as Sequelize from 'sequelize'

export interface CategoryTagAttributes {
  id?: string
  label?: string
  text?: string
}

export interface CategoryTagInstance extends Sequelize.Instance<CategoryTagAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  label: string
  text: string
}

export default function defineCategoryTag(sequelize: Sequelize.Sequelize, DataTypes) {
  const CategoryTag = sequelize.define('CategoryTag', {
    label: DataTypes.STRING(255),
    text: DataTypes.STRING(50)
  }, {
      classMethods: {
        associate: function(models) {

        }
      }
    })
  return CategoryTag
}
