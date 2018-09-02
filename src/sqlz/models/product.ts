import * as Sequelize from 'sequelize'

export interface ProductAttributes {
  id?: string
  name?: string
  description?: string
  imagePath?: string
}

export interface ProductInstance extends Sequelize.Instance<ProductAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  name: string
  description: string,
  imagePath: string
}

export default function defineProcuct(sequelize: Sequelize.Sequelize, DataTypes) {
  const Product = sequelize.define('Product', {
    description: DataTypes.STRING(255),
    name: DataTypes.STRING(50),
    imagePath: DataTypes.STRING(150),
  }, {
      classMethods: {
        associate: function(models) {
          Product.hasMany(models.CategoryTag, {
            foreignKey: 'itemId'
          })
        }
      }
    })
  return Product
}
