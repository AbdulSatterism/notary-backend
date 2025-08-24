import { ICreateAccount, IResetPassword } from '../types/emailTamplate';

const createAccount = (values: ICreateAccount) => {
  const data = {
    to: values.email,
    subject: 'Verify your account',
    html: `<body style="font-family: Arial, sans-serif; background-color: #f5f7fa; margin: 0; padding: 20px; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); overflow: hidden;">
        <!-- Header Section -->
        <div style="background-color: #0F52BA; padding: 25px 30px; text-align: center;">
            <h1 style="color: #fff; font-size: 28px; margin: 0; letter-spacing: 1px;">NOTARY</h1>
            <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 8px 0 0;">Email Verification</p>
        </div>
        
        <!-- Content Section -->
        <div style="padding: 35px 40px;">
            <h2 style="color: #0F52BA; font-size: 24px; margin-top: 0; margin-bottom: 20px;">Verify Your Email Address</h2>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                Hi ${values.name}, welcome to NOTARY! To complete your verification process, please use the following one-time passcode:
            </p>
            
            <!-- OTP Code Box -->
            <div style="text-align: center; margin: 30px 0;">
                <div style="display: inline-block; background-color: #0F52BA; padding: 15px 30px; border-radius: 10px; color: #fff; font-size: 28px; font-weight: bold; letter-spacing: 4px; box-shadow: 0 4px 10px rgba(15, 82, 186, 0.2);">
                    ${values.otp}
                </div>
            </div>
            
            <p style="color: #777; font-size: 15px; line-height: 1.6; text-align: center; margin-bottom: 30px;">
                This verification code will expire in <strong style="color: #0F52BA;">20 minutes</strong>.
            </p>
            
            <!-- Additional Information -->
            <div style="background-color: #f9fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #0F52BA;">
                <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0;">
                    <strong>Note:</strong> If you didn't request this code, you can safely ignore this email. Someone else might have entered your email address by mistake.
                </p>
            </div>
        </div>
        
        <!-- Footer Section -->
        <div style="background-color: #f5f7fa; padding: 20px 40px; text-align: center; border-top: 1px solid #eaeef2;">
            <p style="color: #888; font-size: 13px; line-height: 1.5; margin: 0;">
                &copy; 2023 NOTARY Services. All rights reserved.<br>
                This is an automated message, please do not reply to this email.
            </p>
        </div>
    </div>
</body>`,
  };
  return data;
};

const resetPassword = (values: IResetPassword) => {
  const data = {
    to: values.email,
    subject: 'Reset your password',
    html: `<body style="font-family: Arial, sans-serif; background-color: #f5f7fa; margin: 0; padding: 20px; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.08); overflow: hidden;">
        <!-- Header Section -->
        <div style="background-color: #0F52BA; padding: 25px 30px; text-align: center;">
            <h1 style="color: #fff; font-size: 28px; margin: 0; letter-spacing: 1px;">NOTARY</h1>
            <p style="color: rgba(255,255,255,0.9); font-size: 16px; margin: 8px 0 0;">Reset Your Password</p>
        </div>
        
        <!-- Content Section -->
        <div style="padding: 35px 40px;">
            <h2 style="color: #0F52BA; font-size: 24px; margin-top: 0; margin-bottom: 20px;">Reset Your Password</h2>
            
            <p style="color: #555; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
                We received a request to reset your NOTARY account password. Use the verification code below to proceed:
            </p>
            
            <!-- OTP Code Box -->
            <div style="text-align: center; margin: 30px 0;">
                <div style="display: inline-block; background-color: #0F52BA; padding: 15px 30px; border-radius: 10px; color: #fff; font-size: 28px; font-weight: bold; letter-spacing: 4px; box-shadow: 0 4px 10px rgba(15, 82, 186, 0.2);">
                    ${values.otp}
                </div>
            </div>
            
            <p style="color: #777; font-size: 15px; line-height: 1.6; text-align: center; margin-bottom: 30px;">
                This verification code will expire in <strong style="color: #0F52BA;">20 minutes</strong>.
            </p>
            
            <!-- Instructions -->
            <div style="background-color: #f9fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h3 style="color: #0F52BA; font-size: 18px; margin-top: 0;">Next Steps:</h3>
                <ol style="color: #666; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
                    <li>Return to the NOTARY app or website</li>
                    <li>Enter the verification code above</li>
                    <li>Create your new password</li>
                </ol>
            </div>
            
            <!-- Security Notice -->
            <div style="background-color: #fff4e6; padding: 20px; border-radius: 8px; border-left: 4px solid #FB9400;">
                <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 0;">
                    <strong>Security Note:</strong> If you didn't request this password reset, please ignore this email. 
                    For your security, do not share this code with anyone.
                </p>
            </div>
        </div>
        
        <!-- Footer Section -->
        <div style="background-color: #f5f7fa; padding: 20px 40px; text-align: center; border-top: 1px solid #eaeef2;">
            <p style="color: #888; font-size: 13px; line-height: 1.5; margin: 0;">
                &copy; 2023 NOTARY Services. All rights reserved.<br>
                This is an automated message, please do not reply to this email.
            </p>
        </div>
    </div>
</body>`,
  };
  return data;
};

export const emailTemplate = {
  createAccount,
  resetPassword,
};
