const express = require(`express`);
const app = express();
const PORT = 3000;

app.get(`/`, (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Maintenance Mode</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        height: 100vh;
                        background: linear-gradient(to bottom right, #2c3e50, #3498db);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        color: white;
                    }

                    .box {
                        background-color: rgba(0, 0, 0, 0.6);
                        padding: 60px 80px;
                        border-radius: 20px;
                        box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
                        text-align: center;
                        max-width: 800px;
                    }

                    h1 {
                        font-size: 48px;
                        margin-bottom: 20px;
                        color: #ff4d4d;
                    }

                    p {
                        font-size: 20px;
                        line-height: 1.6;
                    }
                </style>
            </head>
            <body>
                <div class="box">
                    <h1>🚧 Maintenance In Progress 🚧</h1>
                    <p>We're working hard to improve your experience.</p>
                    <p>The system is currently undergoing scheduled maintenance.</p>
                    <p>We appreciate your patience and understanding.</p>
                    <p>Please come back soon!</p>
                </div>
            </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
