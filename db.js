import mongoose from 'mongoose';
const Data = [
    {
      "title": "How AI is Revolutionizing the Healthcare Industry",
      "description": "Artificial Intelligence is no longer just a buzzword — it's actively transforming how healthcare operates. From early diagnosis tools to robotic surgeries, AI is streamlining patient care and improving outcomes worldwide.",
      "category": "Health",
      "author": "Samantha Lee"
    },
    {
      "title": "10 Easy Habits to Improve Your Financial Health",
      "description": "Managing your money doesn't need to be complicated. These ten daily habits can help you build financial security, save more, and reduce stress over time.",
      "category": "Finance",
      "author": "Marcus Bennett"
    },
    {
      "title": "Top 5 Must-Visit Destinations for Solo Travelers",
      "description": "Traveling alone can be a liberating experience. Discover five destinations that are safe, exciting, and perfect for solo adventures.",
      "category": "Travel",
      "author": "Isabella Moore"
    },
    {
      "title": "The Rise of Remote Work: How It's Changing Business",
      "description": "With remote work becoming the new norm, businesses are shifting how they hire, collaborate, and grow. Learn how this trend is reshaping the future of work.",
      "category": "Technology",
      "author": "Daniel Foster"
    },
    {
      "title": "A Beginner's Guide to Mindful Eating",
      "description": "Mindful eating isn't just about what you eat — it's about how you eat. Learn simple techniques to build a healthier relationship with food.",
      "category": "Health",
      "author": "Chloe Ramirez"
    },
    {
      "title": "Budget-Friendly Home Decor Ideas That Look Expensive",
      "description": "You don't need to break the bank to make your home feel cozy and stylish. Here are 10 smart decor hacks that deliver big style for little cost.",
      "category": "Lifestyle",
      "author": "Natalie Perez"
    },
    {
      "title": "Exploring the Future of Electric Vehicles",
      "description": "Electric vehicles are more than a trend — they're the future of transportation. This article explores innovations, sustainability, and what's next in the EV world.",
      "category": "Technology",
      "author": "Ethan Clarke"
    },
    {
      "title": "How to Plan the Perfect Weekend Getaway",
      "description": "Stuck in a routine? A weekend escape might be just what you need. Learn how to plan a short trip that’s affordable, relaxing, and full of memories.",
      "category": "Travel",
      "author": "Grace Thomas"
    },
    {
      "title": "Breaking Down the Basics of Personal Investing",
      "description": "Getting started with investing can feel overwhelming. This guide simplifies stocks, bonds, and mutual funds to help you begin building wealth today.",
      "category": "Finance",
      "author": "David Kim"
    },
    {
      "title": "Simple Daily Routines for a Healthier Mind",
      "description": "Mental wellness starts with consistency. Here are simple habits — like journaling, walking, and disconnecting — that improve clarity and reduce stress.",
      "category": "Health",
      "author": "Lauren Scott"
    },
    {
      "title": "Meal Prepping 101: Save Time and Eat Better",
      "description": "Meal prepping isn't just for fitness influencers. It's a smart way to eat healthier and save money. Here’s how to get started easily.",
      "category": "Food",
      "author": "Owen Wallace"
    },
    {
      "title": "Top 7 Tools Every Freelancer Should Use",
      "description": "Whether you're a writer, designer, or developer, having the right tools can boost productivity and simplify your workflow. Here are seven worth checking out.",
      "category": "Technology",
      "author": "Avery Brooks"
    },
    {
      "title": "Why Traveling in Your 20s Is Worth the Investment",
      "description": "While savings and careers are important, traveling young offers growth, perspective, and memories that last a lifetime. Here's why you should go now.",
      "category": "Travel",
      "author": "Liam Rogers"
    },
    {
      "title": "5 Delicious Plant-Based Recipes for Beginners",
      "description": "Looking to eat less meat? These simple plant-based meals are nutritious, satisfying, and perfect for anyone trying out a vegetarian or vegan lifestyle.",
      "category": "Food",
      "author": "Amelia Greene"
    },
    {
      "title": "Balancing Screen Time: Tips for Digital Wellness",
      "description": "In a world ruled by screens, it’s important to set boundaries. Learn effective strategies to reduce screen fatigue and stay mentally refreshed.",
      "category": "Lifestyle",
      "author": "Jordan Mitchell"
    }
  ];
  

mongoose.connect('mongodb://localhost:27017/Storybook')
    .then(() => console.log('Connected to MongoDB'))    
    .catch(err => console.error('Could not connect to MongoDB', err));

 

const storySchema = new mongoose.Schema({
    title : { type: String, required: true },
    author: { type: String, required: true }, 
    description: { type: String, required: true }, 
    category: { type: String, required: true } 
  });
  
const StoryData = mongoose.model("StorysData", storySchema);

const insertingData = async () => {
    try {
        await StoryData.insertMany(Data);
        console.log('Data inserted successfully');
    } catch (error) {
        console.error('Error while inserting data', error);
    }
}

insertingData();

export default StoryData;

