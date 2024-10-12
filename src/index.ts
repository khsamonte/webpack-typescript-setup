document.getElementById("loadGreeting")?.addEventListener("click", () => {
  import("./greet").then((module) => {
    const greet = module.greet;
    console.log(greet("Jane Doe."));
  });
});

console.log("App is running.");

// Enable HMR
if (module.hot) {
  module.hot.accept();
}
