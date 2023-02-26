'use client'

import client from 'lib/client'
import { createGlobalStyle } from 'styled-components'
import queries from 'styles/queries'
import data from './themeData'
import Gradient4 from '../../public/gradients/gradient-4.jpg'

// Varibles
const size = 4
const accent = data.color.accent
const textColor = data.color.text
const backgroundColor = data.color.background
const layout = data.layout

const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  color: black;
  font-weight: 400;
  font-size: 16px !important;
  background-color: var(--background-color-primary);

}
a {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
}

address {
    font-style: normal;
}
b {
  font-weight: 700;
}

p {
  font-size: 1rem;
  line-height: 24px;
  margin-top: 0px;
}
ol {
    margin: 0;
  }

h1,
h2,
h3,
h4,
h5,
h6
 {
  font-family: var(--font-heading-family);
  font-weight: 600;
  word-break: break-word;
  margin-bottom: var(--size-4);
  margin-top: 0px;
}
h1 {
  font-size: calc(var(--font-heading-scale) * 4.5rem);
  @media (${queries.tablet}) {
    font-size: calc(var(--font-heading-scale) * (4.5rem * 0.80));
  }
  @media (${queries.mobile}) {
    font-size: calc(var(--font-heading-scale) * (3.6rem * 0.80));
  }
}
h2 {
  font-size: calc(var(--font-heading-scale) * 3.375rem);
  @media (${queries.tablet}) {
    font-size: calc(var(--font-heading-scale) * (3.375rem * 0.80));
  }
  @media (${queries.mobile}) {
    font-size: calc(var(--font-heading-scale) * (2.7rem * 0.80));
  }
}
h3 {
  font-size: calc(var(--font-heading-scale) * 2.25rem);
  @media (${queries.tablet}) {
    font-size: calc(var(--font-heading-scale) * (2.25rem * 0.80));
  }
  @media (${queries.mobile}) {
    font-size: calc(var(--font-heading-scale) * (1.8rem * 0.80));
  }
  
}
h4 {
  font-size: calc(var(--font-heading-scale) * 1.6875rem);
}
h5 {
  font-size: calc(var(--font-heading-scale) * 1.4067rem);
}
h6 {
  font-size: calc(var(--font-heading-scale) * 1.125rem);
}

  :root {
    // Layout
    --grid-column-gap: ${layout.grid.column_gap}px;
    --grid-row-gap: ${layout.grid.row_gap}px;

    --page-padding: ${layout.page.padding}px;
    --page-width: ${layout.page.width}px;

    --section-gap: ${layout.section.gap}px;
    // Color
    --background-color-primary: ${backgroundColor.primary.hex}; // White
    --background-color-secondary: ${backgroundColor.secondary.hex}; // Black
    --background-color-tertiary: ${backgroundColor.tertiary.hex};
    --background-color-success: ${backgroundColor.success.hex};
    --background-color-warning: ${backgroundColor.warning.hex};
    --background-color-error: ${backgroundColor.error.hex};
    --background-color-information: ${backgroundColor.information.hex};

    --text-color-primary: ${textColor.primary.hex};
    --text-color-secondary: ${textColor.secondary.hex};
    --text-color-link-light: ${textColor.link_light.hex};
    --text-color-link-dark: ${textColor.link_dark.hex};
    --text-color-selection: ${textColor.selection.hex};
    --text-color-inactive: ${textColor.inactive.hex};
    // Typography
    --font-heading-scale: ${data.typography.heading.scale};
    --font-large-heading-scale: 1.333333333;

    // Accents
    --accent-1: ${accent.a_01.hex};
    --accent-2: ${accent.a_02.hex};
    --accent-3: ${accent.a_03.hex};
    --accent-4: rgba(187,187,187,0.2);
    --accent-5: ${accent.a_05.hex};
    --accent-6: ${accent.a_06.hex};
    --accent-7: ${accent.a_07.hex};
    --accent-8: ${accent.a_08.hex};
    --accent-9: ${accent.a_09.hex};

    // Gradients
    --gradient-1: linear-gradient(90deg,#2ca2b4,#5598de 10%,#7f87ff 25%,#f65aad 76%,#ec3d43);
    --gradient-white: linear-gradient(white, white) padding-box;
    --gradient-2: -webkit-linear-gradient(0deg,#be22ff 20%,#ff279c 50%,#ff981f 80%);
    --gradient-3: linear-gradient(90deg, #64ADF2 0%, #C380FF 33%, #64ADF2 66%, #64ADF2 100%);
    --gradient-4: linear-gradient(to right, #e73f3f, #ef2358, #f00074, #ea0093, #d909b4, #c116aa, #aa1c9e, #941e92, #761562, #53123b, #2e101d, #000000);
    --gradient-5: linear-gradient(270deg,#4541fe 40%,#fe0f83);
    --gradient-white: linear-gradient(270deg, white);

    // Heights
    --navbar-height: 112px;

    // Sizes
    --size: ${1 * size}px; // 4
    --size-2: ${2 * size}px; // 8
    --size-3: ${3 * size}px; // 12 !
    --size-4: ${4 * size}px; // 16ord
    --size-6: ${6 * size}px; // 24 !
    --size-8: ${8 * size}px; // 32
    --size-10: ${10 * size}px; // 40 !
    --size-12: ${12 * size}px; // 48 !
    --size-16: ${16 * size}px; // 64
    --size-20: ${20 * size}px; // 80 !
    --size-24: ${24 * size}px; // 96 !
    --size-28: ${28 * size}px; // 96 !
    --size-32: ${32 * size}px; // 128
    --size-48: ${48 * size}px; // 192 !
    --size-64: ${64 * size}px; // 256 

    // Gaps
    --gap: var(--size-8);
    --gap-quarter: var(--size-2);
    --gap-half: var(--size-4);
    --gap-large: var(--size-16);
    --gap-section: var(--size-20);

    // Width
    --width-33p: 33.333333%;
    --width-66p: 66.666666%;
    --width-100p: 100%;
    // Font width
    --text-width: 70ch;
    --text-width-xxsmall: 18ch;
    --text-width-xsmall: 20ch;
    --text-width-small: 45ch;
    --text-width-meduim-small: 52ch;
    --text-width-meduim: 60ch;
    --text-width-large: 80ch;
    --text-width-xlarge: 105ch;
    --text-width-half: 35ch;

    // Aspect Ratio
    --aspect-ratio-43: 75%;
    --aspect-ratio-100: 100%;
    --aspect-ratio-32: 66.66%;
    --aspect-ratio-53: 60%;
    --aspect-ratio-107: 142.857%;
    --aspect-ratio-710: 70%;
    --aspect-ratio-169: 56.25%;
    --aspect-ratio-219: 42.8%;
    --aspect-ratio-222: 33.33%;

    // Shadow
    --card-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    --card-box-shadow-white: 0 0 10px rgba(255, 255, 255, 12.5%);
    --card-apple-box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
    --card-apple-box-shadow-white: 2px 4px 12px rgb(255 255 255 / 8%);

    // Border
    --border-radius: var(--size-2); // Base
    --border-radius-meduim: var(--size-3); // Base 12
    --border-radius-large: var(--size-4); // Large 16
    --border-radius-circle: 100%; // Circle

    // Breakpoints
    --breakpoints-tablet: 991px;
}

// Pseudo
p:first-child, h1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child {
	margin-top: 0;
}

p:last-child, h1:last-child, h2:last-child, h3:last-child, h4:last-child, h5:last-child, h6:last-child div:last-child {
	margin-bottom: 0
}
// Classes
//
.portable-text {
  p {
    color: var(--accent-2);
    font-size: 1.125rem; // 1.375
    line-height: 30px;
    margin-bottom: var(--size-3);
  }
  strong {
    color: var(--text-color-secondary);
  }
}
.portable-text-large {
  p {
    font-size: 1.375rem !important;
    line-height: 30px;
  }
  strong {
    color: var(--text-color-primary);
  }
}
.portable-text-service-content {
  max-width: var(--text-width);
  p {
    margin-bottom: var(--size-24);
  }
  h2, h3 {
    margin-bottom: var(--size-10);
  }
  ol {
    display: flex;
    flex-direction: column;
    row-gap: var(--size-8);
    margin-bottom: var(--size-24);
    padding-left: 20px;
    margin-top: -40px;
  }
}
// Cards
.service-card {
  padding: var(--size-10);
  border-radius: var(--border-radius-large);
  background-image:linear-gradient(to bottom right, rgba(255,255,255,0.2), rgba(255,255,255,0));
  backdrop-filter: "blur(10px)"; 
  box-shadow: 10px 10px 10px rgba(30,30,30,0.5);
}
.card-contact {
  padding: var(--size-6) var(--size-12);
  background-color: var(--background-color-primary);
  border-radius: var(--border-radius);
  box-shadow: var(--card-box-shadow);
  border-image: 1px solid var(--gradient-5);

}
// Card Text
.card-heading {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: var(--size);
}
.card-subheading {
  font-size: 0.75rem;
  font-weight: 500;
}
// Links
.link-01 {
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
}
// Borders
.border-small-card {
  border-radius: var(--size-8);
}
.border-large-card {
  border-radius: var(--size-16);
}
// Gradients

// Heading
.h1 {
  font-size: calc(var(--font-heading-scale) * 4.5rem);
  font-weight: 600;
}
.h2 * {
  font-size: calc(var(--font-heading-scale) * 3.375rem);
  font-weight: 600;
  @media (${queries.tablet}) {
    font-size: calc(var(--font-heading-scale) * 2.75rem);
  }
}
.h3 {
  font-size: calc(var(--font-heading-scale) * 2.25rem);
  font-weight: 600;
}
.h4 {
  font-size: calc(var(--font-heading-scale) * 1.6875rem);
  font-weight: 600;
}
.h5 {
  font-size: calc(var(--font-heading-scale) * 1.4067rem);
  font-weight: 600;
}
.h6 {
  font-size: calc(var(--font-heading-scale) * 1.125rem);
  font-weight: 600;
}
// Body
.body-large {
  font-size: 1.25rem; // 1.375
  line-height: 30px;
}
// Hero
// Hero defaults
.h1-large {
  font-size: calc(var(--font-large-heading-scale) * 4.5rem);
  font-weight: 700;
}
.h2-large {
  font-size: calc(var(--font-large-heading-scale) * 3.375rem);
  font-weight: 700;
}
.h3-large {
  font-size: calc(var(--font-large-heading-scale) * 2.75rem);
  font-weight: 700;
}
.hero-heading-large {
  font-size: 5.625rem;
  font-weight: 700;
  @media (${queries.tablet}) {
    font-size: 4rem;
  }
}
.hero-heading-service {
  font-size: 7.25rem;
  font-weight: 700;
  text-align: center;
  line-height: 100%;
  @media (${queries.tablet}) {
    font-size: 4rem;
  }
}

.hero-heading-meduim {
  color: transparent;
  background: var(--gradient-1);
  overflow: hidden;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    background-clip: text;
  font-size: 4rem;
  font-weight: 700;
  @media (${queries.tablet}) {
    font-size: 4rem;
  }
}
// Gradient Text
.gradient-text-1 {
  color: transparent;
  background: var(--gradient-1);
  overflow: hidden;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.gradient-text-2 {
  color: transparent;
  background: var(--gradient-2);
  overflow: hidden;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.gradient-text-3 {
  color: transparent;
  background: var(--gradient-3);
  overflow: hidden;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.gradient-text-5 {
  color: transparent;
  background: var(--gradient-5);
  overflow: hidden;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.gradient-text-white {
  color: transparent;
  background: var(--gradient-white);
  overflow: hidden;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
// Overline
.overline {
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-bottom: var(--size-3);
}
// Form
input, select, textarea {
  font-family: "Inter";
  padding: 18px 14px;
  border: 0px solid;
  border-radius: var(--border-radius);
  background-color: var(--accent-4);
  border: 1px solid transparent;
  :focus {
    outline: none;
    background: transparent;
    background-image: linear-gradient(90deg, white, white),
    var(--gradient-5);
    background-clip: padding-box, border-box;
    background-origin: border-box;
    border: 1px solid transparent;
    border-radius: var(--border-radius);
  }
}
label {
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: var(--size-2);
}
// Width
// Percentage
.width-33p {
  width: 33.333333%;
}
.width-40p {
  width: 40%;
}
.width-60p {
  width: 60%;
}
.width-66p {
  width: 66.666667%;
}
.width-100p {
  width: 100%;
}
// Pixels
.width-1000 {
  max-width: 1000px;
}
// Margin
// Margin Bottom
.mb-4 {
  margin-bottom: var(--size-4)  !important;
}
.mb-8 {
  margin-bottom: var(--size-8)  !important;
}
.mb-10 {
  margin-bottom: var(--size-10)  !important;
}
.mb-12 {
  margin-bottom: var(--size-12)  !important;
}
.mb-16 {
  margin-bottom: var(--size-16)  !important;
}
.mb-20 {
  margin-bottom: var(--size-20)  !important;
}
.mb-24 {
  margin-bottom: var(--size-24)  !important;
}
.mb-28 {
  margin-bottom: var(--size-28)  !important;
}
.mb-32 {
  margin-bottom: var(--size-32)  !important;
}
.mb-36 {
  margin-bottom: var(--size-36)  !important;
}
.mb-40 {
  margin-bottom: var(--size-40) !important;
}
.mb-44 {
  margin-bottom: var(--size-40) !important;
}
.mb-48 {
  margin-bottom: var(--size-40) !important;
}
// Margin Top
.mt-4 {
  margin-top: var(--size-4) !important;
}
.mt-8 {
  margin-top: var(--size-8) !important;
}
.mt-12 {
  margin-top: var(--size-12) !important;
}
.mt-16 {
  margin-top: var(--size-16) !important;
}
.mt-20 {
  margin-top: var(--size-20) !important;
}
// Box Shadow
.border-01 {
  box-shadow: var(--border-shadow-01);
  border-radius: var(--size-8);
}
.border-02 {
  border-radius: var(--size-8);
}
.border-03 {
  border-radius: var(--size-16);
}
// Utility
.list-style-none {
  list-style: none;
  padding-left: 0;
}
.dark {
  color: var(--text-color-secondary);
  background-color: var(--background-color-secondary)
}
// Swiper
.swiper-pagination {
  bottom: 0 !important;
  z-index: -1;
}
.swiper-pagination-bullet {
  background-color: var(--accent-3);
}
.swiper-pagination-bullet-active {
     background-color: #ffffff !important;
}
.swiper {
     margin: 0
}

// Navbar Mobile Menu
.navbar-open {
  @media (${queries.desktop}) {
    height: 100vh;
    background-color: var(--background-color-primary);
    display: flex;
  }
}
.navbar-links {
  @media (${queries.desktop}) {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }
}
.navbar-brand {
    border-bottom: 1px solid var(--accent-4);
    padding-bottom: var(--size-6);
    margin-bottom: var(--size-8);
}
.navbar-closed {
  @media (${queries.desktop}) {
    display: none;
  }
}
.navbar-mobile {
  display: none;
  @media (${queries.desktop}) {
    display: flex;
  }
}

.hide-tablet {
  @media (${queries.tablet}) {
    display: none;
  }
}
.hide-mobile {
  @media (${queries.mobile}) {
    display: none;
  }
}
.show-tablet {
  @media (${queries.tablet}) {
    display: flex;
  }
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

`

export default GlobalStyles
