document.getElementById("loadGreeting")?.addEventListener("click", () => {
  import("./greet").then((module) => {
    const greet = module.greet;
    console.log(greet("Jane Doe."));
  });
});

console.log("App is running.");

if (process.env.NODE_ENV === "development") {
  console.log("Development mode: Detailed logging enabled.");
}

if (process.env.NODE_ENV === "production") {
  console.log("Production mode: Optimized build.");
}

// Enable HMR
if (module.hot) {
  module.hot.accept();
}
