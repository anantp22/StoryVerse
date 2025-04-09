import React from 'react';
import axios from 'axios';
const handleStorySubmission = async () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;
  const author = document.getElementById('author').value;
   
  const storyData = {
    title,
    description,
    category,
    author
 
  };

   console.log('Story Data:', storyData);
   try{
    const response = await axios.post('http://localhost:3001/api/stories', storyData);
      if (response.status === 201) {
      
      console.log('Story created successfully');
    }
  } catch (error) {

    console.error('Story creation error: ', error.message);
  }

  // try {
  //   const response = await axios.post('/api/stories', storyData);
  //   if (response.status === 201) {
      
  //     console.log('Story created successfully');
  //   }
  // } catch (error) {

  //   console.error('Story creation error: ', error.message);
  // }
};

function WriteStoriesPage() {
  return (
    <div className="bg-gradient-to-br from-[#EF060F] to-[#b60cf2] min-h-screen p-8 ">
      <div className="container mx-auto py-8 mt-40">
        <div className="bg-white p-8 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
         

          <div className="flex flex-col md:flex-row items-center md:space-x-8 ">
            {/* Image Upload Section (Left Side) */}
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <img className='ml-24' src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.wp.com%2Fwww.imageneseducativas.com%2Fwp-content%2Fuploads%2F2016%2F03%2Fboy-writing-on-floor.png%3Fresize%3D357%252C400&f=1&nofb=1&ipt=10fda110a6f2e5b2ae8f518f19ba58da48a37c57dd02780aac3b24c078c315c0&ipo=images" alt="" />
            </div>

            {/* Story Details (Right Side) */}
            <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-8 animate__animated animate__fadeIn animate__delay-1s">
            Write Your Story
          </h2>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  placeholder="Enter the story title"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  placeholder="Enter a brief description of the story"
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="author" className="block text-gray-700 font-semibold mb-2">
                  Author
                </label>
                <textarea
                  id="author"
                  name="author"
                  rows="1"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                  placeholder="Enter the name of Author"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-indigo-500"
                >
                  <option value="fantasy">Fantasy</option>
                  <option value="romance">Romance</option>
                  <option value="mystery">Mystery</option>
                  <option value="sci-fi">Science Fiction</option>
                  <option value="adventure">Adventure</option>
  <option value="thriller">Thriller</option>
  <option value="historical">Historical</option>
  <option value="comedy">Comedy</option>
  <option value="horror">Horror</option>
  <option value="drama">Drama</option>
  <option value="biography">Biography</option>   
                  {/* Add more categories */}
                </select>
              </div>

            

          {/* Submit Button */}
          <div className="text-center mt-8">
          <button
  type="button"
  className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-3 rounded-full font-semibold transition duration-300 ease-in-out animate__animated animate__bounce animate__delay-2s"
  onClick={handleStorySubmission}
>
  Publish Story
</button>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteStoriesPage;
