import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendOtpEmail = async (to, otp) => {
  try {
    console.log("Preparing OTP email...");
    console.log("Sending OTP to:", to);

    const { data, error } = await resend.emails.send({
      from: "Job Hunt <onboarding@resend.dev>",
      to: [to],
      subject: "Verify your email - Job Hunt",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 480px;
          margin: auto;
          padding: 24px;
          border: 1px solid #eee;
          border-radius: 12px;
        ">

          <h2 style="color: #6B3AC2; margin-bottom: 4px;">
            Job Hunt
          </h2>

          <p style="color: #555;">
            Use the code below to verify your email address.
          </p>

          <div style="
            font-size: 32px;
            font-weight: bold;
            letter-spacing: 8px;
            color: #111;
            text-align: center;
            padding: 16px 0;
          ">
            ${otp}
          </div>

          <p style="color: #888; font-size: 13px;">
            This code will expire in 10 minutes.
            If you didn't request this, you can ignore this email.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      throw new Error(error.message);
    }

    console.log("OTP email sent successfully:", data);

    return data;

  } catch (error) {
    console.error("Failed to send OTP email:", error);
    throw error;
  }
};