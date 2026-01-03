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
  "/fake/futuristic/f13.png",
  "/fake/futuristic/f14.png",
  "/fake/futuristic/f15.png",
  "/fake/futuristic/f16.png",
  "/fake/futuristic/f17.png",
  "/fake/futuristic/f18.png",
  "/fake/futuristic/f19.png",
  "/fake/futuristic/f20.png",
  "/fake/futuristic/f21.png",
  "/fake/futuristic/f22.png",
  "/fake/futuristic/f23.png",
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
  "Electrical damage & Danger detection device",
  "Futuristic smart housework ",
  "Mind-to-design device",
  "Smart child safety monitoring device",
  "Consider site safety system ",
  "Futuristic smart holder think device",
  "Smart classroom with choice-based learning",
  "Mind-controlled AI device (object control)",
  "Futuristic mini device that change the stress to carry old product everywhere",
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
    video: null, // intentional
    features: selected,
    description:
      "A refined futuristic product concept combining intelligent automation, advanced engineering and user-centric design.",
  };
}
