class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; The Crystal Bakery 🔷 - Duran Gines Cristopher Adam 🍞
      </p>`;
  }
}

customElements.define("mi-footer", MiFooter);
