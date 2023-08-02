import { editOne, getAll } from './../services/post.service.js'
import { post } from '../models/post.model.js';

export const getPosts = async (req, res) => {
  try {
    const perPage = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const posts = await getAll(page, perPage)
    return res.status(200).json({
      status: 200,
      error: false,
      data: posts,
      paginate: {
        page: page,
        limit: perPage,
        totalPage: Math.round(posts.length / perPage)
      }
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}

export const createPost = async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const { id } = req.params;
    const newPost = new post({
      title: title,
      category: category,
      content: content,
      user: id
    })
    await newPost.save()
    return res.status(201).json({
      status: 201,
      error: false,
      message: "Tạo bài viết thành công"
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}

export const editPost = async (req, res) => {
  try {
    const { id } = req.params;
    await editOne(id, req.body)
    return res.status(200).json({
      status: 200,
      error: false,
      message: "Sửa bài viết thành công!"
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}