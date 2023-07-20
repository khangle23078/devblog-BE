import createError from 'http-errors'
import { registerUser } from '../services/auth.service';
import userModel from '../models/user.model';

export const register = async (req, res) => {
  try {
    const { userName, password, email } = req.body;
    if (!userName || !password || !email) {
      return next(createError[403])
    }
    const User = new userModel({ userName, password, email })
    await User.save()
    return res.status(200).json({
      status: 200,
      error: false,
      message: "Đăng ký thành công"
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: "Đăng ký thất bại",
      message: error.message
    })
  }
}