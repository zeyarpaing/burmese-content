// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  width: 320,
  height: 530,
  title: 'Burmese Content',
  themeColors: true,
});

export const $action = {
  fillDummyText: () => {
    console.log('filling dummy text');
    figma.currentPage.selection.forEach((node) => {
      var font = null;
      let wrapperNode: TextNode;

      if (node.type === 'TEXT') {
        wrapperNode = node;
        if (typeof wrapperNode.fontName != 'symbol') {
          font = wrapperNode.fontName;
          figma.loadFontAsync(font).then(() => {
            const rand = Array(10)
              .fill(0)
              .map((_) => String.fromCharCode(97 + Math.floor(Math.random() * 26)));
            wrapperNode.characters = rand.join('');
          });
        }
      }
    });
  },
  createRectangles: (payload: number) => {
    const nodes: SceneNode[] = [];
    const count = payload;
    for (let i = 0; i < count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 180;
      rect.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 0 } }];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
    figma.notify(`Created`);
  },
} as const;

figma.ui.onmessage = (msg: {
  type: keyof typeof $action;
  payload: Parameters<(typeof $action)[keyof typeof $action]>;
}) => {
  // @ts-ignore
  $action[msg.type](msg.payload);
};

export type Actions = typeof $action;
