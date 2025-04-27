import CatsLocal from "../../data/local/cats.js"
import HomePresenter from "./home-presenter.js"
// import * as TEMPLATE from '../../templates'
import { generateCatItemTemplate } from '../../templates.js';



export default class HomePage{
    #presenter;
    async render (){

        return `
        <h1 class='content-title' > Home Page </h1>
       <p>ini adalah konten utama</p>
       <div id="cats"></div>
       <p>mari kita cek <a href='#/about' ></a> halaman about </p>
        `
    }

    async afterRender(){
        //todo
        this.#presenter= new HomePresenter({
            model:CatsLocal,
            view:this,
        })
           await this.#presenter.showCats();
        
    }

showCats(cats){
const html = cats.reduce(
    (accumulator,currentValue) => accumulator.concat(TEMPLATE.generateCatItemTemplate(currentValue)),''
)
document.getElementById('cats').innerHTML =`<ul class="cats-list"></ul>`

}

}