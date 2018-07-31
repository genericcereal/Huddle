#!/bin/bash
      # Helper script for Gradle to call npm on macOS in case it is not found
      export PATH=$PATH:/Users/jaygoggin/.nvm/versions/node/v8.9.4/lib/node_modules/npm/node_modules/npm-lifecycle/node-gyp-bin:/Users/jaygoggin/Documents/Huddle/huddleapp/node_modules/nodejs-mobile-react-native/node_modules/.bin:/Users/jaygoggin/Documents/Huddle/huddleapp/node_modules/.bin:/Users/jaygoggin/.nvm/versions/node/v8.9.4/bin:/Users/jaygoggin/.rvm/gems/ruby-2.4.1/bin:/Users/jaygoggin/.rvm/gems/ruby-2.4.1@global/bin:/Users/jaygoggin/.rvm/rubies/ruby-2.4.1/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/jaygoggin/.rvm/bin
      npm $@
    