// import CatsLocal from '../../data/local.js'


export default class HomePresenter{
    #model;
    #view;

    constructor({model,view}){
        this.#model=model;
        this.#view=view;
        // await this.
    }
async showCats(){
    const cats =await this.#model.getAllCats()
    this.#view.showCats(cats)
}

}