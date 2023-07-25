import Category from "../models/categor.model"

export const getAll = () => {
  return Category.find().exec()
}