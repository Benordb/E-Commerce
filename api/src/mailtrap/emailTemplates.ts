export const VERIFICATION_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            color: #007bff;
        }
        .content {
            margin-bottom: 20px;
        }
        .content p {
            margin: 0 0 10px;
        }
        .code {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            text-align: center;
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #777;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Email Verification</h1>
        </div>
        <div class="content">
            <p>Hello [User's Name],</p>
            <p>Thank you for signing up with [Your Company Name]! To complete your registration, please use the following verification code:</p>
            <div class="code">
                {verificationCode}
            </div>
            <p>If you did not create an account with us, please ignore this email.</p>
            <p>Best regards,</p>
            <p>The [Your Company Name] Team</p>
        </div>
        <div class="footer">
            <p>&copy; [Year] [Your Company Name]. All rights reserved.</p>
            <p><a href="[Your Website URL]">Visit our website</a></p>
        </div>
    </div>
</body>
</html>
`
export const WELCOME_EMAIL_TEMPLATE=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to [Your Company Name]</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            color: #007bff;
        }
        .content {
            margin-bottom: 20px;
        }
        .content p {
            margin: 0 0 10px;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #777;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to [Your Company Name]</h1>
        </div>
        <div class="content">
            <p>Hello [User's Name],</p>
            <p>We're thrilled to have you on board! Thank you for joining [Your Company Name]. We’re excited to have you with us and are here to support you every step of the way.</p>
            <p>To get started, you might want to check out the following:</p>
            <ul>
                <li><a href="[Getting Started URL]">Getting Started Guide</a></li>
                <li><a href="[Support URL]">Support Center</a></li>
                <li><a href="[FAQ URL]">FAQs</a></li>
            </ul>
            <p>If you have any questions or need assistance, feel free to reach out to our support team at [Support Email Address].</p>
            <p>Best regards,</p>
            <p>The [Your Company Name] Team</p>
        </div>
        <div class="footer">
            <p>&copy; [Year] [Your Company Name]. All rights reserved.</p>
            <p><a href="[Your Website URL]">Visit our website</a></p>
        </div>
    </div>
</body>
</html>
`
export const PASSWORD_RESET_SUCCESS_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Success</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            color: #007bff;
        }
        .content {
            margin-bottom: 20px;
        }
        .content p {
            margin: 0 0 10px;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #777;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset Successful</h1>
        </div>
        <div class="content">
            <p>Hello [User's Name],</p>
            <p>Your password has been successfully reset. You can now use your new password to log in to your account.</p>
            <p>If you did not make this change, please contact our support team immediately.</p>
            <p>Best regards,</p>
            <p>The [Your Company Name] Team</p>
        </div>
        <div class="footer">
            <p>&copy; [Year] [Your Company Name]. All rights reserved.</p>
            <p><a href="[Your Website URL]">Visit our website</a></p>
        </div>
    </div>
</body>
</html>
`
export const PASSWORD_RESET_REQUEST_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Request</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
        }
        .header h1 {
            margin: 0;
            color: #007bff;
        }
        .content {
            margin-bottom: 20px;
        }
        .content p {
            margin: 0 0 10px;
        }
        .button {
            display: inline-block;
            font-size: 16px;
            font-weight: bold;
            color: #ffffff;
            background-color: #007bff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
        }
        .footer {
            text-align: center;
            font-size: 14px;
            color: #777;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset Request</h1>
        </div>
        <div class="content">
            <p>Hello [User's Name],</p>
            <p>We received a request to reset your password. Click the button below to set a new password:</p>
            <a href="[Password Reset Link]" class="button">Reset Password</a>
            <p>If you did not request a password reset, please ignore this email.</p>
            <p>Best regards,</p>
            <p>The [Your Company Name] Team</p>
        </div>
        <div class="footer">
            <p>&copy; [Year] [Your Company Name]. All rights reserved.</p>
            <p><a href="[Your Website URL]">Visit our website</a></p>
        </div>
    </div>
</body>
</html>
`
