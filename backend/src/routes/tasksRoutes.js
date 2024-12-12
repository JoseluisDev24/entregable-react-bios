import express from "express";
import taskSchema from "../models/task.js";
const router = express.Router();

//create task
router.post("/tasks", async (req, res) => {
  const task = new taskSchema(req.body);
  await task
    .save()
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json({ message: err.message }));
});

//read tasks
router.get("/tasks", async (req, res) => {
  await taskSchema
    .find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json({ message: err.message }));
});

//read a specific task
router.get("/tasks/:id", async (req, res) => {
  try {
    const data = await taskSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

//delete task
router.delete("/tasks/:taskId", async (req, res) => {
  await taskSchema
    .findByIdAndDelete(req.params.taskId)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json({ message: err.message }));
});

//update task
router.patch("/tasks/:taskId", (req, res) => {
  const { taskId } = req.params;
  const updatedTask = req.body;
  const options = { new: true };

  taskSchema
    .findByIdAndUpdate(taskId, updatedTask, options)
    .then((task) => {
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.json(task);
    })
    .catch((err) => res.status(400).json({ message: err.message }));
});

export default router;
