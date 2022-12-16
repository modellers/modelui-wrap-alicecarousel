import React from 'react';
import { action } from '@storybook/addon-actions'
// test utils
import { util } from 'modelui-core-runtime'
import registerComponents from './Components';

// components
import CarouselComponent from './AliceCarouselComponent';
import { triggers, events, config } from './AliceCarouselComponent'
import { layout } from 'modelui-core-runtime';

const images = [
  { id: 'id1', media: "https://www.psdgraphics.com/file/red-number-1.jpg" },
  { id: 'id2', media: "https://www.psdgraphics.com/file/red-number-2.jpg" },
  { id: 'id3', media: "https://www.psdgraphics.com/file/red-number-3.jpg" },
  { id: 'id4', media: "https://www.psdgraphics.com/file/red-number-4.jpg" },
  { id: 'select_value', media: "https://www.psdgraphics.com/file/red-number-5.jpg" },
  { id: 'id6', media: "https://www.psdgraphics.com/file/red-number-6.jpg" },
  { id: 'delete_value', media: "https://www.psdgraphics.com/file/red-number-7.jpg" },
  { id: 'id8', media: "https://www.psdgraphics.com/file/red-number-8.jpg" },
  { id: 'id9', media: "https://www.psdgraphics.com/file/red-number-9.jpg" }
];

/// Event addon
export default {
  title: 'Carousel/Alice Carousel',
  component: CarouselComponent,
  argTypes: util.StoryUtil.createLayoutViewArgumentTypes(config)
};

export const Basic = (args) => {

  const props = {
    id: 'AliceCarousel_id',
    type: 'carousel',
    data: images,
    config: { options: args },
    schema: {}
  }

  return (
    <div>
      {util.StoryUtil.prepStoryComponent(
        layout.Manager.ComponentManager.getInstance(), action, registerComponents,
        props, triggers, events)}
      <CarouselComponent {...props} />
    </div>
  );
};
Basic.args = {
  enabled: config.options.properties.enabled.default,
  jumbotron: config.options.properties.jumbotron.default,
  animationDuration: config.options.properties.animationDuration.default,
  animationType: config.options.properties.animationType.default,
  autoPlay: config.options.properties.autoPlay.default,
  autoPlayInterval: config.options.properties.autoPlayInterval.default,
  autoPlayDirection: config.options.properties.autoPlayDirection.default,
  autoPlayStrategy: config.options.properties.autoPlayStrategy.default,
  infinite: config.options.properties.infinite.default,
  slidable: config.options.properties.slidable.default,
  showPlayControls: config.options.properties.showPlayControls.default,
  showButtonControls: config.options.properties.showButtonControls.default,
  showDottedControls: config.options.properties.showDottedControls.default
}
