import * as Sequelize from 'sequelize'

export interface AbilityTagAttributes {
  id?: string
  label?: string
  text?: string
}

export interface AbilityTagInstance extends Sequelize.Instance<AbilityTagAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  label: string
  text: string
}

export default function defineAbilityTag(sequelize: Sequelize.Sequelize, DataTypes) {
  const AbilityTag = sequelize.define('AbilityTag', {
    label: DataTypes.STRING(255),
    text: DataTypes.STRING(50)
  }, {
      classMethods: {
        associate: function(models) {

        }
      }
    })
  return AbilityTag
}
