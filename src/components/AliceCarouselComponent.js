import React from 'react';
// material-ui
import AliceCarousel from 'react-alice-carousel'; // https://github.com/maxmarinich/react-alice-carousel
import 'react-alice-carousel/lib/alice-carousel.css';

// input base
import { structs } from 'modelui-core-runtime';

/*
const caruselEvents = {
  showing: {
    alias: [],
    info: {
      name: 'Showing',
      description: 'Showing component is ready'
    },
    schema: {}
  },
  selecting: {
    alias: [],
    info: {
      name: 'Selecting',
      description: 'User is selecting data and we expect a change'
    },
    schema: {}
  }
}

const caruselTriggers = {
  item_next: { info: { name: 'Next', description: 'Selects next item' }, schema: {}, alias: [] },
  item_prev: { info: { name: 'Previous', description: 'Selects previous item' }, schema: {}, alias: [] },
}

export const events =  {
    ...baseEvents, ...caruselEvents
}

export const triggers = {
    ...baseTriggers, ...caruselTriggers
};
*/

export const events = structs.InputBase.events;
export const triggers = structs.InputBase.triggers;

export const options = {
  "id": "carousel",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "Sortable Tree options",
  "x-layout": "component",
  "type": "object",
  "version": 0.1,
  "properties": {
    "autoPlayStrategy": {
      "title": "Auto Play Strategy",
      "description": "Auto play strategy",
      "type": "string",
      "enum": ['default', 'action', 'all', 'none'],
      "default": "default"
    },
    "autoPlayInterval": {
      "title": "Auto Play Interval",
      "description": "Auto play interval",
      "type": "number",
      "default": 2000
    },
    "enabled": {
      "title": "enabled",
      "description": "enabled",
      "type": "boolean",
      "default": true
    },
    "jumbotron": {
      "title": "jumbotron",
      "description": "jumbotron",
      "type": "boolean",
      "default": false
    },
    "autoPlay": {
      "title": "autoPlay",
      "description": "autoPlay",
      "type": "boolean",
      "default": false
    },
    "infinite": {
      "title": "infinite",
      "description": "infinite",
      "type": "boolean",
      "default": true
    },
    "slidable": {
      "title": "slidable",
      "description": "slidable",
      "type": "boolean",
      "default": true
    },
    "showPlayControls": {
      "title": "showPlayControls",
      "description": "showPlayControls",
      "type": "boolean",
      "default": false
    },
    "showButtonControls": {
      "title": "showButtonControls",
      "description": "showButtonControls",
      "type": "boolean",
      "default": true
    },
    "showDottedControls": {
      "title": "showDottedControls",
      "description": "showDottedControls",
      "type": "boolean",
      "default": true
    },
    "animationDuration": {
      "title": "animationDuration",
      "description": "animationDuration",
      "type": "number",
      "default": 400
    },
    "animationType": {
      "title": "animationType",
      "description": "animationType",
      "type": "string",
      "enum": ['slide', 'fadeout'],
      "default": "slide"
    },
    "autoPlayDirection": {
      "title": "autoPlayDirection",
      "description": "autoPlayDirection",
      "type": "string",
      "enum": ['ltr', 'rtl'],
      "default": "ltr"
    }
  },
  "required": ["animationDuration", "showDottedControls", "showButtonControls", "showPlayControls", "slidable", "infinite", "autoPlay", "jumbotron", "enabled", "autoPlayInterval", "autoPlayStrategy"]
}


export const config = {
  name: "Alice Carousel",
  type: "carousel",
  author: "Kjartan Jónsson",
  description: "Alice Carousel component",
  version: 0.1,
  relation: {
    contains: [],
    within: "component" // parent
  },
  options: options,
  state: structs.ListBase.StateList
}

// styles
// event handler
// https://react-swipeable-views.com/api/api/
// https://maxmarinich.github.io/react-alice-carousel/#basic

