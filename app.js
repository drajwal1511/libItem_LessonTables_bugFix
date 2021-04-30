const express  = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(express.static("public"));
const sequelize = require("./database");
var LibItem = require("./models/libitem");
var LessonTable = require("./models/lessontable");
(async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Connection to DB successful");
    }catch (e){
        console.log("Connection to Database failed");
        console.log(e);
    }
})();
(async ()=>{
    try{
        await sequelize.sync();
        console.log("Database synced");
    }catch(e){
        console.error(e);
    }
})();
async function checkBug(){
    console.log("***********checking Bug************");
    var libd=await LibItem.findAll({where:{item_type:'video'}});
    // console.log(d[0].item_name,typeof(d),d.length);
    // console.log(typeof(d[0].item_name));
    for(var i=0;i<libd.length;i++){
        var name =libd[i].item_name.substr(0,libd[i].item_name.indexOf('.'));
        // console.log(name);
        var lessond = await LessonTable.findAll({where:{lesson_name:name}});
        for(var j=0;j<lessond.length;j++){
            lessond[j].lesson_video_id=libd[i].item_id;
            await lessond[j].save();
        }
    }
    setTimeout(checkBug,600000);
}
checkBug();
app.listen(3000,()=>{
    console.log("server up at port 3000");
})