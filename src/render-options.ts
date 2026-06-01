import {
    EVENT_CANVAS_CLICK,
    RowLayout
} from "@visuallyjs/browser-ui";

/**
 * Render options control the basic behaviour and appearance of the UI. There are a lot of render options available,
 * and we'd encourage you to read the docs for a full overview, but we've included a few here to give you some
 * food for thought.
 */
const renderOptions = {
    layout:{
        type:RowLayout.type,
        options:{
            padding:{x:10, y:0}
        }
    },
    dragOptions:{
        cssFilter:"*"
    },
    zoom:{
        wheel:false
    },
    events:{
        [EVENT_CANVAS_CLICK]:(p: any) => p.model.clearSelection()
    },
    elementsDraggable:false,
    consumeRightClick:false
}

export default renderOptions
