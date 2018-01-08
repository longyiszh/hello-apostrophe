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
    // Ordinary page types
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'home',
      label: 'Home'
    },
    // Our new page type for displaying people
    {
      name: 'people-page',
      label: 'People'
    }
  ]
};
