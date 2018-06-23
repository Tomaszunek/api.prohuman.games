module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('News', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },
      label: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      text: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  ,
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Languages')
}