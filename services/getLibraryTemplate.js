export const getLibraryWelcomeTemplate = (userName) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Welcome to Library Management System</title>

    <style>
      *{
        margin:0;
        padding:0;
        box-sizing:border-box;
      }

      body{
        font-family: Arial, Helvetica, sans-serif;
        background:#f4f7fb;
        color:#333;
        line-height:1.6;
      }

      .container{
        max-width:600px;
        margin:30px auto;
        background:#fff;
        border-radius:10px;
        overflow:hidden;
        box-shadow:0 4px 12px rgba(0,0,0,0.1);
      }

      .header{
        background:linear-gradient(135deg,#1e3c72,#2a5298);
        color:white;
        padding:40px 20px;
        text-align:center;
      }

      .header h1{
        font-size:30px;
        margin-bottom:10px;
      }

      .header p{
        font-size:15px;
        opacity:0.9;
      }

      .content{
        padding:35px 30px;
      }

      .greeting{
        font-size:18px;
        margin-bottom:20px;
      }

      .greeting strong{
        color:#2a5298;
      }

      .text{
        font-size:15px;
        color:#555;
        margin-bottom:20px;
      }

      .features{
        background:#f8f9fc;
        padding:20px;
        border-radius:8px;
        margin:25px 0;
      }

      .features h3{
        color:#1e3c72;
        margin-bottom:15px;
      }

      .features ul{
        list-style:none;
      }

      .features li{
        padding:8px 0;
        font-size:14px;
        color:#444;
      }

      .features li::before{
        content:"📚";
        margin-right:10px;
      }

      .btn{
        display:inline-block;
        margin-top:20px;
        background:#2a5298;
        color:white;
        text-decoration:none;
        padding:14px 30px;
        border-radius:6px;
        font-weight:bold;
      }

      .footer{
        background:#f1f3f6;
        text-align:center;
        padding:20px;
        font-size:13px;
        color:#777;
      }

      .footer a{
        color:#2a5298;
        text-decoration:none;
      }

      @media(max-width:600px){
        .content{
          padding:25px 20px;
        }

        .header h1{
          font-size:24px;
        }

        .btn{
          display:block;
          text-align:center;
        }
      }
    </style>
  </head>

  <body>
    <div class="container">

      <!-- Header -->
      <div class="header">
        <h1>📖 Welcome to Digital Library</h1>
        <p>Your gateway to knowledge and learning</p>
      </div>

      <!-- Content -->
      <div class="content">

        <div class="greeting">
          Hello <strong>${userName}</strong>,
        </div>

        <div class="text">
          Welcome to our Library Management System! Your account has been successfully created. 
          Now you can explore books, borrow your favorite titles, and manage your reading journey easily.
        </div>

        <!-- Features -->
        <div class="features">
          <h3>What you can do:</h3>

          <ul>
            <li>Browse thousands of books online</li>
            <li>Borrow and return books easily</li>
            <li>Track due dates and borrowing history</li>
            <li>Get notifications for return reminders</li>
            <li>Explore categories and recommendations</li>
          </ul>
        </div>

        <div class="text">
          Start exploring our library and discover amazing books today.
        </div>

        <!-- Button -->
        <a href="https://library.com/dashboard" class="btn">
          Explore Library
        </a>

      </div>

      <!-- Footer -->
      <div class="footer">
        <p>© 2026 Digital Library Management System</p>
        <p>
          Need help? Contact us at 
          <a href="mailto:support@library.com">support@library.com</a>
        </p>
      </div>

    </div>
  </body>
  </html>
  `;
};

export default { getLibraryWelcomeTemplate };