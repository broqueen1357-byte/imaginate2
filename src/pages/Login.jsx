export default function Login() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#020617] relative px-6">

      {/* Glow Title */}
      <h1 className="text-5xl font-extrabold text-cyan-300 drop-shadow-[0_0_25px_#22d3ee] mb-10">
        IMAGINATE
      </h1>

      {/* Login Card */}
      <div
        className="
          w-full max-w-md p-8 rounded-2xl border 
          border-cyan-500/40 
          bg-[#030b17]/60 
          backdrop-blur-xl
          shadow-[0_0_30px_#06b6d4]
        "
      >
        <h2 className="text-3xl font-semibold text-cyan-100 mb-6">Login</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="
            w-full mb-4 p-3 rounded-lg bg-[#0a1525] border border-cyan-500/30 
            text-cyan-100 placeholder-cyan-400
            focus:outline-none focus:ring-2 focus:ring-cyan-400
          "
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="
            w-full mb-4 p-3 rounded-lg bg-[#0a1525] border border-cyan-500/30 
            text-cyan-100 placeholder-cyan-400
            focus:outline-none focus:ring-2 focus:ring-cyan-400
          "
        />

        {/* Remember Me */}
        <label className="flex items-center gap-2 mb-6 text-cyan-200">
          <input type="checkbox" className="accent-cyan-400 scale-110" />
          Remember me
        </label>

        {/* Login Button */}
        <button
          className="
            w-full py-3 rounded-xl font-semibold text-lg
            bg-cyan-400 text-[#012a36]
            shadow-[0_0_25px_#06b6d4] 
            hover:shadow-[0_0_40px_#06b6d4] 
            transition-all duration-300
          "
        >
          Login
        </button>
      </div>
    </div>
  );
}
