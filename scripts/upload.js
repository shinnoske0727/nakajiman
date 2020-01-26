require('dotenv').config()
const ftp = require('basic-ftp')
const path = require('path')

const upload = async () => {
    const client = new ftp.Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASS,
            secure: true
        })
        await client.uploadFromDir(
            path.resolve(__dirname, '../dist/'),
            'kenta-nakajima.com/public_html/'
        )
    } catch (err) {
        throw new Error(err)
    }
    client.close()
}

upload()
