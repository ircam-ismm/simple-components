import { html, css } from 'lit';
import ScElement from './ScElement.js';
import { fontFamily, fontSize, theme } from './styles.js';

class ScButton extends ScElement {
  static get properties() {
    return {
      width: {
        type: Number,
      },
      height: {
        type: Number,
      },
      text: {
        type: String,
      },
      value: {
        type: String,
      },
      midiValue: {
        type: Number,
      },
      selected: {
        type: Boolean,
      },
    };
  }

  static get styles() {
    return css`
      :host {
        vertical-align: top;
        display: inline-block;
        box-sizing: border-box;
        overflow: hidden;
      }

      button {
        box-sizing: border-box;
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: #ffffff;
        background-color: ${theme['--color-primary-1']};
        border: 1px solid ${theme['--color-primary-2']};
        border-radius:  1px;
        font-size: 13px;
        padding: 0;
        cursor: pointer;
      }

      button:hover {
        background-color: ${theme['--color-primary-2']};
      }

      // does not work in Firefox because of e.preventDefault();
      button:active {
        background-color: ${theme['--color-primary-3']};
      }

      button.selected {
        background-color: ${theme['--color-secondary-3']};
        border: 1px solid ${theme['--color-secondary-3']};
      }
    `;
  }

  set midiValue(value) {
    let eventName;

    if (value === 0) {
      eventName = 'release';
    } else {
      eventName = 'press'
    }

    // we don't want to trigger a release if no pressed has been recorded
    if (eventName === 'release' && this._pressed === false) {
      return;
    }

    this._pressed = (eventName === 'press');

    const event = new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
      detail: { value: this.value },
    });

    this.dispatchEvent(event);

    if (eventName === 'press') {
      const inputEvent = new CustomEvent('input', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      });

      this.dispatchEvent(inputEvent);
    }
  }

  constructor() {
    super();

    this.width = 200;
    this.height = 30;
    this.text = '';
    this.value = null;
    this.selected = false;

    this._pressed = false;
    this.onEvent = this.onEvent.bind(this);
  }

  /**
   * @todo - add `down` and `up` events
   */
  render() {
    const text = this.text ? this.text : this.value;

    return html`
      <button
        style="
          width: ${this.width}px;
          height: ${this.height}px;
          line-height: ${this.height}px;
        "
        class="${this.selected ? 'selected' : ''}"
        @mousedown="${this.onEvent}"
        @mouseup="${this.onEvent}"

        @touchstart="${{
          handleEvent:this.onEvent,
          passive: false,
        }}"
        @touchend="${this.onEvent}"
        @contextmenu="${this._preventContextMenu}"
      >${text}</button>
    `;
  }

  onEvent(e) {
    e.preventDefault();
    let eventName;

    if (e.type === 'touchend' || e.type === 'mouseup') {
      eventName = 'release';
    } else {
      eventName = 'press'
    }

    // we don't want to trigger a release if no pressed has been recorded
    if (eventName === 'release' && this._pressed === false) {
      return;
    }

    this._pressed = (eventName === 'press');

    const event = new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
      detail: { value: this.value },
    });

    this.dispatchEvent(event);

    if (eventName === 'press') {
      const inputEvent = new CustomEvent('input', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      });

      this.dispatchEvent(inputEvent);
    }
  }
}

if (customElements.get('sc-button') === undefined) {
  customElements.define('sc-button', ScButton);
}

export default ScButton;
