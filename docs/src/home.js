import { html } from 'lit';

export const template = html`
<div id="home">
  <h2>@ircam/sc-components</h2>

  <p>Web Component library for rapid prototyping audio and creative applications in the browser.</p>
  <br />
  <sc-bang></sc-bang>
  <sc-number></sc-number>
  <sc-slider></sc-slider>
  <sc-dial></sc-dial>
  <sc-toggle></sc-toggle>
  <sc-text>some text</sc-text>

  <h3>Install</h3>

  <pre><code>npm install --save @ircam/sc-components</code></pre>

  <h3>Usage</h3>

  <p>Import components one by one:</p>

  <pre><code class="language-javascript">\
  import '@ircam/sc-components/sc-toggle.js';
  import '@ircam/sc-components/sc-button.js';
  // ...
  </code></pre>


  <p>
    Or all components at once:<br >
    <i>(note that it's best to import only the files you need to keep your bundle size as small as possibles)</i>
  </p>

  <pre><code class="language-javascript">import '@ircam/sc-components';</code></pre>



  <h3>Theming - global css variables</h3>

  <div style="display: flex; flex-wrap: wrap;">
    <div style="width: 200px;">
      <div style="width: 100px; height: 100px; background-color: var(--sc-color-primary-0)"></div>
      <p style="margin-top: 8px;">--sc-color-primary-0</p>
    </div>
    <div style="width: 200px;">
      <div style="width: 100px; height: 100px; background-color: var(--sc-color-primary-1)"></div>
      <p style="margin-top: 8px;">--sc-color-primary-1</p>
    </div>
    <div style="width: 200px;">
      <div style="width: 100px; height: 100px; background-color: var(--sc-color-primary-2)"></div>
      <p style="margin-top: 8px;">--sc-color-primary-2</p>
    </div>
    <div style="width: 200px;">
      <div style="width: 100px; height: 100px; background-color: var(--sc-color-primary-3)"></div>
      <p style="margin-top: 8px;">--sc-color-primary-3</p>
    </div>
    <div style="width: 200px;">
      <div style="width: 100px; height: 100px; background-color: var(--sc-color-primary-4)"></div>
      <p style="margin-top: 8px;">--sc-color-primary-4</p>
    </div>
  </div>

  <div style="display: flex; flex-wrap: wrap; margin-top: 30px;">
    <div style="width: 200px;">
      <div style="width: 100px; height: 100px; background-color: var(--sc-color-secondary-1)"></div>
      <p style="margin-top: 8px;">--sc-color-secondary-1</p>
    </div>
    <div style="width: 200px;">
      <div style="width: 100px; height: 100px; background-color: var(--sc-color-secondary-2)"></div>
      <p style="margin-top: 8px;">--sc-color-secondary-2</p>
    </div>
    <div style="width: 200px;">
      <div style="width: 100px; height: 100px; background-color: var(--sc-color-secondary-3)"></div>
      <p style="margin-top: 8px;">--sc-color-secondary-3</p>
    </div>
    <div style="width: 200px;">
      <div style="width: 100px; height: 100px; background-color: var(--sc-color-secondary-4)"></div>
      <p style="margin-top: 8px;">--sc-color-secondary-4</p>
    </div>
    <div style="width: 200px;">
      <div style="width: 100px; height: 100px; background-color: var(--sc-color-secondary-5)"></div>
      <p style="margin-top: 8px;">--sc-color-secondary-5</p>
    </div>
  </div>
</div>
`;