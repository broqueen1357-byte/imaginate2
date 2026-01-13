// src/data/interpretationModes.js

export const interpretationModes = {  
  interactive_object: {  
    title: "Interactive Object",  
    loadingLine: "Shaping your idea as an object that reacts to people…",  
    resultLabel: "Interpreted as an interactive object",  
  },  
  connected_system: {  
    title: "Connected System",  
    loadingLine: "Mapping how different elements of your idea connect…",
    resultLabel: "Interpreted as a connected system",  
  },  
  emotional_symbolic: {  
    title: "Emotional / Symbolic",  
    loadingLine: "Exploring the emotional meaning behind your idea…",  
    resultLabel: "Interpreted symbolically",  
  },  
  visual_atmosphere: {  
    title: "Visual Atmosphere",  
    loadingLine: "Crafting the visual mood and feeling of your idea…",  
    resultLabel: "Interpreted as a visual atmosphere",  
  },  
};

// Array version for fallback screen
export const interpretationModesList = [
  { id: "interactive_object", title: "Interactive Object", description: "Focus on your idea as a physical object that reacts to people.", guide: "If your idea feels like something people could touch or use." },
  { id: "connected_system", title: "Connected System", description: "Focus on how different elements of your idea interact and connect.", guide: "If your idea depends on flow, data, or corrdination." },
  { id: "emotional_symbolic", title: "Emotional / Symbolic", description: "Focus on the emotional or symbolic meaning behind your idea.", guide: "If your idea is more about feeling, meaning, or impact." },
  { id: "visual_atmosphere", title: "Visual Atmosphere", description: "Focus on the mood, visual tone, and atmosphere of your idea.", guide: "If your idea feels like a world, scene, or vibe."},
];