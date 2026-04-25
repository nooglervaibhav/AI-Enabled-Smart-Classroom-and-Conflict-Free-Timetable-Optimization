import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_8zd9m0p";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_je5g0df";
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "rbs-LjFvOElLQhTFf";

export async function sendOtpEmail({ toEmail, toName, otp, mode }) {
  const templateParams = {
    to_email: toEmail,
    email: toEmail,
    user_email: toEmail,
    recipient: toEmail,
    reply_to: toEmail,
    to_mail: toEmail,
    to_name: toName || "User",
    user_name: toName || "User",
    from_name: "Smart Timetable",
    from_email: "noreply@smarttimetable.app",
    otp,
    passcode: otp,
    verification_code: otp,
    auth_mode: mode,
    subject: `Your Smart Timetable ${mode === "signup" ? "signup" : "login"} OTP`,
    message: `Your Smart Timetable verification code is ${otp}. It is valid for a short time.`,
    app_name: "Smart Timetable",
  };

  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    EMAILJS_PUBLIC_KEY,
  );
}
