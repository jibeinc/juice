## Roadmap
1. ~~Rewrite infinite scroll (we can't get to 100% code coverage until we can test infinite scroll)~~
1. ~~Strip deprecated components (State.js, URL.js, SentenceGenerator - already removed from JSM and JA)~~
1. ~~Draft GitHub release with Travis~~
1. Get 100% test coverage
1. Come up with a solution for browser vendor shimming ( Design patterns book: Addy Yosmani jQuery browser specific stuff) ~ make sure that the bind-click works for all browsers and environments.
Tests need to be spoofing each browser’s implementation or firing the vendor-specific behaviors and account for them.
1. Look at Code Climate Stuff, fix any issues that may arise
1. Really Deep-dive into the tests to make sure that they handle all logical cases
1. Get out of jQuery Land
  * Remove the dependency and replace with JSDom + browser-specific selectors
1. Rewrite the Readme
  * Small sections devoted to the use of each UI component. Docs Driven Format
1. Minor Version 0.4.0: Remove BaseFragmentFactroy && create ListItem
Refactor ListViews to use the ListItem
1. Minor Version 0.5.0: Date Picker
Date Picker with optional Date Selection via text Input
1. Minor Version 0.6.0: Modal
  * Dialog Boxes
  * Modal
  * Takeover
  * Overlay as a Utility
1. Minor Version 0.7: Anchor Scroll
  * Work with / around infinite Scroll
1. Minor Version 0.8: Nested Typeahead
  * Nested ListView
1. Minor Version 0.9: Data Tables
  * Table class
  * Sortable Table
  * DataTable
  * Filter the rows by the text input + Sortable Table
1. 1.0.0-rc

