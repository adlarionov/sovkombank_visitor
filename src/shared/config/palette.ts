const button = {
  default: "#FC5055",
  hover: "#DD434B",
  pressing: "#DC3B43",
  disable: "#F6F7F8",
} as const;

const background = {
  tertiary: "#F6F7F8",
};

const monochrome = {
  white: "#FFF",
  black: "#212121",
};

const secondary = {
  borderGrey: "#E0E0E0",
};

const badgeStatus = {
  success: {
    text: "#2F9461",
    background: "#D9F9E6",
  },
  warning: {
    text: "#C8811A",
    background: "rgba(251, 242, 203, 0.90)",
  },
  danger: {
    text: "#FC5055",
    background: "rgba(252, 80, 85, 0.30)",
  },
  white: {
    text: "#BDBDBD",
    background: "#F6F7F8",
  },
  gray: {
    text: "#BDBDBD",
    background: "#FFF",
  },
  info: {
    text: "#3657CD",
    background: "#F0F1FFE5",
  },
};

export const palette = {
  monochrome,
  button,
  background,
  secondary,
  badgeStatus,
} as const;
