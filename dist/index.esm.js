import { structs, layout } from 'modelui-core-runtime';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

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

var events = structs.InputBase.events;
var triggers = structs.InputBase.triggers;
var options = {
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
};
var config = {
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
}; // styles
// event handler
// https://react-swipeable-views.com/api/api/
// https://maxmarinich.github.io/react-alice-carousel/#basic

var CarouselComponent = /*#__PURE__*/function (_structs$ListBase$Lis) {
  _inherits(CarouselComponent, _structs$ListBase$Lis);

  var _super = _createSuper(CarouselComponent);

  function CarouselComponent(props) {
    var _this;

    _classCallCheck(this, CarouselComponent);

    _this = _super.call(this, props);

    _this.getIdByEvent = function (evt) {
      var event_data = null;

      try {
        event_data = _this.state.data[evt.item];
      } catch (e) {
        // TODO: handle error where we could not index item
        return;
      }

      return event_data;
    };

    _this.onInitialized = function (evt) {
      var event_data = _this.getIdByEvent(evt);

      _this.triggerEvent(_this.props.id, 'showing', {
        id: event_data.id
      }, evt); // let a = this.containerRef;
      // FIXME: dont use this kind of hack


      var self = _assertThisInitialized(_this);

      setTimeout(function () {
        self.forceUpdate(); // force rerender on imge first load to order them correctly
      }, 2000);
    };

    _this.onResizeEvent = function (evt) {// debugger;
    };

    _this.onSlideChange = function (evt) {
      var event_data = _this.getIdByEvent(evt);

      _this.triggerEvent(_this.props.id, 'selecting', {
        id: event_data.id
      }, evt);
    };

    _this.onSlideChanged = function (evt) {
      var event_data = _this.getIdByEvent(evt);

      _this.triggerEvent(_this.props.id, 'selected', {
        id: event_data.id
      }, evt);
    };

    _this.showSelected = function (id, idx) {
      if (_this.containerRef && _this.containerRef.current) {
        _this.containerRef.current.slideTo(idx); //this.containerRef.current.slideNext();

      }

      return false; // returns false to notify not to change state
    };

    _this.handleDragStart = function (e) {
      return e.preventDefault();
    };

    _this.renderCarouselItem = function (itm) {
      return /*#__PURE__*/React.createElement("img", {
        alt: itm.title,
        style: {
          height: 300
        },
        src: itm.media,
        onDragStart: _this.handleDragStart,
        role: "presentation",
        onLoad: function onLoad(evt) {
          // FIXME does not work properly because we do not know the size. Using timeout hack to fix it
          evt.target.style.width = evt.target.width;
        }
      });
    };

    _this.getCarouselItems = function () {
      var items = [];

      _this.state.data.forEach(function (itm) {
        items.push(_this.renderCarouselItem(itm));
      });

      return items;
    };

    _this.containerRef = /*#__PURE__*/React.createRef();
    _this.form_instance = null;
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

    return _this;
  }

  _createClass(CarouselComponent, [{
    key: "render",
    value: function render() {
      var items = this.getCarouselItems();
      this.viewStyle = this.props.config.options;
      var userCanSlide = this.viewStyle.slidable;

      if (this.viewStyle.enabled === false) {
        userCanSlide = false;
      }

      return /*#__PURE__*/React.createElement(AliceCarousel, {
        ref: this.containerRef,
        animationDuration: this.viewStyle.animationDuration,
        animationType: this.viewStyle.animationType,
        autoPlay: this.viewStyle.enabled === true ? this.viewStyle.autoPlay : false,
        autoPlayInterval: this.viewStyle.autoPlayInterval,
        autoPlayDirection: this.viewStyle.autoPlayDirection // ltr,rtl
        ,
        autoPlayStrategy: this.viewStyle.autoPlayStrategy // default, action, all, none
        ,
        autoPlayControls: this.viewStyle.enabled === true ? this.viewStyle.showPlayControls : false,
        disableButtonsControls: this.viewStyle.enabled === true ? !this.viewStyle.showButtonControls : true,
        disableDotsControls: this.viewStyle.enabled === true ? !this.viewStyle.showDottedControls : true,
        infinite: this.viewStyle.infinite,
        mouseTracking: userCanSlide,
        touchTracking: userCanSlide,
        autoWidth: !this.viewStyle.jumbotron,
        autoHeight: !this.viewStyle.jumbotron,
        items: items,
        disableLazyLoading: false,
        disableSlideInfo: true,
        touchMoveDefaultEvents: true,
        keyboardNavigation: true
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
        ,
        onInitialized: this.onInitialized,
        onResizeEvent: this.onResizeEvent,
        onSlideChange: this.onSlideChange,
        onSlideChanged: this.onSlideChanged
      });
    }
  }]);

  return CarouselComponent;
}(structs.ListBase.ListBase); //export default withStyles(style, { withTheme: true })(FormComponent);

function registerCarousel(component_manager) {
  // self register component to layout manager
  component_manager.registerComponent({
    component: CarouselComponent,
    type: config.type,
    events: events,
    triggers: triggers,
    config: config
  });
}

// Managers and factories
function registerComponents(component_manager) {
  if (!component_manager) {
    component_manager = layout.Manager.ComponentManager.getInstance();
  }
  /*
  if (component_manager.constructor.name !== 'ComponentManager') {
      throw `Constructor must be component manager. Got type ${component_manager.constructor.name}`;
  }
  */


  registerCarousel(component_manager);
}

export { registerComponents };
//# sourceMappingURL=index.esm.js.map
