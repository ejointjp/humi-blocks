import { registerBlockType } from "@wordpress/blocks";
import edit from "./edit";
import save from "./save";
import metadata from "./block.json";

import "./style.css";
import "./editor.css";

registerBlockType(metadata.name, {
  edit,
  save,
});
