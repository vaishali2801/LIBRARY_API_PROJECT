import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import connectDB from "./config/db.js";

import HttpError from "./middleware/HttpError.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import borrowBook from "./routes/BorrowRoutes.js";

// import router from "./routes/bookRoutes.js";
import helmet from "helmet";
import hpp from "hpp";

const app = express();

//convert json data
app.use(express.json());

app.use(helmet());

app.use(hpp());
//routes
app.use("/user",userRoutes);
app.use("/admin",adminRoutes);
app.use("/book",bookRoutes);
app.use("/borrow",borrowBook);

//server
app.get("/", (req, res) => {
    res.json("hello form server...!");
});

//undefined route handling
app.use((req, res, next) => {
    next(new HttpError("requested route not found", 404));
})

//centralized error handling
app.use((error, req, res, next) => {
    if (res.headersSent) {
        return next(error);
    }
    res.status(error.statusCode || 500).json({ message: error.message || "internal server error" });

})

//port
const port = process.env.PORT || 5001;

//start server
async function startServer() {
    try {
        await connectDB();
        app.listen(port, () => {
            console.log(`server running on port ${port}`);
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
//call
startServer();