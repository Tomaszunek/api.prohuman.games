module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
      },      
      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
        unique: true
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(255)
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
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Products')
}