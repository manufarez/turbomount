import { TurboMount } from "turbo-mount";
import { registerComponent } from "turbo-mount/react";
import { HexColorPicker } from "react-colorful";
import CountUp from "react-countup";
import EmojiPicker from "emoji-picker-react";

const turboMount = new TurboMount();

registerComponent(turboMount, "HexColorPicker", HexColorPicker);
registerComponent(turboMount, "CountUp", CountUp);
registerComponent(turboMount, "EmojiPicker", EmojiPicker);
// to register a component use:
// registerComponent(turboMount, "Hello", Hello); // where Hello is the imported the component

// to override the default controller use:
// registerComponent(turboMount, "Hello", Hello, HelloController); // where HelloController is a Stimulus controller extended from TurboMountController

// If you want to automatically register components use:
// import { registerComponents } from "turbo-mount/registerComponents/react";
// const controllers = import.meta.glob("/controllers/**/*_controller.js", { eager: true });
// const components = import.meta.glob("/components/**/*.jsx", { eager: true });
// registerComponents({ turboMount, components, controllers });
