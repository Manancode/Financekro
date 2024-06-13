import { NextResponse  , NextRequest} from "next/server";
import nodemailer from "nodemailer";

// Function to handle POST request
export async function POST(req: NextRequest) {
  try {
    // Parse the JSON body
    const {
      first_name,
      last_name,
      email,
      company_name,
      help,
      company_size,
      info,
    } = await req.json();

    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables
        pass: process.env.EMAIL_PASS, // Use environment variables
      },
    });

    // Setup email data
    const mailOptions = {
      from: email,
      to: "devilarora008@gmail.com",
      subject: "Contact Form Submission",
      html: `
        <h1>Contact Form</h1>
        <p>First Name: ${first_name}</p>
        <p>Last Name: ${last_name}</p>
        <p>Work Email: ${email}</p>
        <p>Company Name: ${company_name}</p>
        <p>Company Size: ${company_size}</p>
        <p>Help: ${help}</p>
        <p>Info: ${info}</p>
      `,
    };

    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ message: "Email has been sent" }, { status: 200 });
  } catch (error) {
    // Log error to console (for debugging)
    console.error("Error sending email:", error);

    // Return error response
    return NextResponse.json({ message: "Email has not been sent" }, { status: 500 });
  }
}
