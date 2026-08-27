import { getGreeting } from "./index.js";

const result = getGreeting("Maor");

if (result !== "Hello Maor, welcome to my DevOps lab!") {
    console.error("TEST FAILED");
    process.exit(1);
}

console.log("TEST PASSED");