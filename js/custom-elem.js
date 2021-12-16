class CustomElem extends HTMLElement {
  constructor() {
    super();
  }

  // callback when the custom element is created.
  connectedCallback() {
    this.render();
  }

  // callback when the custom element is moved.
  adoptCallback() {
  }

  // callback when the attribute is added, removed, updated, or replaced.
  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  // list of observed attributes
  static get observedAttributes() {
    return ['title'];
  }

  get title() {
    return this.getAttribute('title');
  }

  // calback when the custom element is removed.
  disconnectedCallback() {
    alert('bye bye');
  }

  // custom method
  render() {
    this.innerHTML = `
<div class="card">
  <h4>${this.title}</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, doloremque, ea, eius eum eveniet fugiat ipsa ipsam laboriosam libero magni molestiae nam natus necessitatibus neque nihil nulla numquam odio officia omnis optio pariatur quae quam quas quia quibusdam quod repellat repudiandae sapiente sed sequi sint sit soluta suscipit tempora totam unde velit vero voluptate voluptates!</p>
</card> `
  }
}

window.customElements.define('custom-elem', CustomElem);
