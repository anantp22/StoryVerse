import React, { useState, useEffect } from 'react';

function ReadStoriesPage() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching stories data from the json API 
    fetch('http://localhost:3001/')
      .then((response) => response.json())
      .then((data) => {
        setStories(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching stories:', error);
        setLoading(false);
      });
  }, []);

  // Group stories by category
  const categories = [
    { name: 'Adventure', color: 'indigo' },
    { name: 'Romance', color: 'pink' },
  
    // you can add more categories
  ]

  return (
    <div className="bg-gradient-to-r from-[#EF060F] to-[#b60cf2] min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">Browse Stories</h1>

        {categories.map((category) => (
          <div key={category.name}>
            <h2 className={`text-2xl font-semibold mb-4 text-${category.color}-700`}>
              {category.name} Stories
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {stories.map((story) => (
                <div
                  key={story.id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
                >
                  <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 text-indigo-700">{story.title}</h2>
                    <p className="text-gray-600 text-sm mb-2">Author: {story.author}</p>
                    <p className="text-gray-600 text-sm mb-2">Genre: {story.genre}</p>
                    <p className="mt-4 text-gray-700">{story.description}</p>
                    <a
                      href={`/stories/${story.id}`} // actual story URL is yet to be replaced
                      className="block text-indigo-700 hover:text-indigo-800 hover:underline mt-4 transition duration-300"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {loading && (
          <p className="text-gray-300 text-lg text-center mt-8">Loading stories...</p>
        )}
      </div>
    </div>
  );
}

export default ReadStoriesPage;
