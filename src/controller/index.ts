figma.showUI(__html__, {
  width: 340,
  height: 530,
  title: 'Burmese Content',
  themeColors: true,
});

export const $actions = {
  fillText: (payload: string[]) => {
    const length = payload.length;
    figma.currentPage.selection.forEach((node) => {
      var font = null;
      let wrapperNode: TextNode;

      if (node.type === 'TEXT') {
        wrapperNode = node;
        if (typeof wrapperNode.fontName != 'symbol') {
          font = wrapperNode.fontName;
          figma.loadFontAsync(font).then(() => {
            // @ts-expect-error textTruncation is not in the text node type
            wrapperNode.textTruncation = 'ENDING';
            wrapperNode.characters = payload[Math.floor(Math.random() * length)];
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
  type: keyof typeof $actions;
  payload: Parameters<(typeof $actions)[keyof typeof $actions]>;
}) => {
  // @ts-ignore
  $actions[msg.type](msg.payload);
};

export type Actions = typeof $actions;
