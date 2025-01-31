const User = require('../models').User;
const Q = require('q');
const UserRepositoryInterface = require('./interfaces/userRepositoryInterface');

var UserRepository = Object.create(UserRepositoryInterface);

UserRepository.add = function(user, hash) {
  var deferred = Q.defer();
  
  User
    .create({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: hash,
        isAdmin: user.isAdmin,
        dob: user.dob
    })
    .then(user => deferred.resolve(user))
    .catch(error => deferred.reject(error));
  
  return deferred.promise;
};

UserRepository.getByEmail = function(email) {
  var deferred = Q.defer();

  User
    .findOne({where: {email: email}})
    .then(user => deferred.resolve(user))
    .catch(error => deferred.reject(error));

  return deferred.promise;
};

UserRepository.getById = function(id) {
  var deferred = Q.defer();

  User
    .findOne({where: {id: id}})
    .then(user => deferred.resolve(user))
    .catch(error => deferred.reject(error));

  return deferred.promise;
};

module.exports = UserRepository;