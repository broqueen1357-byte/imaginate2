export default function NextStep() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-3xl p-6 rounded-xl border">
        <h1 className="text-3xl font-semibold mb-6">
          Next Step
        </h1>

        <p className="text-base mb-6">
          Continue refining your concept, modify the generated 3D model, or proceed with advanced tools.
          Choose what you want to do next.
        </p>

        <div className="grid gap-4">
          <button className="w-full py-3 rounded-lg border text-left px-4">
            Modify 3D Model
          </button>

          <button className="w-full py-3 rounded-lg border text-left px-4">
            Add More Details
          </button>

          <button className="w-full py-3 rounded-lg border text-left px-4">
            Regenerate Concept
          </button>

          <button className="w-full py-3 rounded-lg border text-left px-4">
            Go Back to Imaginate
          </button>
        </div>
      </div>
    </div>
  );
}

