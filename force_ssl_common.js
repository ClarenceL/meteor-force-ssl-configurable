if (process.env.FORCE_SSL_DISABLE == null){
  _.extend(Meteor.absoluteUrl.defaultOptions, {secure: true});
}
