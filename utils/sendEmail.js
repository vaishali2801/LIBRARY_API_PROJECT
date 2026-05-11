import transporter from "../config/email.js";

const sendEmail = async({to,subject,html})=>{
    try {
        const info = await transporter.sendMail({
            from: '"Library" <vaishalichauhan2801@gmail.com>',
            to,
            subject,
            html
        })
        console.log("email set id: ",info.messageId);
    } catch (error) {
        console.log(error.message); 
    }
}
export default sendEmail;