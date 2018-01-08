// This configures the apostrophe-pages module to add a "home" page type to the
// pages menu

module.exports = {
  filters: {
    // Grab our ancestor pages, with two levels of subpages
    ancestors: {
      children: {
        depth: 2
      }
    },
    // We usually want children of the current page, too
    children: true
  },
  types: [
    {
      name: 'home',
      label: 'Home'
    }

    // Add more page types here, but make sure you create a corresponding
    // template in lib/modules/apostrophe-pages/views/pages!
  ]
};
