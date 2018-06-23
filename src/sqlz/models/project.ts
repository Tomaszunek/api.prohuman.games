import * as Sequelize from 'sequelize'

export interface ProjectAttributes {
  id?: string
  label?: string
  name?: string
}

export interface ProjectInstance extends Sequelize.Instance<ProjectAttributes> {
  id: string
  createdAt: Date
  updatedAt: Date

  label: string
  name: string
}

export default function defineProject(sequelize: Sequelize.Sequelize, DataTypes) {
  const Project = sequelize.define('Project', {
    label: DataTypes.STRING(255),
    name: DataTypes.STRING(50)
  }, {
      classMethods: {
        associate: function(models) {
        }
      }
    })
  return Project
}
