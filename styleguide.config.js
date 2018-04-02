const path = require('path');

module.exports = {
  title: 'React Kawaii',
  styleguideComponents: {
    StyleGuideRenderer: path.join(__dirname, '_styleguide/renderer'),
    // TableOfContentsRenderer: path.join(__dirname, 'src/styleguide/sidebar'),
    // ReactComponentRenderer: path.join(__dirname, 'src/styleguide/component'),
    // PlaygroundRenderer: path.join(__dirname, 'src/styleguide/playground'),
    // TabButtonRenderer: path.join(__dirname, 'src/styleguide/tabs'),
    // SectionHeadingRenderer: path.join(
    //   __dirname,
    //   'src/styleguide/sectionHeading'
    // ),
    // SectionRenderer: path.join(__dirname, 'src/styleguide/section')
  },
  sections: [
    {
      name: 'React Kawaii',
      content: 'docs/Introduction.md',
      description: 'This is the first section description',
    },
    {
      name: 'How to get Started',
      content: 'docs/GetStarted.md',
      description: 'This is the first section description',
    },
    {
      name: 'Components',
      components: () => [
        './src/browser/Browser.jsx',
        './src/creditCard/CreditCard.jsx',
        './src/ghost/Ghost.jsx',
        './src/iceCream/IceCream.jsx',
        './src/mug/Mug.jsx',
        './src/planet/Planet.jsx',
        './src/speechBubble/SpeechBubble.jsx',
      ],
    },
  ],
}
