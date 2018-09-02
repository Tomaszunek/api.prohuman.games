import * as Sequelize from 'sequelize'

export interface CategoryAttributes {
  id?: string
  name?: string
  class?: string,
  type?: string
}

export interface CategoryInstance extends Sequelize.Instance<CategoryAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  name: string
  class: string
  type: string
}

export default function defineCategory(sequelize: Sequelize.Sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING(255),
    class: DataTypes.STRING(50),
    type: DataTypes.STRING(100)
  }, {
      classMethods: {
        associate: function(models) {
          Category.hasOne(models.CategoryTag, {
            foreignKey: 'categoryId'
          })
        }
      }
    })
  return Category
}
