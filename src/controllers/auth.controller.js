import { emailUserExits, loginUser } from '../services/auth.service';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';

export const register = async (req, res) => {
  try {
    const { userName, password, email } = req.body;

    const isUserExits = await emailUserExits(email)
    if (isUserExits) {
      throw new Error('Email đã được đăng ký')

    const isUserExits = await emailUserExits(email)
    if (isUserExits) {
      throw new Error('Email đã được đăng ký')
    }
    const user = new User({ userName, password, email })
    await user.save()
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

export const login = async (req, res) => {
  try {
    const { email } = req.body;
    const emailExits = await emailUserExits(email);
    if (!emailExits) {
      throw new Error('Email không tồn tại')
    }

    const accessToken = jwt.sign({ email }, "1faxcav24", {
      expiresIn: '1d'
    })
    return res.status(200).json({
      status: 200,
      error: false,
      data: {
        email: emailExits.email,
        role: emailExits.role,
        accessToken: accessToken
      },
      message: 'Đăng nhập thành công'
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