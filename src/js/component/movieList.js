class Movie extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
        this.innerHTML = 
        `
        <h2 class="text-center text-white mt-3 mb-4">Daftar Film yang sedang tayang saat ini!</h2>
        <div class="container">
          <div id="listmovie"></div>
        </div>
        `
    }
  }

  customElements.define('movie-list', Movie);