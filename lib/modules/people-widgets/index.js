module.exports = {        
  extend: 'apostrophe-widgets',
  label: 'People',
  filters: {
    projection: {
      slug: 1,
      title: 1,
      type: 1,
      tags: 1,
      
      phone: 1,
      thumbnail: 1
    }
  }
};