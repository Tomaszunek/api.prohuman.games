import * as Sequelize from 'sequelize'

export interface TemplateContentAttributes {
  id?: string
  label?: string
  text?: string
}

export interface TemplateContentInstance extends Sequelize.Instance<TemplateContentAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  label: string
  text: string
}

export default function defineTemplateContent(sequelize: Sequelize.Sequelize, DataTypes) {
  const TemplateContent = sequelize.define('TemplateContent', {
    label: DataTypes.STRING(255),
    text: DataTypes.STRING(50)
  }, {
      classMethods: {
        associate: function(models) {

        }
      }
    })
  return TemplateContent
}
