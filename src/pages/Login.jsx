import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Stub login for ${email}`);
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white/5 p-6 rounded-md">
        <h2 className="text-xl font-bold mb-4">Log in (stub)</h2>
        <input className="w-full p-2 mb-3 rounded border" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
        <button className="w-full py-2 rounded bg-cyan-500 text-white">Log in</button>
      </form>
    </div>
  );
}
