export default defineAppConfig({
  ui: {
    colors: {
      primary: "slate",
    },
    pageSection: {
      slots: {
        container: "py-4 sm:py-8 lg:py-16",
      },
    },
    input: {
      slots: {
        root: "flex",
      },
    },
    textarea: {
      slots: {
        root: "flex",
      },
    },
  },
});