class CarouselComponent extends structs.ListBase.ListBase {

  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.form_instance = null;
    /* TODO: We want to add handlers
    // register componenet overiding or adding new event handlers
    this.eventDD = this.registerComponent({
      item_next: {
        schema: {},
        handler: () => {
          if (this.containerRef && this.containerRef.current) {
            this.containerRef.current.slideNext();
          }
        }
      },
      item_prev: {
        schema: {},
        handler: () => {
          if (this.containerRef && this.containerRef.current) {
            this.containerRef.current.slidePrev();
          }
        }
      }

    }, caruselEvents, config);
    */
  }

  getIdByEvent = (evt) => {
    let event_data = null;
    try {
      event_data = this.state.data[evt.item];
    } catch (e) {
      // TODO: handle error where we could not index item
      return
    }
    return event_data;
  }

  onInitialized = (evt) => {
    let event_data = this.getIdByEvent(evt);
    this.triggerEvent(this.props.id, 'showing', { id: event_data.id }, evt);
    // let a = this.containerRef;
    // FIXME: dont use this kind of hack
    var self = this;
    setTimeout(function () {
      self.forceUpdate(); // force rerender on imge first load to order them correctly
    }, 2000);
  }

  onResizeEvent = (evt) => {
    // debugger;
  }

  onSlideChange = (evt) => {
    let event_data = this.getIdByEvent(evt);
    this.triggerEvent(this.props.id, 'selecting', { id: event_data.id }, evt);
  }

  onSlideChanged = (evt) => {
    let event_data = this.getIdByEvent(evt);
    this.triggerEvent(this.props.id, 'selected', { id: event_data.id }, evt);
  }

  showSelected = (id, idx) => {
    if (this.containerRef && this.containerRef.current) {
      this.containerRef.current.slideTo(idx);
      //this.containerRef.current.slideNext();
    }
    return false; // returns false to notify not to change state
  }

  handleDragStart = (e) => e.preventDefault();

  renderCarouselItem = (itm) => {
    return (
      <img
        alt={itm.title}
        style={{ height: 300 }}
        src={itm.media}
        onDragStart={this.handleDragStart}
        role="presentation"
        onLoad={(evt) => {
          // FIXME does not work properly because we do not know the size. Using timeout hack to fix it
          evt.target.style.width = evt.target.width;
        }} />
    );
  }

  getCarouselItems = () => {
    const items = [];
    this.state.data.forEach((itm) => {
      items.push(this.renderCarouselItem(itm))
    })
    return items;
  }

  render() {
    const items = this.getCarouselItems();

    this.viewStyle = this.props.config.options;
    let userCanSlide = this.viewStyle.slidable;
    if (this.viewStyle.enabled === false) { userCanSlide = false; }

    return (
      <AliceCarousel
        ref={this.containerRef}
        animationDuration={this.viewStyle.animationDuration}
        animationType={this.viewStyle.animationType}
        autoPlay={this.viewStyle.enabled === true ? this.viewStyle.autoPlay : false}
        autoPlayInterval={this.viewStyle.autoPlayInterval}
        autoPlayDirection={this.viewStyle.autoPlayDirection} // ltr,rtl
        autoPlayStrategy={this.viewStyle.autoPlayStrategy} // default, action, all, none
        autoPlayControls={this.viewStyle.enabled === true ? this.viewStyle.showPlayControls : false}
        disableButtonsControls={this.viewStyle.enabled === true ? !this.viewStyle.showButtonControls : true}
        disableDotsControls={this.viewStyle.enabled === true ? !this.viewStyle.showDottedControls : true}
        infinite={this.viewStyle.infinite}
        mouseTracking={userCanSlide}
        touchTracking={userCanSlide}
        autoWidth={!this.viewStyle.jumbotron}
        autoHeight={!this.viewStyle.jumbotron}

        items={items}

        disableLazyLoading={false}
        disableSlideInfo={true}
        touchMoveDefaultEvents={true}
        keyboardNavigation={true}

        /* TODO: optional
        animationEasingFunction={ease}
        controlsStrategy
        innerWidth
        keyboardNavigation
        paddingLeft
        paddingRight
        responsive
        swipeDelta
        swipeExtraPadding
        ssrSilentMode
        */

        onInitialized={this.onInitialized}
        onResizeEvent={this.onResizeEvent}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}

      />
    );
  }

}

//export default withStyles(style, { withTheme: true })(FormComponent);
export default CarouselComponent;