export var AdminController = RouteController.extend({
  layoutTemplate:'adminLayout',
  onBeforeAction: function() {
    var subscribe = Meteor.subscribe('elffus:roles');

    if (subscribe.ready()) {
      var roles = Roles.find({ roles: { $in: ['admin'] }});
      if (!Meteor.userId() || !roles || roles.count() === 0) {
        return this.render('error.unauthorized', {
          data: () => ({ admin: true })
        });
      }

      return this.next();
    }

    this.render('loading');
  }
});

Router.route('/admin', {
  controller: AdminController,
  name: 'admin.dashboard'
});

Router.route('/admin/users', {
  controller: AdminController,
  name: 'admin.users'
});
