# Mean Stack Trial

This repo follows the MEAN stack introduction from MongoDB, available here: https://www.mongodb.com/resources/languages/mean-stack-tutorial

Previously my expericence with Angular was using a Django API and SQL server on the backend. (If that has a cute acronym I don't know it. SQL, Django, Angular, Python... Let's call it PADS.)

Following this tutorial was a refresher on Angular concepts, and seeing how Angular had changed since I last used it a few years ago.

## Next Steps

Following the tutorial, I want to solidify and expand what I've learned by making some changes to the tutorial application.

* [x] Fix the form so that it says "Edit" instead of "Add" when appropriate
* [x] Convert templates from inline to extracted files
* [x] Same with styles
* [ ] Convert all alert popups to in-app messages
* [ ] Learn more about reactive forms and add more fields to tinker with other functionality

## Reasoning for Extracting Templates/Styles

This turned out to be very easy to do, just changing `template` and `styles` to `templateUrl` and `styleUrls` respectively, to point to their files. These were fairly simple templates and very simple styles in the first place, so why bother?

Mainly, having them extracted lets my IDE use the appropriate helper plugins for things like autocompletion and prettifying. I also just think it's cleaner than using multiline strings in the component source code, even if these were fairly short.