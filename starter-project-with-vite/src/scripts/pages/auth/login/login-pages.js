export default class LoginPage {
  #presenter = null;

  async render() {
    return `
      <section class="login-container">
        <article class="login-form-container">
          <h1 class="login__title">Masuk akun</h1>
          <form id="login-form" class="login-form">
            <div class="form-control">
              <label for="email-input" class="login-form__email-title">Email</label>
              <div class="login-form__title-container">
                <input id="email-input" type="email" name="email" placeholder="Contoh: nama@email.com">
              </div>
            </div>
            <div class="form-control">
              <label for="password-input" class="login-form__password-title">Password</label>
              <div class="login-form__title-container">
                <input id="password-input" type="password" name="password" placeholder="Masukkan password Anda">
              </div>
            </div>
            <div class="form-buttons login-form__form-buttons">
              <div id="submit-button-container">
                <button class="btn" type="submit">Masuk</button>
              </div>
              <p class="login-form__do-not-have-account">Belum punya akun? <a href="#/register">Daftar</a></p>
            </div>
          </form>
        </article>
      </section>
    `;
  }

  async afterRender() {
    // Inisialisasi presenter jika diperlukan
    this.#setupForm();
  }

  #setupForm() {
    document.getElementById('login-form').addEventListener('submit', async (event) => {
      event.preventDefault();

      const email = document.getElementById('email-input').value;
      const password = document.getElementById('password-input').value;

      // Panggil metode getLogin dengan data email dan password
      await this.getLogin({ email, password });
    });
  }

  async getLogin({ email, password }) {
    const BASE_URL = 'https://story-api.dicoding.dev/v1';
    const LOGIN_ENDPOINT = `${BASE_URL}/login`; // Gabungkan BASE_URL dengan endpoint

    try {
      // Tampilkan tombol loading
      this.showSubmitLoadingButton();

      // Kirim permintaan POST ke API
      const data = JSON.stringify({ email, password });

      const fetchResponse = await fetch(LOGIN_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
      });

      const json = await fetchResponse.json();

      if (!fetchResponse.ok) {
        // Tangani error dari API
        throw new Error(json.message || 'Gagal login');
      }

      // Login berhasil
      this.loginSuccessfully(json.message);
    } catch (error) {
      // Tangani error
      this.loginFailed(error.message || 'Terjadi kesalahan saat login.');
    } finally {
      // Sembunyikan tombol loading
      this.hideSubmitLoadingButton();
    }
  }

  loginSuccessfully(message) {
    console.log(message);

    // Redirect ke halaman lain setelah login berhasil
    location.hash = '/';
  }

  loginFailed(message) {
    alert(message);
  }

  showSubmitLoadingButton() {
    document.getElementById('submit-button-container').innerHTML = `
      <button class="btn" type="submit" disabled>
        <i class="fas fa-spinner loader-button"></i> Masuk
      </button>
    `;
  }

  hideSubmitLoadingButton() {
    document.getElementById('submit-button-container').innerHTML = `
      <button class="btn" type="submit">Masuk</button>
    `;
  }
}
