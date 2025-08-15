import { resend } from "../lib/resend.js";
import NewUserRegistrationEmail from "../../emailsTemplate/NewUserRegistrationEmail.js";

export const EmailForAuthor = async (username, email, phone) => {
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // change to your domain
      to: "vs1020847@gmail.com", // author email
      subject: "New user registered on VishalCodes",
      react: NewUserRegistrationEmail({ username, email, phone })
    });

    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
