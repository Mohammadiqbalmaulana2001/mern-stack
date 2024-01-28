const express = require("express");
const router = express.Router();
const  {createWorkout , getAllWorkouts , getSingleWorkout , deleteWorkout, updateWorkout} = require("../controllers/workouts.controller")

router.get("/", getAllWorkouts)

router.get("/:id", getSingleWorkout)

router.post("/", createWorkout )

router.delete("/:id", deleteWorkout)

router.patch("/:id", updateWorkout)

module.exports = router