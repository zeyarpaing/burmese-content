// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  width: 300,
  height: 600,
  title: 'Vite-Preact Plugin',
  themeColors: true,
});

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'fill-dummy-text') {
    console.log('filling dummy text');
    figma.currentPage.selection.forEach((node) => {
      var font = null;
      let wrapperNode: TextNode;

      if (node.type === 'TEXT') {
        wrapperNode = node;
        if (typeof wrapperNode.fontName != 'symbol') {
          font = wrapperNode.fontName;
          figma.loadFontAsync(font).then(() => {
            wrapperNode.characters = 'Hello World';
            figma.notify(`Filled 'Hello World'`);
          });
        }
      }
    });
  } else if (msg.type === 'create-rectangles') {
    const nodes: SceneNode[] = [];
    const count = msg.payload;
    for (let i = 0; i < count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 180;
      rect.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 0 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  } else {
    figma.closePlugin();
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
};
