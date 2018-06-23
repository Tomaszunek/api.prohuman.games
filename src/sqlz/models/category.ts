import * as Sequelize from 'sequelize'

export interface CategoryAttributes {
  id?: string
  label?: string
  text?: string
}

export interface CategoryInstance extends Sequelize.Instance<CategoryAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  label: string
  text: string
}

export default function defineCategory(sequelize: Sequelize.Sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    label: DataTypes.STRING(255),
    text: DataTypes.STRING(50)
  }, {
      classMethods: {
        associate: function(models) {

        }
      }
    })
  return Category
}
