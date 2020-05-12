import { IncomingForm } from 'formidable'

export default async (req, res) => {
  const form = new IncomingForm({
    uploadDir: process.env.UPLOAD_DIR,
    keepExtensions: true
  })

  form.parse(req, (err, fields, files) => {
    if (err) return res.status(500).json({ err })

    const path = files.file.path
    const filename = path.replace(/^.*[\\\/]/, '')

    res.json({ err: null, path: '/static/uploads/'+ filename })
  })
}

export const config = {
  api: {
      bodyParser: false
  }
}