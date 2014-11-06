Package.describe({
  name: 'elffus:roles',
  summary: 'User role-based management for Meteor.',
  version: '0.0.1',
  git: 'https://github.com/didehvar/damsel.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('mongo');
  api.use('mquandalle:harmony@1.3.44');

  api.addFiles('shared/config.next.js');
  api.addFiles('shared/helpers.next.js');
  api.addFiles('shared/collection.next.js');
  api.addFiles('server/permissions.next.js', 'server');
  api.addFiles('server/publications.next.js', 'server');
});
