export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center text-white 
      px-6 py-10 bg-[#bf6b99] 
      relative overflow-hidden">

      {/* Outer neon glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl blur-3xl opacity-40 bg-blue-600"></div>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-3xl w-full text-center">

        {/* ---------------------------- PAGE 1 ---------------------------- */}
        <h1 className="text-4xl font-bold mb-6">About Imaginate</h1>

        <p className="text-purple-300 text-lg leading-relaxed mb-8">
          Imaginate is a creative intelligence tool that transforms raw ideas into 
          clear visual concepts instantly. Instead of needing perfect prompts or 
          design skills, you simply describe your idea, and Imaginate turns it into 
          structured, visual thinking.
        </p>

        <h2 className="text-2xl font-semibold mb-6 text-white">
          Imaginate is different from other AI tools because it focuses on ideas,
          not just images:
        </h2>

        {/* PAGE 1 LIST */}
        <div className="space-y-10 text-left">

          <div>
            <p className="text-purple-300 text-lg font-semibold">
              1. Idea-First, Not Image-First –
            </p>
            <p className="text-purple-200 mt-1">
              Most tools want a perfect prompt. Imaginate understands messy thoughts 
              and shapes them into something clear and usable.
            </p>
            <div className="border-b border-purple-700 mt-4"></div>
          </div>

          <div>
            <p className="text-purple-300 text-lg font-semibold">
              2. Visual Thinking, Not Just Visual Output –
            </p>
            <p className="text-purple-200 mt-1">
              It doesn’t just give you a picture — it gives you direction, clarity, 
              interpretation, and understanding of your idea.
            </p>
            <div className="border-b border-purple-700 mt-4"></div>
          </div>

          <div>
            <p className="text-purple-300 text-lg font-semibold">
              3. Built for Innovators, Not Just Designers –
            </p>
            <p className="text-purple-200 mt-1">
              Students, creators, entrepreneurs, and builders can use Imaginate to 
              bring imagination into a real starting point.
            </p>
            <div className="border-b border-purple-700 mt-4"></div>
          </div>

        </div>

        <p className="text-center text-purple-400 mt-10">Page 1 / 2</p>


        {/* ---------------------------- PAGE 2 ---------------------------- */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-6">Why Imaginate Exists</h2>

          <p className="text-purple-300 text-lg leading-relaxed mb-8">
            People have ideas every day. But most ideas die because they are 
            unclear, unstructured, or hard to explain visually. Imaginate exists 
            to make imagination usable — instantly.
          </p>

          <div className="space-y-10 text-left">

            <div>
              <p className="text-purple-300 text-lg font-semibold">
                4. Turning Imagination Into Reality –
              </p>
              <p className="text-purple-200 mt-1">
                Imaginate converts your creative sparks into something real you 
                can build upon — a direction, a structure, a starting point.
              </p>
              <div className="border-b border-purple-700 mt-4"></div>
            </div>

            <div>
              <p className="text-purple-300 text-lg font-semibold">
                5. No More Creative Block –
              </p>
              <p className="text-purple-200 mt-1">
                Even if you don’t know where to start, Imaginate gives you a 
                foundation to grow your idea.
              </p>
              <div className="border-b border-purple-700 mt-4"></div>
            </div>

            <div>
              <p className="text-purple-300 text-lg font-semibold">
                6. Future of Thinking –
              </p>
              <p className="text-purple-200 mt-1">
                Imaginate is not just an AI tool — it's a companion for thinkers, 
                dreamers, and creators who want to bring imagination into motion.
              </p>
              <div className="border-b border-purple-700 mt-4"></div>
            </div>

          </div>

          <p className="text-center text-purple-400 mt-10">Page 2 / 2</p>
        </div>

      </div>
      {/* Back Button */}
      <div className="mt-16 flex justify-center">
        <a
          href="/"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold transition-all shadow-lg hover:shadow-purple-700/40">
            Back to Home
          </a>
      </div>
    </div>
  );
}
