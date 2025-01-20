# README

## Dummy app to test [Turbo-mount](https://github.com/skryukov/turbo-mount)

### Rails 8 basic configuration

```bash
rails new turbo-mount --database=postgresql --asset-pipeline=propshaft --css=tailwind
```

### Necessary gems
- Vite Rails
- Turbo Mount with auto install:
```bash
bin/rails generate turbo_mount:install
```
- Add Turbo Mount to entrypoints (app/javascript/entrypoints/application.js)
```bash
import "../turbo-mount";
```
- Remove `<%#= javascript_importmap_tags %>` from application.html.erb (handled by Vite Rails)
- `npm install emoji-picker-react` (or any other package)
- Register component in turbo-mount.js
```bash
import EmojiPickerReact from "emoji-picker-react";
registerComponent(turboMount, "EmojiPicker", EmojiPickerReact);
```
- Add component to the page in application.html.erb
```erb
<%= turbo_mount("EmojiPicker") %>
```
