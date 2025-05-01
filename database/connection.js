
const {Sequelize, DataTypes} = require("sequelize")
const sequelize = new Sequelize("postgresql://postgres.rsuujbwdmpjxtoscsebl:haribahadur123@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")
sequelize.authenticate()
.then(()=>{
    console.log("Authenticated ")
})
.catch((err)=>{
    console.log("Error" + err)
})


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db
