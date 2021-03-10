const mongoose = require('mongoose');
const { dbpw, dbname } = process.env;

module.exports = async () => {
  await mongoose.connect(`mongodb+srv://admin:${dbpw}@cluster0.1hoay.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  return mongoose;
}