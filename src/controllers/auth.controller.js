import { emailUserExits } from '../services/auth.service';
import User from '../models/user.model';

export const register = async (req, res) => {
  try {
    const { userName, password, email } = req.body;

    const isUserExits = await emailUserExits(email)
    if (isUserExits) {
      throw new Error('Email đã được đăng ký')
    }
    const user = new User({ userName, password, email })
    await user.save()
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