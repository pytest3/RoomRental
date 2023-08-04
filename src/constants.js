// complex color system
// export const COLORS = {
//   white: "hsl(0deg 0% 100%)",
//   offblack: "hsl(24deg 5% 6%)",
//   gray: {
//     100: "hsl(40deg 12% 95%)",
//     300: "hsl(35deg 8% 80%)",
//     500: "hsl(30deg 4% 60%)",
//     700: "hsl(28deg 5% 40%)",
//     900: "hsl(24deg 6% 16%)",
//   },

//   background: "hsl(44deg, 41%, 95%)",
//   modal: "hsl(44deg 41% 95% / .7)",
//   cart: "hsl(43deg, 88%, 97%)",

//   secondary: "hsl(180deg 34% 37%)",
//   urgent: "hsl(0deg 55% 54%)",
//   CTA: "hsl(145deg, 9%, 35%)",
//   creamV1: "hsl(49deg, 37%, 88%)",
// };

export const COLORS = {
  white: "hsl(0deg 0% 100%)",
  offblack: "hsl(24deg 5% 6%)",
  urgent: "hsl(0deg 55% 54%)",
  gray: {
    100: "hsl(40deg 12% 95%)",
    300: "hsl(35deg 8% 80%)",
    500: "hsl(30deg 4% 60%)",
    700: "hsl(28deg 5% 40%)",
    900: "hsl(24deg 6% 16%)",
  },
  green: "#115E59",
  orange: {
    100: "#FFF7ED",
    300: "#FFEAD0",
    500: "#FFDDB2",
    700: "#FFCC8D",
    900: "#E17654",
  },
};

/* SPACING
============================================================================== 
*/ // For Margin, Padding

const BASE_UNIT = 16;
export const SPACING = {
  1: `${BASE_UNIT * 0.25}px`, // 4px
  2: `${BASE_UNIT * 0.5}px`, // 8px
  3: `${BASE_UNIT * 0.75}px`, // 12px
  4: `${BASE_UNIT * 1}px`, // 16px
  5: `${BASE_UNIT * 1.5}px`,
  6: `${BASE_UNIT * 2}px`,
  7: `${BASE_UNIT * 3}px`,
  8: `${BASE_UNIT * 4}px`,
  9: `${BASE_UNIT * 6}px`,
  10: `${BASE_UNIT * 8}px`,
  11: `${BASE_UNIT * 12}px`,
  12: `${BASE_UNIT * 16}px`,
  13: `${BASE_UNIT * 24}px`,
  14: `${BASE_UNIT * 32}px`,
  15: `${BASE_UNIT * 40}px`,
  16: `${BASE_UNIT * 48}px`,
};

/* BREAKPOINTS
============================================================================== 
*/

// desktop first //
// const BREAKPOINTS = {
//   mobileMax: 550,
//   tabletMax: 1100,
//   laptopMax: 1500,
// };

// mobile first //
const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const WEIGHTS = {
  light: 250,
  normal: 400,
  medium: 550,
  bold: 700,
};

// desktop first //
// export const QUERIES = {
//   mobileAndBelow: `max-width:${BREAKPOINTS.mobileMax / 16}rem`,
//   tabletAndBelow: `max-width:${BREAKPOINTS.tabletMax / 16}rem`,
//   laptopAndBelow: `max-width:${BREAKPOINTS.laptopMax / 16}rem`,
// };

// mobile first //
export const QUERIES = {
  tabletAndUp: `min-width:${BREAKPOINTS.tabletMin / 16}rem`,
  laptopAndUp: `min-width:${BREAKPOINTS.laptopMin / 16}rem`,
  mobileAndUp: `min-width:${BREAKPOINTS.desktopMin / 16}rem`,
};

/* TYPOGRAPHY 
============================================================================== 
*/

// FONT-WEIGHT
export const FONT_WEIGHTS = {
  lighter: 100,
  light: 250,
  normal: 400,
  medium: 550,
  bold: 700,
  bolder: 900,
};

//FONT-SIZE
const BASE_FONT_UNIT = 16;

export const FONT_SIZE = {
  1: `${12 / BASE_FONT_UNIT}rem`,
  2: `${14 / BASE_FONT_UNIT}rem`,
  3: `${16 / BASE_FONT_UNIT}rem`, // 1rem
  4: `${18 / BASE_FONT_UNIT}rem`,
  5: `${20 / BASE_FONT_UNIT}rem`,
  6: `${24 / BASE_FONT_UNIT}rem`,
  7: `${30 / BASE_FONT_UNIT}rem`,
  8: `${36 / BASE_FONT_UNIT}rem`,
  9: `${48 / BASE_FONT_UNIT}rem`,
  10: `${60 / BASE_FONT_UNIT}rem`,
  11: `${72 / BASE_FONT_UNIT}rem`,
};

//LINE-HEIGHT
const BASE_LINE_UNIT = 1;
export const LINE_HEIGHT = {
  small: `${BASE_LINE_UNIT * 1.1}px`,
  medium: `${BASE_LINE_UNIT * 1.3}px`, // recommended for headings
  large: `${BASE_LINE_UNIT * 1.5}px`, // recommended for body text
};

/* Border 
============================================================================== 
*/

export const BORDER_RADIUS = {
  small: "2px",
  medium: "4px",
  large: "8px",
  larger: "16px",
};
