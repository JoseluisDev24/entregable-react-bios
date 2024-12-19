import express from "express";
import TaskSchema from "../models/task.js";
const router = express.Router();

//create task
router.post("/tasks", async (req, res) => {
  const task = new TaskSchema(req.body);
  await task
    .save()
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json({ message: err.message }));
});

//read tasks
router.get("/tasks", async (req, res) => {
  await TaskSchema.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json({ message: err.message }));
});

//read a specific task
router.get("/tasks/:id", async (req, res) => {
  try {
    const data = await TaskSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//delete task
router.delete("/tasks/:taskId", async (req, res) => {
  await TaskSchema.findByIdAndDelete(req.params.taskId)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json({ message: err.message }));
});

//update task
router.patch("/tasks/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const updatedTask = req.body;
  const options = { new: true };

  await TaskSchema.findByIdAndUpdate(taskId, updatedTask, options)
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json(task);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});

export default router;
