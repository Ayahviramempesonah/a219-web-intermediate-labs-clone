import CONFIG from "../../config";
import *  as API from '../../data/api'
 

export default class HomePage {
  async render() {
    return `
      <section class="container">
        <h1>Home Page</h1>
      </section>
    `;
  }

  async afterRender() {
    // Do your job here
    console.log('data api',API.getData())

  }
}
