class Header extends HTMLElement {
    connectedCallback() {
      this.render();
    }
   
    render() {
        this.innerHTML = 
        `
        <nav class="navbar bg-body-tertiary">
        <div class="container-fluid p-2">    
          <span class="navbar-brand mb-0 h1 text-white">Movie Indonesia</span>
        </div>
      </nav>
        `
    }
  }

  customElements.define('header-bar', Header);