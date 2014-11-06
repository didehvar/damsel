Template.registerHelper('isActive', function(route) {
  return Router.current() && Router.current().route.getName() === route;
});
