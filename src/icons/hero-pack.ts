import { createIconPack } from "astro-icon/pack";

// Resolves `heroicons` dependency and reads SVG files from the `heroicons/outline` directory
export default createIconPack({ package: "heroicons", dir: "24/outline" });
