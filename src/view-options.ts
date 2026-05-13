import {
    EmptyLayout,
    EVENT_TAP,
    type BrowserElement,
    type NodeEventCallbackPayload,
    type GroupEventCallbackPayload
} from "@visuallyjs/browser-ui";

import ItemComponent from "./components/ItemComponent.svelte";
import ColumnComponent from "./components/ColumnComponent.svelte";

/**
 * View options map node/group types to the component used to render them and to various aspects of the given vertex type's
 * behaviour.
 */
const viewOptions = {
    nodes: {
        default: {
            component: ItemComponent,
            events: {
                [EVENT_TAP]: (p: NodeEventCallbackPayload<BrowserElement>) => {
                    p.model.setSelection(p.obj)
                }
            }
        }
    },
    groups: {
        default: {
            component: ColumnComponent,
            layout: {
                type: EmptyLayout.type
            },
            events: {
                [EVENT_TAP]: (p: GroupEventCallbackPayload<BrowserElement>) => {
                    p.model.clearSelection()
                }
            }
        }
    }
}

export default viewOptions
