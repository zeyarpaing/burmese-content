import { someHelperFunction } from './helper';
// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
  someHelperFunction();
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'fill-dummy-text') {
    console.log('filling dummy text');
    figma.currentPage.selection.forEach((node) => {
      var font = null;
      let wrapperNode: TextNode;

      // Check node types supported in Figma and FigJam files
      if (node.type === 'TEXT') {
        wrapperNode = node;
        // wrapperNode.characters = "Hello World";
        console.log('wrapperNode :::: ', wrapperNode?.characters);

        if (typeof wrapperNode.fontName != 'symbol') {
          font = wrapperNode.fontName;
          figma.loadFontAsync(font).then(() => {
            // if (wrapperNode.characters == original) {
            wrapperNode.characters = 'Hello World';
            // figma.ui.postMessage({
            //   type: "multipleReplaced",
            //   replacement: replacement,
            //   original: original,
            // });
            // figma.notify(`Replaced ${previewNodes.length} layers`);
            // }
            figma.closePlugin();
          });
        }
      }
      // else if (node.type === "SHAPE_WITH_TEXT") {
      //   wrapperNode = node.text;
      // }
      // wrapperNode?. = "Hello World";
    });
  } else if (msg.type === 'create-rectangles') {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 50;
      rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 1 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.closePlugin();
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
};
