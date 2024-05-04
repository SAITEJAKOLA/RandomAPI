const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');

//get all ideas
router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    res;
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: ` Opps!! Something went wrong.` });
  }
});

//get single idea with id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const idea = await Idea.findById(id);
  if (!idea) {
    res
      .status(404)
      .json({ success: false, message: `No idea found with id ${id}` });
  }
  res.json({ success: true, data: idea });
});

//post a new idea
router.post('/', async (req, res) => {
  const body = req.body;
  const idea = new Idea({
    text: body.text,
    tag: body.tag,
    username: body.username,
  });
  try {
    const postingIdea = await idea.save(idea);
    console.log(postingIdea);
    res.send({
      success: true,
      message: 'Idea posted succesfully!!',
      data: idea,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: `Posting failed due to error ${err}` });
  }
});

//update idea
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      id,
      {
        $set: {
          text: body.text,
          tag: body.tag,
        },
      },
      { new: true }
    );
    res.send({
      success: true,
      message: `Post updated sucessfully!!`,
      data: updatedIdea,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `Problem in updating the post ${error}`,
    });
  }
});

//delete idea
router.delete('/deleteidea/:id', async (req, res) => {
  const id = req.params.id;
  const idea = await Idea.findByIdAndDelete(id);

  res.send({
    sucess: true,
    message: 'Idea deleted successfully!!',
    data: {},
  });
});

module.exports = router;
