import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/scss/variables/border-radius.scss";
      @import "./src/scss/variables/padding.scss";
      @import "./src/scss/variables/elevation.scss";
      @import "./src/scss/helpers/devices.scss";
      @import "./src/scss/helpers/extends.scss";
      @import "./src/scss/helpers/functions.scss";
      @import "./src/scss/helpers/mixins.scss";
      @import "./src/scss/layout/columns.scss";
        `,
      },
    },
  },
});
