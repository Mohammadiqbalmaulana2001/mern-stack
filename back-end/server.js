require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
// express app 
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path , req.method);
    next();
})

// routes
app.use("/api/workouts", workoutRoutes);

// connect to database
mongoose.connect(process.env.MONGO_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`connected to db and Listening on port ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log(err.message);
    process.exit();
})

