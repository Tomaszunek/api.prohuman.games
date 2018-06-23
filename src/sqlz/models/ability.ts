import * as Sequelize from 'sequelize'

export interface AbilityAttributes {
  id?: string
  label?: string
  text?: string
}

export interface AbilityInstance extends Sequelize.Instance<AbilityAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  label: string
  text: string
}

export default function defineAbility(sequelize: Sequelize.Sequelize, DataTypes) {
  const Ability = sequelize.define('Ability', {
    label: DataTypes.STRING(255),
    text: DataTypes.STRING(50)
  }, {
      classMethods: {
        associate: function(models) {

        }
      }
    })
  return Ability
}
