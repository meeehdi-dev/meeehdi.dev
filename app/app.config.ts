export default defineAppConfig({
  ui: {
    colors: {
      neutral: "zinc",
      primary: "amber",
      secondary: "blue",
    },
    pageSection: {
      slots: {
        container: "py-4 sm:py-8 lg:py-16",
      },
      compoundVariants: [
        {
          orientation: "vertical",
          title: true,
          class: {
            description: "mt-2 md:mt-6",
            body: "mt-4 md:mt-16",
          },
        },
      ],
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
