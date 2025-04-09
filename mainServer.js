import express from 'express';
import cors from 'cors';
import StoryData from '../Database/db.js';


const app = express();
app.use(cors()); 


// app.post('/api/stories', async (req, res) => {
//     console.log('Incoming story data:', req.body); 
  
//     try {
//       const { title, description, category, author } = req.body; 
//       const newStory = new StoryData({ title, description, category, author }); 
//       await newStory.save();
//       res.status(201).json(newStory);
//     } catch (error) {
//       console.error('Error creating story:', error);
//       console.error('Error creating story:', error.message, error.stack);

//       res.status(500).json({ message: 'Error creating story', error: error.message });


//     }
//   });
app.post('/api/stories', async (req, res) => {
  console.log('Incoming story data:', req.body);

  try {
    const { title, description, category, author } = req.body;

    const result = await StoryData.insertMany([
      { title, description, category, author }
    ]);

    // insertMany returns an array of inserted docs
    res.status(201).json(result[0]);
  } catch (error) {
    console.error('Error creating story:', error.message, error.stack);
    res.status(500).json({ message: 'Error creating story', error: error.message });
  }
});

  


app.get("/" , async (req,res) => {
try{
    const data = await StoryData.find();
    res.json(data);
    console.log(data);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

app.listen(3001, () => {
    console.log('Server is running on port 3000');
    });
