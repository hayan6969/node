import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const body = await req.json(); // Parse the request body correctly
        console.log('BOYD>>>>',body);

// Looking to send emails in production? Check out our Email API/SMTP product!
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "69a4168d0160ef",
      pass: "24f39b0b72d232"
    }
  });

        // 🔹 Define Email Options
        const mailOptions = {
            from: "no-reply@example.com", // Sender address
            to: body.to, // Recipient
            subject: body.subject, // Email Subject
            text: body.text, // Plain text body
            html: body.html // HTML email body
        };

// Send Email
const info = await transport.sendMail(mailOptions);

        return new Response(JSON.stringify({ message:"Email sent successfully!",info }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.log(error);
        
        return new Response(JSON.stringify({error:"Internal Server Error!" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
