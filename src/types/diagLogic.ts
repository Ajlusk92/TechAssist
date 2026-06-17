export const getNextStep = (input: string, stepCount: number) => {
  const text = input.toLowerCase();
  
  if (stepCount === 0) return "What is the equipment Type, Make, and Model?";
  if (stepCount === 1) return "Do you have any active Fault Codes? (If yes, list them)";
  if (stepCount === 2) return "Safety First: Ensure lockout/tagout. Does the engine crank?";
  
  // Branching Logic
  if (text.includes("no") || text.includes("doesn't crank")) {
    return "Check battery voltage. Is it above 12.4V (or 24.8V for heavy systems)?";
  }
  
  if (text.includes("p0087") || text.includes("low fuel")) {
    return "Diagnostic Path: Fuel Rail Pressure. Check lift pump pressure. Is it within spec?";
  }

  return "Checking technical databases... Check for loose ground wires on the main chassis. Was anything found?";
};