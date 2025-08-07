const express = require(`express`);
const app = express();
const PORT = 3000;

app.get(`/`, (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Maintenance</title>
                <style>
                    body {
                        margin: 0;
                        height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: Arial, sans-serif;
                        background-color: #f0f0f0;
                    }
                    .container {
                        background-color: #333;
                        color: white;
                        padding: 40px;
                        border-radius: 12px;
                        text-align: center;
                        width: 400px;
                    }
                    h1 {
                        font-size: 36px;
                        margin-bottom: 20px;
                        color: #ff4444;
                    }
                    p {
                        font-size: 18px;
                        line-height: 1.4;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Server Under Maintenance</h1>
                    <p>We are currently performing scheduled maintenance.</p>
                    <p>We apologize for any inconvenience this may cause.</p>
                    <p>Please check back later.</p>
                    <p>Thank you for your patience!</p>
                </div>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
