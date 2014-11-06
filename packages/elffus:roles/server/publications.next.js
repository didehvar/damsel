Meteor.publish('elffus:roles', function() {
  return Roles.find(
    { _id: this.userId },
    { fields: { roles: 1 }}
  );
});
