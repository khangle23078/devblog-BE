import Category from "../models/categor.model"

export const getAll = () => {
  return Category.find().exec()
}

export const insertOne = (data) => {
  return Category.create(data)
}

export const getById = (id) => {
  return Category.findById(id).exec()
}

export const editById = (id, data) => {
  return Category.findByIdAndUpdate(id, data, { news: true }).exec()
}