
// Managers and factories
import { layout } from 'modelui-core-runtime';

// Components
import { registerCarousel } from './Carousel';

export default function registerComponents(component_manager) {

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