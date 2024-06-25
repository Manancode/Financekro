import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { z } from "zod";

// Email validation schema
const EmailSchema = z.string().email({ message: "Please enter a valid email address" });

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received request body:", body);

    // Validate email address
    const emailValidation = EmailSchema.safeParse(body.email);
    if (!emailValidation.success) {
      console.log("Email validation failed:", emailValidation.error);
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 });
    }

    // Retrieve Mailchimp credentials from environment variables
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const API_SERVER = process.env.MAILCHIMP_API_SERVER;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !API_SERVER || !AUDIENCE_ID) {
      console.log("Missing Mailchimp credentials.");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    // Construct Mailchimp API request URL
    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    // Prepare request data
    const data = {
      email_address: emailValidation.data,
      status: "subscribed",
    };

    console.log("it will show the data" , data)

    // Set request headers
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${API_KEY}`,
      },
    };


    console.log("it will show the options" , options)
    // Send POST request to Mailchimp API
    try {
      
      const response = await axios.post(url, data, options);
      console.log(response)
      console.log("Mailchimp response:", response.data);
      if (response.status === 200) {
        return NextResponse.json({ message: "Awesome! You have successfully subscribed!" }, { status: 201 });
      }
      else{
        console.error("Unexpected Mailchimp response status:", response.status);
        return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data);
        if (error.response?.data.title === "Member Exists") {
          return NextResponse.json({
            error: "Uh oh, it looks like this email is already subscribed 🧐",
          }, { status: 400 });
        }
      }
      console.error("Error subscribing to Mailchimp:", error);
      return NextResponse.json({
        error: "Oops! There was an error subscribing you to the newsletter. Please try again later.",
      }, { status: 500 });
    }
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
