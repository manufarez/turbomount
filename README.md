## Dummy app to test [Turbo-mount](https://github.com/skryukov/turbo-mount)

### Rails 8 basic configuration

```bash
rails new turbo-mount --database=postgresql --asset-pipeline=propshaft --css=tailwind
```

### Necessary gems and setup
- [Vite Rails](https://github.com/sergii/vite_rails) & [Turbo Mount](https://github.com/skryukov/turbo-mount)
- Use Turbo Mount's generator:
```bash
bin/rails generate turbo_mount:install
```
- If not already present, add Turbo Mount to entrypoints (app/javascript/entrypoints/application.js)
```bash
import "../turbo-mount";
```
- Remove `<%#= javascript_importmap_tags %>` from application.html.erb (handled by Vite Rails - throws a console error)
- Install the package of your choice - e.g.: `npm install emoji-picker-react` (or any other package)
- Register component in turbo-mount.js
```bash
import EmojiPickerReact from "emoji-picker-react";
registerComponent(turboMount, "EmojiPicker", EmojiPickerReact);
```
- Mount the component in the view
```erb
<%= turbo_mount("EmojiPicker") %>
```
