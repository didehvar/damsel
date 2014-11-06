Roles.allow({
  update: function(userId, doc, fieldNames, modifier) {
    if (!userId ||
        fieldNames.length !== 1 || fieldNames[0] !== 'roles' ||
        !Elffus.roles.canModify(userId)) {
      return false;
    }

    return true;
  }
});
