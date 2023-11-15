# Sole&Ankle, Revisited — Module 5 workshop

In the Flexbox module, we built an e-commerce store:

![A screenshot of the original Flexbox module workshop](./docs/original-desktop.png)

In this workshop, we'll make this application responsive, so that it looks great and works well on phones and tablets:

![A GIF showing how the design changes across viewport widths](./docs/resize-demo.gif)

The design can be found on Figma:

- https://www.figma.com/file/kAL3AumTUV11y1IqHhltB6/Sole-and-Ankle-%E2%80%94-Mockup

We'll use a **desktop-first** approach for this process, and our breakpoints will be set as follows:

| Name   | Width (px) | Width (rem) |
| ------ | ---------- | ----------- |
| phone  | 600        | 37.5        |
| tablet | 950        | 59.375      |
| laptop | 1300       | 81.25       |

## Troubleshooting

If you run into problems running a local development server, check out our [Troubleshooting Guide](https://courses.joshwcomeau.com/troubleshooting) on the course platform.

This guide addresses the common `Digital Envelope Routine` error you may have seen.

---

## Exercise 1: Set up our breakpoints

Before we start tweaking the UI, let's add some structure to make it easy for us to use media queries.

It's up to you how you'd like to structure it! You can use the strategy discussed in [the “breakpoints” lesson](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/07-breakpoints#managing-breakpoints), or you can use [styled-components' “theming” feature](https://styled-components.com/docs/advanced#theming).

Whichever approach you choose, your breakpoints should be specified in rems (not pixels).

## Exercise 2: Mobile header

On smaller screens, we want to switch up our header:

![Close-up screenshot of the new header](./docs/mobile-header.png)

Our `SuperHeader` is removed, replaced with a decorative dark-gray line. The `Header`'s navigation is replaced by 3 icon buttons.

On mobile, a lot of the spacing gets tightened up.

**Be sure to check your work on a real mobile device.** You can use ngrok, as described in [the “Mobile Testing” lesson](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/03-mobile-testing).

## Exercise 3: Tweaks to our main view

On portrait tablet, our left-hand column disappears.

The categories are really more of a nice-to-have, so they're removed. The breadcrumbs, though, are important for navigation, so they move to sit just above the category heading:

![Screenshot of the new breadcrumbs on tablet/phone](./docs/tablet-breadcrumbs.png)

On mobile, we lose the "Sort" filter as well:

![Screenshot of the top part of the screen on mobile, showing a gap where the “sort” filter was](./docs/mobile-no-sort-filter.png)

## Exercise 4: Mobile menu

Alright, let's implement the hamburger menu!

For convenience, a new component has been created for you, `MobileMenu`. It's not really a modal yet, though. Your job is to make it look _and_ act like a modal.

You'll need to update the hamburger-menu button we added in Exercise 2 to flip `showMobileMenu` to `true`.

You should use the `@reach/dialog` package to make sure that the modal is accessible. We took a quick look at this package in a bonus video, [“Building accessible modals”](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/05-exercises#bonus-building-accessible-modals). You can check out the docs for more details:

- https://reach.tech/dialog/

(You may wish to skip the default styles that come with the package. This is explained in [their styling guide](https://reach.tech/styling/#skip-including-styles). The `--reach-dialog` flag has already been set for you, in `GlobalStyles.js`)

## Exercise 5: Fluid desktop navigation

As it stands, our desktop navigation disappears _just_ before it runs out of space:

![Close-up GIF of the header. As the window shrinks, the layout changes just before the nav hits the edge](./docs/nav-barely-fits.gif)

What happens, though, if our Marketing friends rename the categories? Or, what happens when we internationalize the project, and the category names are rendered in a longer language?

![Screen recording of our site with French navigation links. They don't fit, so they spill out the side, causing a page-wide horizontal scroll.](./docs/french-nav-overflow.gif)

We can do two things to make this better:

1. Manage the overflow in the header to scroll this section when it doesn't fit.
2. Use fluid gaps between the nav links, to reduce the likelihood that this'll be required.

Here's our goal:

![Same situation, except now the spacing between items stretches and squashes depending on window width, and when the window gets too small, the content overflows with a scrollbar spanning the header](./docs/french-nav-overflow-fixed.gif)

**NOTE:** Your solution doesn't have to match this GIF _exactly_. Don't worry about picking the perfect numbers! You can use the [“Fluid Calculator” tool](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/16-fluid-calculator) to get close enough

## Exercise 6: Theming with CSS Variables

As it stands, we have a few colors in our `constants.js` file. When we want to use a color, we import and interpolate it:

```jsx
import { COLORS } from '../../constants';

const Something = styled.p`
  color: ${COLORS.gray[900]};
`;
```

This works fine, but I personally prefer to use CSS variables for colors. It makes it a bit easier to write:

```jsx
const Something = styled.p`
  color: var(--color-gray-900);
`;
```

In this exercise, your goal is to update the project to use CSS variables for colors, and optionally font-weights.

**BONUS:** The modal backdrop should use a CSS variable that is created using fragments from the main colors.

## Note to self

Look at the commits to see what was coded for each exercise.

In general, a challenging set of exercises, where the main focus was on using **media queries** and understanding how to rejig the JSX to help allow for different layouts. Most challenging part was possibly incorporating an unstyled component to help create a **hamburger menu**.

### Exercise 1: Setting up breakpoints

Added the breakpoints in `constants.js`. Took a desktop-first approach. Used `rem` instead of `px`.

Decided to use styled-component's `ThemeProvider` (see [API ref](https://styled-components.com/docs/api#themeprovider)) to help make the breakpoints available to every component (benefit is not having to import the theme object into every file).

### Exercise 2: Making the header(s) responsive

Created two different views for showing various things on the header. On desktop, we want a group of links, and on mobile devices a group of buttons. Strategy was to include both of these groups in the JSX, and then using media queries,switch between which one is being shown:

```
<DesktopNav>
  <NavLink href='/sale'>Sale</NavLink>
  ...
</DesktopNav>

<MobileActions>
  <UnstyledButton>
    <Icon id='shopping-bag' strokeWidth={2} />
    <VisuallyHidden>Open cart</VisuallyHidden>
  </UnstyledButton>
  ...
</MobileActions>
```

To incorporate a 'fluid' gap between the links/buttons, where the distance between them fluidly increases/decreases, `clamp()` was used on the `gap` property (see [fluid calculator](https://courses.joshwcomeau.com/css-for-js/05-responsive-css/16-fluid-calculator) and [`clamp`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)).

### Exercise 3

This was where the bulk of the media queries and tweaking were done to match up with the Figma design.

### Exercise 4

Right, incorporating a hamburger menu using the `Dialog` component from Headless UI (see [Dialog (Modal)](https://headlessui.com/react/dialog#managing-initial-focus)).

1. Install the package:

   ```
   npm install @headlessui/react
   ```

2. Add the import and copy in the basic example from the docs.

3. How it works:

   - The `Dialog` component is like your wrapper. So you want it to take up the entire viewport and be positionally fixed.
   - The `Dialog.Panel` is the actual content/menu. There are optional elements you can use inside `Dialog.Panel` like `Dialog.Description` and `Dialog.Title`, although it seems like I needed the latter as otherwise it
     [caused issues](https://github.com/tailwindlabs/headlessui/issues/2535).
   - Clicking anywhere outside the panel closes the modal.
   - Can add a backdrop before the panel by including a self-closing `div` that is absolutely positioned and has a `background` with an `alpha value`.
   - I decided to also absolutely position the panel, but equally I could have used flex.

4. Once you've incorporated the unstyled component, then it's just about adding styles to it. One note to make is that it is better to absolutely position the close button rather than make it part of the layout, and that it's a good idea to increase the padding for such buttons so that it has a good area that users can tap on with their finger.

5. BONUS: adding some `animation`, using `keyframes`.

### Exercise 5 and 6

Used `overflow-x: auto` on the header, responsive `gap` between links/buttons using `clamp()`, incorporating CSS variables.
