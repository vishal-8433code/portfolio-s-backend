import asyncHandler from "../utils/asyncHandler.js"
import { ThanksEmail } from "../helper/sendThanksEmail.js"
import { EmailForAuthor } from "../helper/sendToAuthorEmail.js"
import { User } from "../models/user.modal.js"

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const uploadUserDetail = asyncHandler(async (req, res) => {
    const { username, email, phone } = req.body;
    console.log(req.body)

    console.log("Username:", username, "Email:", email, "Phone:", phone)

    // 1️⃣ Basic validation
    if (!username || !email || !phone) {
        return res.status(400).json({
            success: false,
            message: "Username, email, and phone are required."
        });
    }

    // 2️⃣ Email format validation
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email format."
        });
    }

    // 3️⃣ Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.status(409).json({
            success: false,
            message: "User with this email already exists."
        });
    }

    // 4️⃣ Save user to database
    const newUser = await User.create({
        email,
        phone,
        username
    });

    // 5️⃣ Send Thank You Email to user
    let thankEmailResp;
    try {
        thankEmailResp = await ThanksEmail(username, email);
    } catch (err) {
        console.error("Error sending ThanksEmail:", err);
    }

    // 6️⃣ Send notification email to author
    let authorEmailResp;
    try {
        authorEmailResp = await EmailForAuthor(username, email, phone);
    } catch (err) {
        console.error("Error sending EmailForAuthor:", err);
    }

    // 7️⃣ Check email sending status
    if (!thankEmailResp || !authorEmailResp) {
        return res.status(500).json({
            success: false,
            message: "User saved, but failed to send one or more emails."
        });
    }

    // 8️⃣ Success response
    return res.status(201).json({
        success: true,
        message: "User registered successfully. Emails sent.",
        user: newUser
    });
});

export default uploadUserDetail;


const getUserDetail = asyncHandler(async (req, res) => {
    try {
        // 1️⃣ Database se saare users fetch karo
        const users = await User.find({}, "username email phone -_id");
        // ↑ "username email phone -_id" means sirf ye fields bhejenge, _id nahi bhejenge

        // 2️⃣ Agar koi user nahi hai
        if (!users || users.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No users found."
            });
        }

        // 3️⃣ Success response
        return res.status(200).json({
            success: true,
            totalUsers: users.length,
            data: users
        });
    } catch (error) {
        console.error("Error fetching user details:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error."
        });
    }
})
export {
    uploadUserDetail,
    getUserDetail
}