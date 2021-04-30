var {Model, DataTypes} = require("sequelize");
var sequelize = require("../database");
class LessonTable extends Model{}
LessonTable.init({
    lesson_id:{
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    lesson_name:{
        type:DataTypes.STRING,
    },
    lesson_video_id:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    tableName:'lesson_tables',
    modelName:'LessonTable'
});
module.exports = LessonTable;