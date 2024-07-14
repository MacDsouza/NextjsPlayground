//p-25 dosn't work because there is no class p-25 in tailwindcss

import React from "react";

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <p className="text-lg text-gray-600">Hi, I am</p>
        <h1 className="text-4xl font-bold text-white">Mac Reon Dsouza</h1>
      </div>
      <p className="text-gray-700 text-pretty text-center ">
        A second year student at SJEC pursuing an UG degree in CSE. I'm also a member of The Sceptix club. I have experience in making websites using React and Next.js. I have worked on the ex Sceptix website and Placement cell website.
      </p>
      <p className="text-gray-700 text-pretty text-center ">
        Since i had worked on projects like Placement cell website, I knew most of these stuff but the git commit message convention was a new to me.
      </p>
    </div>
  );
};

export default page;
