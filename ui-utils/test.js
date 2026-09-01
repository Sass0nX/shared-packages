import { getGreeting } from "./index.js";

const result = getGreeting("Maor");

if (result !== "🚀 Hello Maor! Welcome to DevOps Lab v2.0!") {
    console.error("TEST FAILED");
    process.exit(1);
}

console.log("TEST PASSED");