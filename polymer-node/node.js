import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './message.js';

class MyNode extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* shadow DOM styles go here */
        :host {
          display: inline-block;
          width: 300px;
          height: 250px;
          background-color: lightgray;
          border-radius: 10px;
          padding: 15px;
        }

        .wrapper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            aligh-items: center;
        }

        input {
            border-radius: 10px;
            height: 25px;
        }

        h4 {
            margin: 10px 0;
        }
      </style>
  
      <!-- shadow DOM goes here -->
        <div class="wrapper">
            <h4>My [[titleName]] field</h4>
            <input type="text" placeholder=" [[titleName]] field" value={{fieldText::input}}><br/>
            <span> {{message}} </span>
            <my-message g-message="{{message}}"></my-message>
            <h4>My [[titleName]] field 2</h4>
            <input type="text" placeholder=" [[titleName]] field2">
            <button on-click="handleClick">Kick Me</button>
        </div>
    `;
  }

  static get properties() {
    return {
      titleName: {
        type: String
      },
      message: {
        type: String,
        value: "Message"
      },
      fieldText: {
        type: String,
        // value: "Text Field",
        notify: true,
        reflectToAttribute: true,
        observer: '_fieldTextChanged'
      },
    };
  }

  constructor() {
    super();
    // this.addEventListener('click', this.toggle.bind(this));
  }


  _fieldTextChanged(value) {
    console.log(value);
    this.message = value;
  }

  handleClick() {
    console.log('Ow!');
  }

//   toggle() {
//     this.pressed = !this.pressed;
//   }


}

customElements.define('my-node', MyNode);