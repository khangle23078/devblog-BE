import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);
    if (!token) {
      throw new Error('Unauthorization')
    }

    const decoded = jwt.verify(token, "1faxcav24")
    if (!decoded) {
      throw new Error('Invalid token')
    }
    req.user = decoded;
    next()
  } catch (error) {
    return res.status(400).json({
      status: 400,
      message: error.message
    })
  }
}