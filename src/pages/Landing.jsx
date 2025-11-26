import { useNavigate } from "react-router-dom";
import spaceBG from "../assets/space.png";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${spaceBG})`,
      }}
    >
      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">

        {/* Title */}
        <h1 className="text-7xl font-extrabold text-white tracking-wide drop-shadow-[0_0_20px_rgba(0,0,0,0.9)] mb-4">
          IMAGINATE
        </h1>

        {/* Subtitle */}
        <p className="text-2xl max-w-2xl text-white drop-shadow-[0_0_10px_black] mb-10">
          You’ve just stepped into a universe of creation where imagination becomes visual.
        </p>

        {/* MAIN BUTTON */}
        <button
          onClick={() => navigate("/imaginate")}
          className="px-10 py-4 bg-cyan-400 hover:bg-cyan-300 text-lg font-semibold rounded-xl shadow-xl transition"
        >
          Start Imaginating
        </button>

        {/* BOTTOM BUTTONS */}
        <div className="flex gap-10 absolute bottom-20 left-1/2 -translate-x-1/2">
          <button
            onClick={() => navigate("/about")}
            className="text-white text-xl drop-shadow-[0_0_10px_black] hover:opacity-80"
          >
            About
          </button>

          <button
            onClick={() => navigate("/explore")}
            className="text-white text-xl drop-shadow-[0_0_10px_black] hover:opacity-80"
          >
            Explore
          </button>

          <button
            onClick={() => navigate("/login")}
            className="text-white text-xl drop-shadow-[0_0_10px_black] hover:opacity-80"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
