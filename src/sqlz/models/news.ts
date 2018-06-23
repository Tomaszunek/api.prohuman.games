import * as Sequelize from 'sequelize'

export interface NewsAttributes {
  id?: string
  label?: string
  text?: string
}

export interface NewsInstance extends Sequelize.Instance<NewsAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  label: string
  text: string
}

export default function defineNews(sequelize: Sequelize.Sequelize, DataTypes) {
  const News = sequelize.define('News', {
    label: DataTypes.STRING(255),
    text: DataTypes.STRING(50)
  }, {
      classMethods: {
        associate: function(models) {

        }
      }
    })
  return News
}
