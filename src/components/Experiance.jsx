import React from "react";

function Experiance() {
  const cardItem = [
    { id: 1, logo: "/html.png", name: "HTML" },
    { id: 2, logo: "/css.png", name: "CSS" },
    { id: 3, logo: "/javascript.png", name: "JavaScript" },
    { id: 4, logo: "/oracle.png", name: "Oracle" },
    { id: 5, logo: "/spring.png", name: "Spring" },
    { id: 6, logo: "/springboot.png", name: "SpringBoot" },
  ];

  return (
    <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div className="text-left mb-8">
        <h1 className="text-4xl font-bold mb-2">Learning</h1>
        <p className="font-semibold">I Learning on the following Technologies:</p>
      </div>

      {/* Grid Layout: 2 per row on small, 3 per row on medium, auto on large */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-start">
        {cardItem.map(({ id, logo, name }) => (
          <div 
            key={id} 
            className="border p-6 rounded-lg shadow-lg text-center bg-white md:w-[300px] cursor-pointer hover:scale-110 duration-300 flex flex-col items-center"
          >
            {/* Bigger Image */}
            <img
              src={logo}
              alt={name}
              className="w-32 h-32 rounded-full object-contain border-2 border-gray-300 shadow-md"
            />
            
            {/* Name */}
            <div className="mt-3">
              <h2 className="text-xl font-bold">{name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
