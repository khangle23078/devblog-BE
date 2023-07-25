import { post } from "../models/post.model"

export const getAll = (page, perPage) => {
  return post.find().skip(page).limit(perPage)
    .populate('category', 'name')
    .populate('author', 'userName')
    .exec()
}