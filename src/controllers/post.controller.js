import { deleteOne, editOne, getAll, getOne } from './../services/post.service.js'
import { post } from '../models/post.model.js';

export const getPosts = async (req, res) => {
  try {
    const perPage = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const posts = await getAll(page, perPage)
    return res.status(200).json({
      status: 200,
      data: posts,
      error: false,
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

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await getOne(req.id);
    return res.status(200).message({
      status: 200,
      data: post,
      error: false,
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
    const newPost = new post(req.body);
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

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteOne(id)
    return res.status(200).json({
      status: 200,
      error: false,
      message: 'Xóa bài viết thành công'
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}