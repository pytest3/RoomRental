import { createGlobalStyle } from "styled-components";
import {
  COLORS,
  SPACING,
  FONT_SIZE,
  FONT_WEIGHTS,
  LINE_HEIGHT,
  BORDER_RADIUS,
} from "../constants";

const GlobalStyles = createGlobalStyle`
    
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
	border: 0;
	/* font-size: 100%; */
	/* font: inherit; */
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html,
body,
#root {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Figtree', sans-serif;
}
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}
input,
button,
textarea,
select {
  font: inherit;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}
#root,
#__next {
  isolation: isolate;
}

ol,
ul {
  list-style: none;
  padding: 0;
}


// DESIGN TOKENS //

html {

  --color-white: ${COLORS.white};
  --color-offblack: ${COLORS.offblack};
  --color-urgent: ${COLORS.urgent};
  --color-gray-100: ${COLORS.gray[100]};
  --color-gray-300: ${COLORS.gray[300]};
  --color-gray-500: ${COLORS.gray[500]};
  --color-gray-700: ${COLORS.gray[700]};
  --color-gray-900: ${COLORS.gray[900]};

  --color-green: ${COLORS.green};
  --color-orange-100: ${COLORS.orange[100]};
  --color-orange-300: ${COLORS.orange[300]};
  --color-orange-500: ${COLORS.orange[500]};
  --color-orange-700: ${COLORS.orange[700]};
  --color-orange-900: ${COLORS.orange[900]};

  --font-weight-lighter:${FONT_WEIGHTS.lighter};
  --font-weight-light:${FONT_WEIGHTS.light};
  --font-weight-normal:${FONT_WEIGHTS.normal};
  --font-weight-medium:${FONT_WEIGHTS.medium};
  --font-weight-bold:${FONT_WEIGHTS.bold};
  --font-weight-bolder:${FONT_WEIGHTS.bolder};

  --line-height-small: ${LINE_HEIGHT.small};
  --line-height-medium: ${LINE_HEIGHT.medium};
  --line-height-large: ${LINE_HEIGHT.large};

  /* Spacing 
  ===================================================================
  */

  --space-1: ${SPACING["1"]};
  --space-2: ${SPACING["2"]};
  --space-3: ${SPACING["3"]};
  --space-4: ${SPACING["4"]};
  --space-5: ${SPACING["5"]};
  --space-6: ${SPACING["6"]};
  --space-7: ${SPACING["7"]};
  --space-8: ${SPACING["8"]};
  --space-9: ${SPACING["9"]};
  --space-10: ${SPACING["10"]};
  --space-11: ${SPACING["11"]};
  --space-12: ${SPACING["12"]};
  --space-13: ${SPACING["13"]};
  --space-14: ${SPACING["14"]};
  --space-15: ${SPACING["15"]};
  --space-16: ${SPACING["16"]};


  /* TYPOGRAPHY
  ===================================================================
  */
  --font-size-1: ${FONT_SIZE["1"]};
  --font-size-2: ${FONT_SIZE["2"]};
  --font-size-3: ${FONT_SIZE["3"]};
  --font-size-4: ${FONT_SIZE["4"]};
  --font-size-5: ${FONT_SIZE["5"]};
  --font-size-6: ${FONT_SIZE["6"]};
  --font-size-7: ${FONT_SIZE["7"]};
  --font-size-8: ${FONT_SIZE["8"]};
  --font-size-9: ${FONT_SIZE["9"]};
  --font-size-10: ${FONT_SIZE["10"]};
  --font-size-11: ${FONT_SIZE["11"]};

  --font-weight-lighter:${FONT_WEIGHTS.lighter};
  --font-weight-light:${FONT_WEIGHTS.light};
  --font-weight-normal:${FONT_WEIGHTS.normal};
  --font-weight-medium:${FONT_WEIGHTS.medium};
  --font-weight-bold:${FONT_WEIGHTS.bold};
  --font-weight-bolder:${FONT_WEIGHTS.bolder};

  --line-height-small: ${LINE_HEIGHT.small};
  --line-height-medium: ${LINE_HEIGHT.medium};
  --line-height-large: ${LINE_HEIGHT.large};


  /* BORDER
===================================================================
  */

  --border-radius-small: ${BORDER_RADIUS.small};
  --border-radius-medium: ${BORDER_RADIUS.medium};
  --border-radius-large: ${BORDER_RADIUS.large};
  --border-radius-larger: ${BORDER_RADIUS.larger};
}
`;

export default GlobalStyles;
