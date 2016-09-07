# force-ssl
[Source code of released version](https://github.com/meteor/meteor/tree/master/packages/force-ssl) | [Source code of development version](https://github.com/meteor/meteor/tree/devel/packages/force-ssl)
***

This package, part of [Webapp](https://www.meteor.com/webapp), causes
Meteor to redirect insecure connections (HTTP) to a secure URL
(HTTPS). Use this package to ensure that communication to the server
is always encrypted to protect users from active spoofing attacks.

To simplify development, unencrypted connections from `localhost` are
always accepted over HTTP.

Application bundles (`meteor bundle`) do not include an HTTPS server or
certificate. A proxy server that terminates SSL in front of a Meteor
bundle must set the standard `x-forwarded-proto` header for the
`force-ssl` package to work.

Applications deployed to `meteor.com` subdomains with
`meteor deploy` are automatically served via HTTPS using Meteor's
certificate.

Applications running with `FORCE_SSL_DISABLE` from the server environment 
will suppress this functionality