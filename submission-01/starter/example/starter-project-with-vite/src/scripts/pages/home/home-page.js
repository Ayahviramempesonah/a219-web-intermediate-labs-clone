import CONFIG from '../../config';
import { fetchStories } from '../../data/api';
import routes from '../../routes/routes';
import Map from '../../utils/map';
export default class HomePage {
  async render() {
    return `

<section>
        <div class="reports-list__map__container">
          <div id="map" class="reports-list__map"></div>
          <div id="map-loading-container"></div>
        </div>
      </section>

      <section class="container">
        <h1>Home Page</h1>
        <div id="story-list"></div>
      </section>
    `;
  }

  async afterRender() {

    try {
      // Panggil fungsi fetchStories dengan parameter opsional jika diperlukan
      const params = { page: 1, size: 10 }; // Contoh parameter
      const response = await fetchStories(params);

      // Pastikan respons mengandung data cerita
      if (!response || !Array.isArray(response.listStory)) {
        throw new Error('No stories found or invalid response.');
      }

      // Render cerita ke halaman
      this.renderStories(response.listStory);
    } catch (error) {
      console.error('Error fetching stories:', error.message);

      // Tampilkan pesan error di halaman jika diperlukan
      document.getElementById('story-list').innerHTML =
        `<p style="color: red;">${error.message}</p>`;

      }

  }

  renderStories(stories) {
    const storyListElement = document.getElementById('story-list');

    if (!stories.length) {
      storyListElement.innerHTML = '<p>No stories available.</p>';
      return;
    }

    // Buat HTML untuk setiap cerita
    const storyItems = stories
      .map(
        (story) => `
      <div class="story-item">
        <img src="${story.photoUrl}" alt="${story.name}" width="100">
        <h3>${story.name}</h3>
        <p>${story.description}</p>
        <p><small>${new Date(story.createdAt).toLocaleString()}</small></p>
        <button class="detail-button" data-id="${story.id}">Detail</button>
      </div>
    `,
      )
      .join('');

    // Tambahkan cerita ke halaman
    storyListElement.innerHTML = storyItems;

    // Tambahkan event listener ke tombol "Detail"
    document.querySelectorAll('.detail-button').forEach((button) => {
      button.addEventListener('click', () => {
        const storyId = button.getAttribute('data-id'); // Ambil ID cerita dari atribut data-id
        window.location.href = `#/stories/${storyId}`; // Navigasi ke halaman detail
      });
    });
  }
}
