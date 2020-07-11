# Barrier-free Maps

This is the source code for a four-part series I wrote on creating a Vue.js application that also uses Vue-Router, Vuetify and Vuex.

This web application aims to offer a service of collective participation (according to the prince of the rainbow of computer ethics) that allows you to report on the map offered by Open Street everything related to architectural barriers, various obstacles that make a passage inaccessible, or to report the lack of adequate reporting, the lack of a reference point (especially for people with disabilities).

At the moment, the application has some bugs with respect to the responsive representation of content, and works correctly in "desktop mode". In addition, the content deletion function must be corrected (in patricular, only the possibility for the user to delete his markers works, but the deletion does not work with respect to the "global directory" that represents on the "general map" the markers of all users).

I very willingly accept criticism and possible participation in the improvement of the source code.

I hope it will be to your liking, and above all that it will remain open source.

## Live Demo

I have a live demo of the application. You can [view it here](https://barrier-free-maps.firebaseapp.com/).

## Technology Used

* Vue.js
* Vue CLI
* Vuex
* Vuetify
* Firebase
* Express (Node.js)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
