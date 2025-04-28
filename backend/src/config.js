import dotenv from "dotenv"


dotenv.config();  


export const config = {
    db:{
        URI: process.env.DB_URI,
    },
    server:{
        port: process.env.PORT
    },
    JWT:{
        secret: process.env.JWT_SECRET,
        expiresIN: process.env.JWT_EXPIRES
    },
    emailAdmin:{
        email: process.env.ADMIN_EMAIL,
        password: process.env.ADMIN_PASSWORD,
    },
    userEmail: {
        email_user: process.env.EMAIL_USER,
        password_user: process.env.EMAIL_PASS
    }
};