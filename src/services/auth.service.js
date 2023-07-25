import User from './../models/user.model.js'

export const emailUserExits = (email) => {
  return User.findOne({ email: email }).exec()
}

export const loginUser = (data) => {
  return User.create(data)
}
