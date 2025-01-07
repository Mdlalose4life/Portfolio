import express from 'express'
import nodemailer from "nodemailer"
import bodyParser from 'body-parser';
import cors from "cors"
import dotenv from 'dotenv'

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json());


const PORT = process.env.PORT;

app.post("/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.MYEMAIL,
                pass: process.env.PASSWORD,
            },
        });

        const mailOption ={
            from: email,
            to: process.env.MYEMAIL,
            subject: `New Message from ${name}: ${subject}`,
            text: message,
            replyTo: email
        };

        await transporter.sendMail(mailOption);
        res.status(200).json({ message: "Email sent successfully." })

    } catch (error) {
        res.status(500).json({error: "Failed to send email", details: error.message})
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http//localhost ${PORT}`)
});