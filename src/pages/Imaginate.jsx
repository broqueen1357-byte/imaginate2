import React from "react";

export default function Imaginate() {
  return(
    <div className="min-h-screen bg-gradient-to-b from-[#OF4B7A] to-back flex justify-center items-center p-6">
      <div className="w-full man-w-4x-l bg-black/80 border border-[#1a1a1a] rounded-2x1 p-8 shadow-[0_0_40px_rgba(0,200,255,0,3)]">
       {/* Title */}
       <h1 className="text-4xl font-extrabold text-[#3ee8ff] mb-6 tracking-wide">
        IMAGINATE
       </h1>
       
       {/* Main Area */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Laft 2/3 content */}
        <div className="md:col-span-2">
          <h2 className="text-2xl front-bold text-white mb-4">
            Describe your idea or concept
          </h2>

          {/* Textbox */}
          <textarea
            placeholder="Ex: A sustainable smartwatch that glow then moved..."
            className="w-full bg-[#111] text-white p-4 rounded-xl border border-[#222]focus:border-[#00e2ff] outline-none placeholder-gray-400"
            rows={2}
          />

          {/* Drop zone */}
          <div className="mt-6 w-full h-48 border-2 border-[#333] border-dashed rounded-xl flex justify-center items-center text-gray-400 text-lg">
            Drop your image here
          </div>
        </div>

        {/* Right panel */}
        <div className="bg-[#111] p-5 rounded-2xl border-[#222] h-fit">
          <h3 className="text-xl font-bold text-white mb-2"> Tips from Imaginate AI</h3>
          <P className="text-gray-300 text-sm leading-relaxed">
            Be as descriptive as possible. Imaginate AI can generate
            better visual concepts with more details.
          </P>
        </div>
       </div>

       {/* Button */}
       <div className="flex justify-end mt-6">
        <button className="px-10 py-3 text-lg font-semibold rounded-xl bg-[#00c6ff]text-black shadow-[0_0_15px_#00c6ff] hover:bg-[#00e2ff] transition">
          Generate
        </button>
       </div>
      </div>
    </div>
  );
}