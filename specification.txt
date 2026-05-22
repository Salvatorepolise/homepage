CS50 Homepage — Specification
Salvatore Polise
==============================

10 HTML TAGS USED
-----------------
1.  <nav>         — Navigation bar present on every page
2.  <canvas>      — Used to draw the animated starfield background
3.  <header>      — Hero section at the top of each page
4.  <section>     — Groups content into logical sections (About, Cards, Timeline, etc.)
5.  <table>       — Starship technical specifications table (starship.html)
6.  <button>      — Interactive filter buttons (gallery.html) and fact generator
7.  <ul> / <li>   — Navbar link list
8.  <blockquote>  — Random space fact display (gallery.html)
9.  <footer>      — Footer with author name on every page
10. <strong>      — Inline emphasis for key terms and author name

5 CSS PROPERTIES USED
----------------------
1.  backdrop-filter      — Frosted-glass blur on the navbar
2.  animation            — Fade-up hero, bouncing scroll hint, planet spin, rocket float
3.  radial-gradient      — Planet and gallery image placeholder backgrounds
4.  letter-spacing       — Used throughout for uppercase labels and nav links
5.  transform            — Card hover lift, fade-in scroll animations, rocket flicker

JAVASCRIPT FEATURES
-------------------
- Animated starfield: a <canvas>-based particle system draws 160 twinkling stars
  that are updated every frame with requestAnimationFrame.
- Rotating hero word: the subtitle word on the homepage cycles through space-themed
  words (Space, SpaceX, Starship…) every 2 seconds with a fade transition.
- Scroll fade-in: IntersectionObserver triggers a CSS transition that fades and
  lifts elements into view as the user scrolls.
- Animated counters: on the SpaceX page, stat numbers count up from 0 to their
  target value with an easing function when they enter the viewport.
- Gallery filter: clicking category buttons shows/hides gallery cards by data-category.
- Random space facts: clicking "New fact" on the Gallery page displays a random
  space fact from a curated array with a fade transition.

BOOTSTRAP FEATURES USED
------------------------
- Navbar with collapse/hamburger toggle (responsive mobile navigation)
- Grid system (col-md-4, col-md-6) for responsive card and section layouts
- Bootstrap accordion (collapse component) for the FAQ section on starship.html
- Utility classes: d-flex, align-items-center, justify-content-center, text-center,
  mb-4, mt-5, ml-auto used throughout for spacing and layout
