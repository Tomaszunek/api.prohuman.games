import * as Sequelize from 'sequelize'

export interface NewsAttributes {
  id?: string
  name?: string
  text?: string
  imagePath?: string
}

export interface NewsInstance extends Sequelize.Instance<NewsAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  name: string
  text: string
  imagePath: string
}

export default function defineNews(sequelize: Sequelize.Sequelize, DataTypes) {
  const News = sequelize.define('News', {
    name: DataTypes.STRING(255),
    text: DataTypes.STRING(50),
    imagePath: DataTypes.STRING(150),
  }, {
      classMethods: {
        associate: function(models) {
          News.hasMany(models.CategoryTag, {
            foreignKey: 'itemId'
          })
        }
      }
    })
  return News
}
