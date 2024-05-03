const express = require("express");
const port = 5000;
const app = express();
const ideas = [
  {
    id: 1,
    text: "Gratitude Gazette, a newsletter dedicated to practicing gratitude and spreading positivity",
    tag: "Lifestyle",
    username: "AnanyaShukla",
    date: "2024-11-10",
  },
  {
    id: 2,
    text: "Kindness Chronicle, a newsletter highlighting acts of kindness from around the world",
    tag: "Community",
    username: "RahulMehta",
    date: "2024-12-03",
  },
  {
    id: 3,
    text: "Inspire Insight, a newsletter sharing motivational stories and quotes to inspire readers",
    tag: "Self-Help",
    username: "PriyaJoshi",
    date: "2025-01-07",
  },
  {
    id: 4,
    text: "Smile Spreaders, a newsletter featuring heartwarming stories guaranteed to make you smile",
    tag: "Happiness",
    username: "VikramRajput",
    date: "2025-02-12",
  },
  {
    id: 5,
    text: "Optimism Observer, a newsletter focusing on positive developments and hopeful news",
    tag: "News",
    username: "AshaPatel",
    date: "2025-03-20",
  },
  {
    id: 6,
    text: "Joy Jotter, a newsletter filled with little reminders of joy and happiness",
    tag: "Wellness",
    username: "KiranSharma",
    date: "2025-04-25",
  },
  {
    id: 7,
    text: "Empathy Echo, a newsletter amplifying stories of empathy and understanding",
    tag: "Social",
    username: "NehaSingh",
    date: "2025-05-30",
  },
  {
    id: 8,
    text: "Positivity Pulse, a newsletter delivering a dose of positivity straight to your inbox",
    tag: "Health",
    username: "RajeshGupta",
    date: "2025-06-10",
  },
  {
    id: 9,
    text: "Love Lighthouse, a newsletter illuminating the power of love and compassion",
    tag: "Relationships",
    username: "AnjaliYadav",
    date: "2025-07-15",
  },
  {
    id: 10,
    text: "Hope Horizon, a newsletter exploring stories of hope and resilience in challenging times",
    tag: "Inspiration",
    username: "ManishSharma",
    date: "2025-08-20",
  },
];
//welcomepage
app.get("/", (req, res) => {
  //   res.send({ message: "Hello World!" });
  res.json({ message: "Welcome to RandomIdeas API" });
});
//get all ideas
app.get("/api/ideas", (req, res) => {
  res.json({ sucess: true, data: ideas });
});
//get single idea with id
app.get("/api/ideas/:id", (req, res) => {
  const id = req.params.id;
  const idea = ideas.find((idea) => idea.id === +id);
  if (!idea) {
    res
      .status(404)
      .json({ sucess: false, message: `No idea found with id ${id}` });
  }
  res.json({ sucess: true, data: idea });
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
