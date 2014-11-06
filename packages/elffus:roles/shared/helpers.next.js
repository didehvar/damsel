Elffus.roles.canModify = (userId) => {
  return Roles.findOne({
    _id: userId,
    roles: {
      $in: [Elffus.roles.modify]
    }
  });
};
