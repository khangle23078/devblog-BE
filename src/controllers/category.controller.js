import { deleteById, editById, getAll, getById, insertOne } from './../services/category.service.js'

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

export const getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await getById(id)
    return res.status(200).json({
      status: 200,
      error: false,
      data: category
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}

export const editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await editById(id, req.body)
    return res.status(200).json({
      status: 200,
      error: false,
      message: "Sửa danh mục thành công"
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteById(id)
    return res.status(200).json({
      status: 200,
      error: false,
      message: "Xóa danh mục thành công"
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}