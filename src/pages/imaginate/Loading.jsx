import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { generateFakeOutput } from "../../utils/fakeOutputs";

export default function Loading() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userPrompt = location.state?.prompt || "";

    const timer = setTimeout(() => {
      const result = generateFakeOutput(userPrompt);
      navigate("/imaginate/3d-result", { state: result });
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at center, #050b18, #000)",
        color: "#bfeaff",
      }}
    >
      <div className="relative w-28 h-28 mb-10">
        <div
          className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"
          style={{
            borderColor: "#4ecbff",
            borderTopColor: "transparent",
            boxShadow: "0 0 20px #4ecbff",
          }}
        />
      </div>
      <h2
        style={{ fontSize: "32px", fontWeight: "bold", textShadow: "0 0 15px #4ecbff" }}
      >
        Generating your concept…
      </h2>
    </div>
  );
}
