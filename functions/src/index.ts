import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(functions.config().api.sendgrid);

export const sendMail = functions.region('asia-northeast1').https.onRequest(async (req, res) => {
    let { message, mail, name } = req.body

    if(!name || !mail) return
    const msg = {
        to: 'nicosanco4567@gmail.com',
        from: 'client@kenta-nakajima.com',
        subject: '[CONTACT]クライアントからのお問い合わせ',
        text: `
NAME:
${name}

EMAIL ADDRESS:
${mail}

MESSAGE:
${message}
        `
    };
    await sgMail.send(msg);

    res.set('Access-Control-Allow-Origin', 'https://kenta-nakajima.com');
    res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    // dataフィールドに渡したい値は入れる
    res.json({ data: 'ok' });
});




