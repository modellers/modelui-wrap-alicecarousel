import CarouselComponent, { events, triggers, config } from './AliceCarouselComponent'


export function registerCarousel(component_manager) {
    // self register component to layout manager
    component_manager.registerComponent({
        component: CarouselComponent,
        type: config.type,
        events: events,
        triggers: triggers,
        config: config
    });
}