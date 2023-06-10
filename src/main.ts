import ThreeApp from "./three-app";

const threeAppContainer = document.getElementById('three-app');

if (threeAppContainer) {
  const threeApp = new ThreeApp(threeAppContainer);

  const threeAppResizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => threeApp.handleResize(entry.target));
  });
  
  threeAppResizeObserver.observe(threeAppContainer);

  threeApp.run();
}
