<script lang="ts">
    import { uuid } from "@visuallyjs/browser-ui"
    import { type SvelteWrapperProps } from "@visuallyjs/browser-ui-svelte"

    const {
        model, vertex, ui
    }:SvelteWrapperProps = $props()

    function addItem(event: any) {
        if (event.code === "Enter") {

            // On enter keypress, find out how many members there already are in the column
            const order = vertex.getMembers().length
            // add a new item to the column, specifying an `order` property and the text from
            // the input field, or default to `Item` if the user didnt type anything.
            const node = model.addNode({
                group: vertex,
                id: uuid(),
                order,
                name: event.target.value || "Item"
            })

            // show the rendered item in the next tick of the event loop
            setTimeout(() => {
                const el = ui.getRenderedElement(node)
                el.scrollIntoView()
                model.setSelection(node)
            }, 0)

            // clear the input field
            event.target.value = ""
        }
    }
</script>

<div class="vjs-kanban-lane" data-vjs-draggable="false">
    <div class="vjs-kanban-lane-header">
        <div class="vjs-kanban-lane-titlebar">
            <div class="vjs-kanban-lane-color" style:background-color={vertex.data.color}></div>
            <div class="vjs-kanban-lane-title">{ vertex.data.title }</div>
            <div class="vjs-kanban-lane-edit" aria-label="Edit column name and description" title="Edit column name and description" onclick={() => model.setSelection(vertex)}></div>
        </div>
        <div class="vjs-kanban-lane-description">{ vertex.data.description }</div>
    </div>

    <!-- the items go into this element -->
    <div data-vjs-group-content="true"></div>

    <div class="vjs-kanban-lane-footer">
        <input type="text" placeholder="Add item..." onkeypress={addItem} />
    </div>
</div>
