import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login");
  };

  return (
    <div style={{ color: "white", textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Your Dashboard!</h1>
      <p>Start exploring or create your next 3D creation.</p>
      
      <div style={{ marginTop: "30px", display: "flex", gap: "15px", justifyContent: "center" }}>
        <button onClick={() => navigate("/imaginate")} style={{ padding: "10px 20px", borderRadius: "8px", cursor: "pointer" }}>Start Imaginating</button>
        <button onClick={() => navigate("/explore")} style={{ padding: "10px 20px", borderRadius: "8px", cursor: "pointer" }}>Explore</button>
        <button onClick={handleLogout} style={{ padding: "10px 20px", borderRadius: "8px", cursor: "pointer" }}>Logout</button>
      </div>
    </div>
  );
}
