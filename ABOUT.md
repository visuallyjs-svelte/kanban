### Summary
This demo showcases a Kanban board implemented with VisuallyJS. It supports dragging tasks between columns and adding new columns dynamically.

### Components Used
- `SurfaceProvider`: Context provider.
- `SurfaceComponent`: The main board canvas.
- `ControlsComponent`: UI for board interactions.
- `InspectorComponent`: (In `components/InspectorComponent.svelte`) For editing card details.

### Component Options
#### `SurfaceComponent`
- `viewOptions`: Configures the board view.
- `renderOptions`: Defines the appearance of cards and columns.
- `url`: Path to the Kanban dataset.

### Stylesheet Requirement
You must include the `visuallyjs.css` stylesheet.

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
```
