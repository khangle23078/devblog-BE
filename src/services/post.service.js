import { post } from "../models/post.model"

export const getAll = (page, perPage) => {
  return post.find().skip((page - 1) * perPage).limit(perPage)
    .populate('category', 'name')
    .populate('user', 'email')
    .exec()
}

export const getOne = (id) => {
  return post.findById(id).exec();
}

export const insertOne = (data) => {
  return post.create(data)
}

export const editOne = (id, data) => {
  return post.findByIdAndUpdate(id, data).exec()
}

export const deleteOne = (id) => {
  return post.findByIdAndDelete(id).exec()
}