require('dotenv').config();
const ftp = require("basic-ftp")

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
        console.log(await client.list())
        await client.uploadFrom("README.md", "README_FTP.md")
        await client.downloadTo("README_COPY.md", "README_FTP.md")
    }
    catch(err) {
        console.log(err)
    }
    client.close()
}

upload()
