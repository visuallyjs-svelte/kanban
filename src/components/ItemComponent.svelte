<script lang="ts">
    import { type SvelteWrapperProps } from "@visuallyjs/browser-ui-svelte"

    const {
        model, vertex
    }:SvelteWrapperProps = $props()

</script>

<div class="vjs-kanban-item" draggable="true">
    <div class="vjs-kanban-item-delete" onclick={() => model.removeNode(vertex)}></div>
    { vertex.data.name }
</div>
