export default class HomePage {
  async render() {
    return `
      <section class="container">
        <h1>Home Page</h1>
        <div>selow
        <i class="fas fa-home"></i> 
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Do your job here
  }
}
