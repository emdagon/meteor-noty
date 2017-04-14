Package.describe({
  name: 'emdagon:noty',
  summary: 'Realy cool notifications. Noty v3 (http://ned.im/noty)',
  version: '3.0.1',
  git: 'https://github.com/emdagon/meteor-noty.git'
});

Package.onUse(function(api) {
  api.addFiles([
    'noty/lib/noty.min.js',
    'noty/lib/noty.css'
  ], 'client');
});
