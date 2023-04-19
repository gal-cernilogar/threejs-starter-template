import createApp from "./app";

const appContainer = document.getElementById('app');

if (appContainer) {
  const app = createApp(appContainer);

  const appResizeObserver = new ResizeObserver(entries => {
    entries.forEach(entry => app.handleAppResize(entry.target));
  });
  
  appResizeObserver.observe(appContainer);

  app.run();
}