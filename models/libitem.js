var {Model, DataTypes} = require("sequelize");
var sequelize = require("../database");
class LibItem extends Model{}
LibItem.init({
    item_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    item_name:{
        type:DataTypes.STRING,
    },
    item_type:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    tableName:'library_items',
    modelName:'LibItem'
});
module.exports = LibItem;