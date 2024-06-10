require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const userRouter = require('./api/users/user.router');

app.use(cors({
    origin: 'http://localhost:3001' // Allow requests from this origin
}));
app.use(express.json());

app.use("/api/users", userRouter);

app.use((req, res, next) => {
    res.status(404).json({
        success: 0,
        message: "Not Found"
    });
});

app.listen(process.env.APP_PORT, () => {
    console.log("Server Up and Running on PORT:", process.env.APP_PORT);
});
