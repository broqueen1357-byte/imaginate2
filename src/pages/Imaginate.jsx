import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Imaginate() {
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  // ✅ FIXED ROUTE
  const goToResult = () => {
    navigate("/3d-result");
  };

  return (
    <div className="min-h-screen w-full relative px-6 py-10">

      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-4 left-4 px-3 py-1 rounded-lg border"
      >
        ← Back
      </Link>

      {/* Page Title */}
      <h1 className="text-center text-4xl font-extrabold mb-10">
        IMAGINATE
      </h1>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto p-8 rounded-2xl border">

        <h2 className="text-2xl font-bold">
          Describe your idea or concept
        </h2>

        {/* Idea Input */}
        <input
          type="text"
          placeholder="Ex: A sustainable smartwatch that glows when moved…"
          className="w-full mt-4 p-3 rounded-lg border"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          {/* ⬜ BIGGER DROP AREA */}
          <div className="md:col-span-2">
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
              onClick={() => document.getElementById("fileInput").click()}
              className={`
                w-full 
                h-96 
                rounded-xl 
                border-2 border-dashed 
                flex items-center justify-center 
                cursor-pointer transition-all
                ${dragActive ? "opacity-60 scale-[1.02]" : ""}
              `}
            >
              {image ? (
                <img
                  src={image}
                  className="h-full w-auto object-contain rounded-lg"
                  alt="Upload preview"
                />
              ) : (
                <span className="text-lg">
                  Drop your image here or click to upload
                </span>
              )}
            </div>

            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>

          {/* Tips Box */}
          <div className="rounded-xl p-5 border">
            <h3 className="text-xl font-semibold">Tips from Imaginate AI</h3>
            <p className="mt-2">
              Be as descriptive as possible. More details = better visual concepts.
            </p>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={goToResult}
          className="w-full mt-8 py-3 rounded-xl text-xl font-semibold border"
        >
          Generate
        </button>

      </div>
    </div>
  );
}
