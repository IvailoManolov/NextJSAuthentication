import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        html: `
        <html lang="en">
        <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verve Wine - Forgot Password</title>
  <style>
    /* Basic styling */
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 20px;
    }

    .container {
      max-width: 500px;
      margin: 0 auto;
      text-align: center;
      color:black;
    }

    h1 {
      margin-bottom: 20px;
      color:inherit;
    }
    
    h2{
        color:inherit;
    }

    a {
      background-color: #90EE90;
      color: white !important;
      padding: 10px 20px;
      text-decoration: none; /* Remove underline */
      border: none;
      border-radius: 5px;
      display: inline-block; /* Allow setting width and height */
      cursor: pointer;
    }

    p {
      margin-top: 10px;
      color:inherit;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Clashy</h1>
    <h2>Email Verification</h2>
    <p>We are happy to have a new clasher in the family! Verify your email with the link below!</p>
    <a href=${confirmLink}>VERIFY EMAIL</a>
    <p>Clash on!</p>
  </div>
</body>
</html>
        
        `
    });
}

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetPasswordLink = `http://localhost:3000/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: `
        <html lang="en">
        <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verve Wine - Forgot Password</title>
  <style>
    /* Basic styling */
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 20px;
    }

    .container {
      max-width: 500px;
      margin: 0 auto;
      text-align: center;
      color:black;
    }

    h1 {
      margin-bottom: 20px;
      color:inherit;
    }
    
    h2{
        color:inherit;
    }

    a {
      background-color: #9d2e37;
      color: white !important;
      padding: 10px 20px;
      text-decoration: none; /* Remove underline */
      border: none;
      border-radius: 5px;
      display: inline-block; /* Allow setting width and height */
      cursor: pointer;
    }

    p {
      margin-top: 10px;
      color:inherit;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Clashy</h1>
    <h2>Forgot your password?</h2>
    <p>That's okay, it happens! Click on the link below to reset your password.</p>
    <a href=${resetPasswordLink}>RESET YOUR PASSWORD</a>
    <p>Clash on!</p>
  </div>
</body>
</html>
        `
    });
}

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "2FA Code",
        html: `
        <html lang="en">
        <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verve Wine - Forgot Password</title>
  <style>
    /* Basic styling */
    body {
      font-family: sans-serif;
      margin: 0;
      padding: 20px;
    }

    .container {
      max-width: 500px;
      margin: 0 auto;
      text-align: center;
      color:black;
    }

    h1 {
      margin-bottom: 20px;
      color:inherit;
    }
    
    h2{
        color:inherit;
    }

    h3 {
        background-color: black;
        color: white !important; /* Inherit color from parent (body) */
        padding: 10px 20px;
        text-decoration: none;
        border: none;
        border-radius: 5px;
        letter-spacing: 2px;
        display: inline-block;
        cursor: pointer;
      }

    p {
      margin-top: 10px;
      color:inherit;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Clashy</h1>
    <h2>We are keeping your account secure!</h2>
    <p>Here is your 2FA token</p>
    <h3>${token}</h3>
    <p>Clash on!</p>
  </div>
</body>
</html>
        `
    })
}
