# Lesson 2: The Box Model

## Introduction

### Vocabulary

- the box model
  - box properties
    - width and height
    - padding and margins
    - borders
  - visual display models
    - `block`
    - `inline`
    - `inline-block`
  - box sizing model
    - `content-box`
    - `border-box`

- dimensions
  - absolute units
  - relative units

Be familiar with:

- container
- physical pixels
- CSS reference pixels

### Box properties

- Every box has a width, height, padding, border, and margins; know the
  differences.
- Padding, borders, and margins have separate properties to set the left, right,
  top, and bottom of each element. You can use shortcut properties to specify
  all four sides at once.
- How does the visual display model interact with margins, borders, and padding?

### Visual Display Models

- Understand the differences between `inline`, `block`, and `inline-block`.
- Containers are almost always `block` elements, while non-containers are
  `inline`. When in doubt, check MDN.
- Don't try to memorize which HTML elements are `block` and `inline`.
- How and when can you change an element's visual display model?

### Box Sizing Models

- Understand the `content-box` and `border-box` sizing models.
- How and when can you change the box-sizing model for an element?

### Dimensions

- Know the differences between `px`, `em`, `rem`, `%`, and `auto`.
- Understand why we need to talk about CSS reference pixels and physical pixels.
  Don't try to memorize the details, but understand the topic well enough that
  you won't be too surprised the first time you encounter the differences in the
  wild.
- Use `auto` margins to center block elements horizontally.

### CSS

Become comfortable with the CSS `display`, `box-sizing`, `width`, `height`,
`padding`, `border`, and `margin` properties. Memorize this list of properties
so you can look up the details when needed.
