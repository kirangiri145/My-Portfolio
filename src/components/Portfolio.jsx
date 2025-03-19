import React from "react";

function Portfolio() {
  const cardItem = [
    { id: 1, logo: "/Java.jpeg", name: "Java" },
    { id: 2, logo: "/mongoes.png", name: "MongoDB" },
    { id: 3, logo: "/Express.png", name: "Express.js" },
    { id: 4, logo: "/Python.webp", name: "Python" },
    { id: 5, logo: "/Reactjs.png", name: "React.js" },
    { id: 6, logo: "/nodejs.png", name: "Node.js" },
  ];

  return (
    <div  name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div className="text-left mb-8">
        <h1 className="text-4xl font-bold mb-2">Portfolio</h1>
        <span className="text-lg text-gray-600 underline font-semibold">Feature Projects</span>
      </div>

      {/* Grid Layout for Left Alignment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-start">
        {cardItem.map(({ id, logo, name }) => (
          <div key={id} className="border p-4 rounded-lg shadow-lg text-left bg-white md:w-[300px] cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between">
            {/* Image Container */}
            <div className="w-full h-40 flex justify-center items-center">
              <img
                src={logo}
                alt={name}
                className="max-h-full object-contain rounded-lg shadow-md"
              />
            </div>
            
            {/* Name and Description */}
            <div className="mt-3 flex-grow">
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-gray-600 text-sm">A powerful technology for web development.</p>
            </div>

            {/* Buttons (Always at the Bottom) */}
            <div className="flex justify-between mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full mr-2">
                Videos
              </button>
              <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full">
                Source Code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
