import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
      // Add Github configuration entry
      ServiceConfiguration.configurations.remove({
          service: "github"
      });
      ServiceConfiguration.configurations.update(
        { service: "github" },
        { $set: {
            clientId: "5d79eecec7e8f27e3a0f",
            secret: "cec52e059fe8f324f9e0db18a2ffb0c3eb2a42d2"
          }
        },
        { upsert: true }
      );
});
