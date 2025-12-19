import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

export default function SavedImaginate() {
  const [saved, setSaved] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSaved();
  }, []);

  async function fetchSaved() {
    try {
      const { data, error } = await supabase
        .from("imagination_space")
        .select("*")
        .order("created_at", { ascending: false });

      console.log("SAVED DATA FULL:", data);

      if (error) {
        console.error(error);
        setSaved([]);
      } else {
        setSaved(data || []);
      }
    } catch (err) {
      console.error("Fetch failed:", err);
      setSaved([]);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 20 }}>
      {saved.length === 0 ? (
        <p>No saved Imaginations yet</p>
      ) : (
        saved.map((item) => (
          <img
            key={item.id}
            src={item.image_url}
            alt={item.prompt || "Imaginate"}
            width={200}
          />
        ))
      )}
    </div>
  );
}