export default class HomePresenter {
  #view;
  #model;

  constructor({ view, model }) {
    this.#view = view;
    this.#model = model;
  }

  // async showReportsListMap() {
  //   this.#view.showMapLoading();
  //   try {
  //     await this.#view.initialMap();
  //   } catch (error) {
  //     console.error('showReportsListMap: error:', error);
  //   } finally {
  //     this.#view.hideMapLoading();
  //   }
  // }


// async initialGaleryStory(){
//   this.#view.showLoading
//   try {
//     await this.fetchStorie()
//   } catch (error) {
    
//   }
// }


  async initialGalleryAndMap() {
    this.#view.showLoading();
    // try {
    //   // await this.showReportsListMap();

    //   const response = await this.#model.fetchStories();

    //   if (!response.ok) {
    //     console.error('initialGalleryAndMap: response:', response);
    //     // this.#view.populateReportsListError(response.message);
    //     return;
    //   }

    //   this.#view.populateReportsList(response.message, response.data);
    // } catch (error) {
    //   console.error('initialGalleryAndMap: error:', error);
    //   this.#view.populateReportsListError(error.message);
    // } finally {
    //   this.#view.hideLoading();
    // }
try {
  await this.#model.fetchStories

} catch (error) {
  console.error(error)
}finally{
  this.#view.hideLoading()
}
  }
}
