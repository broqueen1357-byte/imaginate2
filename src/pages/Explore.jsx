import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div className="min-h-screen w-full relative px-4 py-10 flex flex-col items-center overflow-x-hidden">

      {/* --- Outer Blue Neon Glow --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-blue-600 blur-3xl opacity-40"></div>
      </div>

      {/* --- Main Content --- */}
      <div className="relative w-full max-w-6xl text-center">

        {/* Heading */}
        <h1 className="text-white text-4xl font-bold">Explore Imaginate</h1>
        <p className="text-white/90 text-xl mt-2">
          See how your ideas turn into visual concepts.
        </p>

        {/* --- Cards Section --- */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-pink-700/20 border border-white/20 p-5 rounded-xl backdrop-blur-md">
            <img
              src="god.png"
              alt="Smartwatch"
              className="w-40 mx-auto mb-4"
            />

            <h2 className="text-black text-xl font-bold">
              Futuristic smartwatch
            </h2>

            <p className="text-pink-300 mt-2">
              Design a futuristic smartwatch for 2030 that feels minimal,
              intelligent, and sleek.
            </p>

            <h3 className="text-black mt-4 font-semibold">Imaginate Output</h3>
            <p className="text-pink-300 text-sm">
              A clean concept visualization showing a curved display,
              holographic interface, and ultra-minimal UI.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-pink-700/20 border border-white/20 p-5 rounded-xl backdrop-blur-md">
            <img
              src="god3.png"
              alt="Cap Umbrella"
              className="w-40 mx-auto mb-4"
            />

            <h2 className="text-black text-xl font-bold">
              Electronic Cap Umbrella
            </h2>

            <p className="text-pink-300 mt-2">
              A cap with a retractable, button-activated umbrella for kids in
              harsh sunlight.
            </p>

            <h3 className="text-black mt-4 font-semibold">Imaginate Output</h3>
            <p className="text-pink-300 text-sm">
              A modern illustration showing a cap that deploys a protective sun
              umbrella and retracts with one tap.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-pink-700/20 border border-white/20 p-5 rounded-xl backdrop-blur-md">
            <img
              src="god2.png"
              alt="Smart Classroom Table"
              className="w-40 mx-auto mb-4"
            />

            <h2 className="text-black text-xl font-bold">
              Smart Classroom Table
            </h2>

            <p className="text-pink-300 mt-2">
              A student-friendly smart table that folds digitally, stores notes,
              and adapts to posture.
            </p>

            <h3 className="text-black mt-4 font-semibold">Imaginate Output</h3>
            <p className="text-pink-300 text-sm">
              A sleek visualization of a fold-able smart desk with a touch
              interface and ergonomic design.
            </p>
          </div>

        </div>

        {/* --- Bottom Glowing Section --- */}
        <div className="mt-14 bg-pink-700/30 border border-white/20 rounded-2xl p-10 backdrop-blur-xl shadow-lg shadow-blue-500/40">
          <h2 className="text-white text-3xl font-bold">
            Your ideas can shape the future
          </h2>
          <p className="text-black mt-4 text-lg">
            With Imaginate, you can imagine, create, and explore concepts instantly.  
            You don’t need design skills—just your vision. We’ll keep expanding  
            Imaginate with powerful features to help your idea reach the world.
          </p>

          {/* Button */}
          <Link
            to="/"
            className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
          >
            Start With Your Idea
          </Link>
        </div>
      </div>
    </div>
  );
}
