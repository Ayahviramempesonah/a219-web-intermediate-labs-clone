import CONFIG from '../../config';
// import { fetchStories } from '../../data/api';
import * as STORYAPI from '../../data/api';
import routes from '../../routes/routes';
import Map from '../../utils/map';
import HomePresenter from './home-presenter';
export default class HomePage {
  #presenter;
  #map;

  async render() {
    return `


<section>
        <div class="reports-list__map__container">
          <div id="map" class="reports-list__map"></div>
          <div id="map-loading-container"></div>
        </div>
      </section>
    <div id="loading-container"></div>
      <section class="container">
        <h1 class="section-title" >InstaLite Story</h1>
        <div id="story-list"></div>
        <div id="loading-container"></div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new HomePresenter({
      view: this,
      model: STORYAPI,
    });

    await  this.#presenter.initialGalleryAndMap()

    // try {
    //   // Panggil fungsi fetchStories dengan parameter opsional jika diperlukan
    //   const params = { page: 1, size: 10 }; // Contoh parameter
    //   const response = await fetchStories(params);

    //   // Pastikan respons mengandung data cerita
    //   if (!response || !Array.isArray(response.listStory)) {
    //     throw new Error('No stories found or invalid response.');
    //   }

    //   // Render cerita ke halaman
    //   this.renderStories(response.listStory);
    // } catch (error) {
    //   console.error('Error fetching stories:', error.message);

    //   // Tampilkan pesan error di halaman jika diperlukan
    //   document.getElementById('story-list').innerHTML =
    //     `<p style="color: red;">${error.message}</p>`;
    // }
  }

  // renderStories(stories) {
  //   const storyListElement = document.getElementById('story-list');

  //   if (!stories.length) {
  //     storyListElement.innerHTML = '<p>No stories available.</p>';
  //     return;
  //   }

  //   // Buat HTML untuk setiap cerita
  //   const storyItems = stories
  //     .map(
  //       (story) => `
  //     <div class="story-item">
  //       <img src="${story.photoUrl}" alt="${story.name}" width="100">
  //       <h3>${story.name}</h3>
  //       <p>${story.description}</p>
  //       <p><small>${new Date(story.createdAt).toLocaleString()}</small></p>
  //       <button class="detail-button" data-id="${story.id}">Detail</button>
  //     </div>
  //   `,
  //     )
  //     .join('');

  //   // Tambahkan cerita ke halaman
  //   storyListElement.innerHTML = storyItems;

  //   // Tambahkan event listener ke tombol "Detail"
  //   document.querySelectorAll('.detail-button').forEach((button) => {
  //     button.addEventListener('click', () => {
  //       const storyId = button.getAttribute('data-id'); // Ambil ID cerita dari atribut data-id
  //       window.location.href = `#/stories/${storyId}`; // Navigasi ke halaman detail
  //     });
  //   });
  // }

  storyList(reports){
const html= reports.reduce( (accumulator,report) => {

  if (this.#map) {
    const coordinate = [report.location.latitude, report.location.longitude];
    const markerOptions = { alt: report.title };
    const popupOptions = { content: report.title };
    this.#map.addMarker(coordinate, markerOptions, popupOptions);
  }

  return accumulator.concat(
          generateReportItemTemplate({
            ...report,
            reporterName: report.reporter.name,
          }),
        );

},'')
document.getElementById('reports-list').innerHTML = `
<div class="reports-list">${html}</div>
`;
  }

 async initialMap(){
  this.#map = await Map.build('map',{
    zoom:10,
    locate:true
  })
 }

 showLoading(){
  document.querySelector('loading-contaiiner'). innerHTML = 'Memuat Data...'

 }

hideLoading(){
document.querySelector('loading-container').innerHTML = ''
}
}
