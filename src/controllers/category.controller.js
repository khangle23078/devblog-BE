import { getAll, insertOne } from './../services/category.service.js'

export const getCategories = async (req, res) => {
  try {
    const categories = await getAll()
    return res.status(200).json({
      status: 200,
      error: false,
      data: categories
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}

export const createCategory = async (req, res) => {
  try {
    await insertOne(req.body);
    return res.status(200).json({
      status: 201,
      error: false,
      message: "Tạo danh mục thành công"
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}
