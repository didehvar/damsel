var ensureAdmin = function() {
  var user = Meteor.user();
  if (!user || !user.admin) {
    return this.render('error.unauthorized', {
      data: () => ({ admin: true })
    });
  }

  this.next();
};

Router.route('/admin', {
  onBeforeAction: ensureAdmin,
  name: 'admin'
});
