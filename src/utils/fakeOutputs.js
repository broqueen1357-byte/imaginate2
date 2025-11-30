// src/utils/fakeOutputs.js

export const futuristicImages = [
  "/fake/futuristic/f1.png",
  "/fake/futuristic/f2.png",
  "/fake/futuristic/f3.png",
  "/fake/futuristic/f4.png",
  "/fake/futuristic/f5.png",
  "/fake/futuristic/f6.png",
  "/fake/futuristic/f7.png",
  "/fake/futuristic/f8.png",
  "/fake/futuristic/f9.png",
  "/fake/futuristic/f10.png",
  "/fake/futuristic/f11.png",
  "/fake/futuristic/f12.png",
];

// Random features for fake AI output
const features = [
  "AI-assisted performance",
  "Eco-smart material body",
  "360° adaptive sensors",
  "Self-charging micro-cell battery",
  "Water & dust resistance",
  "Magnetic modular parts",
  "Gesture-controlled interface",
  "Ultra-light carbon frame",
  "Smart touch panel",
  "Wireless power loop",
];

export function generateFakeOutput(prompt = "") {
  const img =
    futuristicImages[Math.floor(Math.random() * futuristicImages.length)];

  const shuffled = [...features].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 4);

  return {
    title: "Futuristic Concept Generated",
    promptUsed: prompt || "User concept idea",
    image: img,
    features: selected,
    description:
      "A refined futuristic product concept combining intelligent automation, advanced engineering and user-centric design.",
  };
}
