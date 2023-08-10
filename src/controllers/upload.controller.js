export const uploadFile = (req, res) => {
  try {
    const file = req.file;
    return res.status(200).json({
      status: 200,
      error: false,
      file: {
        url: file.path,
        public_id: file.filename
      },
      message: "Upload file success"
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error.message
    })
  }
}