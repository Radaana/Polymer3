import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
// import '@polymer/iron-icon/iron-icon.js';

class MyMessage extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* shadow DOM styles go here */
        :host {
            font-size: 16px;
        }
      </style>
  
      <!-- shadow DOM goes here -->
        <span>[[gMessage]]</span>
    `;
  }

  static get properties() {
    return {
      gMessage: {
        type: String
        // value: "Message"
      }
    }
  }

  constructor() {
    super();
    // this.addEventListener('click', this.toggle.bind(this));
  }

//   toggle() {
//     this.pressed = !this.pressed;
//   }


}

customElements.define('my-message', MyMessage);