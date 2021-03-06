Package.describe({
  name: "nova:email",
  summary: "Telescope email package",
  version: "0.26.5-nova",
  git: "https://github.com/TelescopeJS/telescope-email.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'nova:core@0.26.5-nova'
  ]);

  api.mainModule("lib/server.js", "server");
  api.mainModule("lib/client.js", "client");

});
