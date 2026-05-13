<script lang="ts">
    import { Node, Group, type Base } from "@visuallyjs/browser-ui";
    import { InspectorComponent } from "@visuallyjs/browser-ui-svelte";

    let currentType = $state('')

    const renderEmptyContainer = () => {
        currentType = '';
    };

    const refresh = (obj: Base) => {
        currentType = obj.objectType;
    };
</script>

<InspectorComponent refresh={refresh} renderEmptyContainer={renderEmptyContainer}>
    {#if currentType === ''}
        <div></div>
    {:else if currentType === Node.objectType}
        <div class="vjs-kanban-inspector">
            <strong>Label</strong>
            <input vjs-att="name" type="text"/>
            <strong>Description</strong>
            <textarea vjs-att="description" rows="10"></textarea>
        </div>
    {:else if currentType === Group.objectType}
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
