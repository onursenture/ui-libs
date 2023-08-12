export const buttonFilters: Array<ButtonFilter> = [
  {
    id: "FStyled",
    label: "Styled",
    icon: "i-tabler-palette",
    help: "Styled components come with opinated style. You customize them by overriding these styles.",
    autoDisable: "FUnstyled",
  },
  {
    id: "FUnstyled",
    label: "Unstyled",
    icon: "i-tabler-palette-off",
    help: "Unstyled components come with no style and force you to write your own.",
    autoDisable: "FStyled",
  },
  {
    id: "FImported",
    label: "Imported",
    icon: "i-mdi-import",
    help: "You depends on an external library from which you import components.",
    autoDisable: "FPasted",
  },
  {
    id: "FPasted",
    label: "Pasted",
    icon: "i-mdi-content-paste",
    help: "You depends on no external library and need to copy paste component code into your own project.",
    autoDisable: "FImported",
  },
  {
    id: "FTailwind",
    label: "Tailwind CSS based",
    icon: "i-simple-icons-tailwindcss",
  },
  {
    id: "FComponents",
    label: "Vue Components",
    icon: "i-mdi-vuejs",
    help: "Some UI libraries only provide styling classes that you have to apply to your own Vue components. Select this filter to remove them.",
  },
  {
    id: "FAccessible",
    label: "Fully Accessible",
    icon: "i-material-symbols-accessibility-new",
  },
  {
    id: "FFigma",
    label: "Figma files",
    icon: "i-ph-figma-logo",
  },
  {
    id: "FDarkMode",
    label: "Dark Mode support",
    icon: "i-mdi-weather-night",
  },
  {
    id: "FFree",
    label: "Free",
    icon: "i-material-symbols-money-off",
  },
  {
    id: "FRoadmap",
    label: "Public Roadmap",
    icon: "i-tabler-road",
  },
  {
    id: "FOfficial",
    label: "Official",
    icon: "i-solar-medal-ribbon-linear",
  },
];

export const rangeFilters: Array<RangeFilter> = [
  {
    id: "FNbStars",
    leadingLabel: "More than",
    trailingLabel: "stars",
    icon: "i-mdi-star-outline",
    rangeMax: 35000,
    rangeStep: 1000,
  },
  {
    id: "FNbDownloads",
    leadingLabel: "More than",
    trailingLabel: "k npm DLs",
    icon: "i-material-symbols-download",
    rangeMax: 10,
    rangeStep: 200,
  },
  {
    id: "FComponentScore",
    leadingLabel: "Score higher than",
    trailingLabel: "%",
    icon: "i-heroicons-square-3-stack-3d",
    rangeMax: 95,
    rangeStep: 5,
  },
];