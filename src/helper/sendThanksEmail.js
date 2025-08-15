import {resend} from "../lib/resend.js";
import ThankYouEmail from "../../emailsTemplate/ThankyouEmail.js";

export const ThanksEmail = async (name, email) => {
    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Thank You for Reaching Out!",
            react: ThankYouEmail({name}), // JSX pass
        });

        return {
            success: true,
            message: "Email sent successfully",
            data,
        };
    } catch (error) {
        console.error("Email sending failed:", error);
        return {
            success: false,
            message: "Email sending failed",
            error: error.message,
        };
    }
};
