import { render } from 'preact';
import { App } from './app.tsx';
import './index.css';

render(<App />, document.getElementById('app') as HTMLElement);

// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
