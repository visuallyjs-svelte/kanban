<script lang="ts">
import { onMount } from 'svelte'
import {
    ControlsComponent,
    SurfaceComponent,
    SurfaceProvider, useSurface
} from "@visuallyjs/browser-ui-svelte"
import {
  EVENT_GROUP_RENDERED,
  type GroupRenderedParams,
  uuid,
  type BrowserElement
} from "@visuallyjs/browser-ui"

import { DragManager } from './drag-manager'
import KanbanInspectorComponent from "./components/InspectorComponent.svelte"
import renderOptions from "./render-options"
import viewOptions from "./view-options"

let surfaceComponent: any = $state(null)
let surface: any = $state(null)

function addColumn(event: any) {
  if (event.code === "Enter") {
    surface.model.addGroup({
        id: uuid(),
        title: event.target.value,
        description: "",
        color: "#FFFFFF"
      })
      event.target.value = ""
  }
}

onMount(() => {
  surface = surfaceComponent.getSurface();
  new DragManager(surface)
  surface.bind(EVENT_GROUP_RENDERED, (p: GroupRenderedParams<BrowserElement>) => {
	  setTimeout(() => p.el.scrollIntoView())
  })
})

</script>

<div class="vjs-kanban-main">
    <SurfaceProvider>
      <div class="vjs-kanban-container">
        <SurfaceComponent
          bind:this={surfaceComponent}
          viewOptions={viewOptions}
          renderOptions={renderOptions}
          url="/dataset.json"
        />
      </div>

      <div class="vjs-kanban-rhs">
        <ControlsComponent zoomToExtents={false} clear={false} />

        <div class="vjs-kanban-controls">
          <input type="text" id="txtAddColumn" placeholder="Add column..." onkeypress={addColumn} />
        </div>

        <KanbanInspectorComponent />

        <div class="description"></div>
      </div>
    </SurfaceProvider>
</div>
