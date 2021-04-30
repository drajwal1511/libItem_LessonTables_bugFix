const {Sequelize} = require("sequelize");
const env = require("./env");
const sequelize = new Sequelize(env.database,env.db_username,env.db_password,{
    host:env.db_hostname,
    dialect:'mysql',
    logging:false
});
 module.exports = sequelize;