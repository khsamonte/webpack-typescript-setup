const greet = (name: string) => {
  return `Hi, ${name}! Welcome to HMR!`;
};

console.log(greet("Webpack with Test TypeScript."));

// Enable HMR
if (module.hot) {
  module.hot.accept();
}
