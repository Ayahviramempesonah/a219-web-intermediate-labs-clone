import { getActiveRoute } from './routes/url-parser.js';
import routes from './routes/routes.js';

export default class App {
  #content;

  constructor({ content }) {
    this.#content = content;
  }

  async renderPage() {
    const routeName = getActiveRoute();
    const route = routes[routeName];

    // Get page instance
    const page = route();

    // Alternatif update DOM bagi browser yang tidak mendukung transition
    if (!document.startViewTransition) {
      this.#content.innerHTML = await page.render();
      await page.afterRender();

      return;
    }

    // Update DOM dengan transition
    const transition = document.startViewTransition(async () => {
      this.#content.innerHTML = await page.render();
      page.afterRender();
    });

    transition.updateCallbackDone.then(() => {
      console.log('callback function telah dieksekusi.');
    });
    transition.ready.then(() => {
      console.log('View transition siap dijalankan.');
    });
    transition.finished.then(() => {
      console.log('View transition telah selesai.');
    });
  }
}
