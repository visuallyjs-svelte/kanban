<script lang="ts">
    import { Node, Group, type Base } from "@visuallyjs/browser-ui";
    import { InspectorComponent } from "@visuallyjs/browser-ui-svelte";

    let current = $state(null)
</script>

<InspectorComponent bind:current={current}>
    {#if current?.objectType === null}
        <div></div>
    {:else if current?.objectType === Node.objectType}
        <div class="vjs-kanban-inspector">
            <strong>Label</strong>
            <input vjs-att="name" type="text"/>
            <strong>Description</strong>
            <textarea vjs-att="description" rows="10"></textarea>
        </div>
    {:else if current?.objectType === Group.objectType}
        <div class="vjs-kanban-inspector">
            <strong>Title</strong>
            <input vjs-att="title" type="text"/>
            <strong>Description</strong>
            <textarea vjs-att="description" rows="10"></textarea>
            <strong>Color</strong>
            <input type="color" vjs-att="color"/>
        </div>
    {/if}
</InspectorComponent>
