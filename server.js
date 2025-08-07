const express = require(`express`);
const app = express();
const PORT = 3000;

app.get(`/`, (req, res) => {
    res.send(`
        <html>
            <head>
                <title>My Express App</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                    }
                    .center-box {
                        width: 50%;
                        height: 300px;
                        margin: 100px auto;
                        background-color: #ddd9d9;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        padding: 20px;
                        box-sizing: border-box;
                    }
                    h1 {
                        color: red;
                        margin-bottom: 10px;
                    }
                </style>
            </head>
            <body>
                <div class="center-box">
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
    console.log(`Server is running on http://localhost:${PORT}`);
});
