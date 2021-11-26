class NavElem extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.render();

    // toggle light/dark theme
    function toggleDarkMode(el){
      var theme='light'
      if (el.innerText == '☪'){
        el.innerText = '☀'; theme='dark';
      } else {
        el.innerText = '☪';
      }
      document.documentElement.setAttribute('data-theme', theme)
    }

    var themeToggleID = `${this.themeelement}-theme`;
    document.addEventListener("DOMContentLoaded", function(event){
      const toggleTheme = document.getElementById(themeToggleID);
      toggleTheme.addEventListener('click', () => {
        toggleDarkMode(toggleTheme);
      });
    });

    // fond size up/down
    // not working
    function addFontSize(addPx){
      html = document.querySelector('html');
      currentSize = parseFloat(window.getComputedStyle(html, null).getPropertyValue('font-size'));
      html.style.fontSize = (currentSize + addPx) + 'px';
    }

    var fontUpID = `${this.themeelement}-fontup`;
    document.addEventListener("DOMContentLoaded", function(event){
      const fontUp = document.getElementById(fontUpID);
      fontUp.addEventListener('click', () => {
        addFontSize(1);
      });
    });

    var fontDownID = `${this.themeelement}-fontdown`;
    document.addEventListener("DOMContentLoaded", function(event){
      const fontDown = document.getElementById(fontDownID);
      fontDown.addEventListener('click', () => {
        addFontSize(-1);
      });
    });
	}

	adoptCallback() {
	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		this.render();
	}

	static get observedAttributes() {
		return ['themeelement'];
	}

	get themeelement() {
		return this.getAttribute('themeelement');
	}

	disconnectedCallback() {
	}

	render() {
		this.innerHTML = `
<nav>
  <ul>
    <li>Brand</li>
    <li><a href="#">Item </a></li>
    <li><a href="#">Menu ▾</a>
      <ul>
        <li><a href="#">Menu 1</a></li>
        <li><a href="#">Menu 2</a></li>
      </ul>
    </li>
    <li class="float-right sticky"><a id="${this.themeelement}-fontdown"">ᴀ-</a>|<a id="${this.themeelement}-fontup">A+</a></li>
    <li class="float-right"><a id="${this.themeelement}-theme">☪</a></li>
  </ul>
</nav>
    `;
	}
}

window.customElements.define('nav-elem', NavElem);

