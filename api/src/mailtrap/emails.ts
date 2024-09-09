import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplates";
import { client, sender } from "./mailtrap.config"

export const sendVerifyEmail= async (email:string,verifyToken:string)=>{
    const recipient =[{email}]
    try{
        const response=await client.send({
          from: sender,
          to: recipient,
          subject: "Verify your email",
          html: VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}',verifyToken),
          category: "Email Verification",
        })
        console.log("Email sent successfully", response)
    }catch(err){
        console.error("Error sending email",err)
        throw new Error(`Error sending verification email:${err}`)
    }
}
export const sendWelcomeEmail= async (email:string,name:string)=>{
    const recipient =[{email}]
    try{
        const response=await client.send({
          from: sender,
          to: recipient,
          subject: "Welcome to [Your Company Name]",
          html: WELCOME_EMAIL_TEMPLATE.replace(`[User's Name]`,name),
          category: "Welcome Email",
        })
        console.log("Email sent successfully", response)
    }catch(err){
        console.error("Error sending email",err)
        throw new Error(`Error sending welcome email:${err}`)
    }
}