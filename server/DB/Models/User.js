const Sequelize = require('sequelize');
const conn = require('../conn');
const { STRING, UUID, UUIDV4} = Sequelize;
const crypto =  require('crypto');


const User = conn.define('user', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: STRING,
    unique: true,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  password: {
    type: STRING,
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING
  }
});



///generates random string
const getRandomString = function (length) {
  return crypto.randomBytes(Math.ceil(length/2)).toString('hex').slice(0,length);
};

///part of SHA-2 cryto function to hash pw
const sha256 = function(password, salt){
  let hash = crypto.createHmac('sha256', salt);
  hash.update(password);
  let value = hash.digest('hex');
  return value;
};
//uses two above methods to finally set salt/hash on pw, on login and for any change
function saltHashPassword (user) {
  if(user.changed('password')){
  user.salt = getRandomString(12);
  user.password = sha256(user.password, user.salt);
  }
};

///function to check for correct pw in routes
User.prototype.correctPassword = function(pwd) {
  return sha256(pwd, this.salt)
}

//hooks using above methods to salt/hash pw for encryption
User.beforeCreate(saltHashPassword);
User.beforeUpdate(saltHashPassword);

module.exports = User;
