import { useNavigate } from "react-router-dom";
import previewImg from "../assets/universe.png"; 

export default function ThreeDResult() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>

      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>IMAGINATE</h1>

        <div style={{ display: "flex", gap: "10px" }}>
          <button>SAVE</button>
          <button>MODIFY</button>
          <button>RE-GENERATE</button>
        </div>
      </div>

      {/* MAIN AREA */}
      <div
        style={{
          display: "flex",
          marginTop: "20px",
          gap: "20px"
        }}
      >

        {/* LEFT: 3D IMAGE */}
        <div
          style={{
            width: "60%",
            height: "400px",
            border: "1px solid",
            backgroundColor: "#e3e3e3", 
            backgroundImage: `url(${previewImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
        </div>

        {/* RIGHT: CONTROLS */}
        <div style={{ width: "40%", display: "flex", flexDirection: "column", gap: "20px" }}>

          {/* BOX 1 */}
          <div style={{ border: "1px solid", padding: "15px" }}>
            <h2>3D CONTROLS</h2>

            <div
              style={{
                border: "1px solid",
                padding: "10px",
                marginTop: "10px",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <span>ROTATE</span>
              <span>ZOOM</span>
              <span>LIGHTING</span>
            </div>
          </div>

          {/* BOX 2 */}
          <div style={{ border: "1px solid", padding: "15px" }}>
            <h2>GUIDE THE 3D</h2>
            <p>Apply fabric texture on top</p>
          </div>

          {/* BOX 3 (NEXT) */}
          <div
            onClick={() => navigate("/imaginate/next-step")}
            style={{
              border: "1px solid",
              padding: "20px",
              textAlign: "right",
              cursor: "pointer"
            }}
          >
            ➜
          </div>

        </div>
      </div>
    </div>
  );
}
