const mongoose = require('mongoose')
const dotenv = require('./env/development')
const databaseConnection = async ()=>{
    try {
      mongoose.set('strictQuery', false);
      await mongoose.connect(dotenv.MONGODB_URL)
      console.log('database is connect successfully!')  
    } 
    catch (error) {
        console.log('something went wrong',error)
    }
}

module.exports = databaseConnection