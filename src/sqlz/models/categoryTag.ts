import * as Sequelize from 'sequelize'

export interface CategoryTagAttributes {
  id?: string
  categoryId?: Int32Array
  itemId?: Int32Array
  itemType?: string
}

export interface CategoryTagInstance extends Sequelize.Instance<CategoryTagAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  categoryId: Int32Array
  itemId: Int32Array
  itemType: string
}

export default function defineCategoryTag(sequelize: Sequelize.Sequelize, DataTypes) {
  const CategoryTag = sequelize.define('CategoryTag', {
    categoryId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    itemType: DataTypes.STRING(50)
  }, {
      classMethods: {
        associate: function(models) {
          CategoryTag.belongsTo(models.Category, {
            foreignKey: 'categoryId'
          })
          CategoryTag.belongsTo(models.News, {
            foreignKey: 'itemId'
          })
          CategoryTag.belongsTo(models.Product, {
            foreignKey: 'itemId'
          })
          CategoryTag.belongsTo(models.Project, {
            foreignKey: 'itemId'
          })
        }
      }
    })
  return CategoryTag
}
