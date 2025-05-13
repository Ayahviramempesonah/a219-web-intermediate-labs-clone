export default class HomePage {
  async render() {
    return `
      <section class="container">
        <h1>Home Page</h1>
        <div >
        <h2>
       <i class="fas fa-home"> </i>   welcome</h2>
    
        </div>
      </section>
    `;
  }

  async afterRender() {
    // Do your job here
  }
}
