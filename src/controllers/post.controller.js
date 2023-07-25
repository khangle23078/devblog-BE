import { getAll } from './../services/post.service.js'

export const getPosts = async (req, res) => {
  try {
    const { perPage } = parseInt(req.query) || 10;
    const { page } = Math.round((req.query - 1) * perPage)
    const posts = await getAll()
    return res.status(200).json({
      status: 200,
      error: false,
      data: posts,
      paginate: {
        page: page,
        limit: perPage,
        totalPage: posts.length / perPage
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