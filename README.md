# egui

This sample application demonstrates using AngularJS/Express/Node.js to access data from a z/OS system (CICS/VSAM) using REST APIs. The goal is show how easy it is to incorporate z/OS application data into an existing Node.js application using RESTful APIs and that z/OS application data can be accessed and used just like REST/JSON applications on any other platform.

The backend CICS application (the Catalog Manager sample application which is available on all supported versions of CICS) has been REST API enabled using z/OS Connect Enterprise Edition V3.0.

To recreate this sample on your pc:

- install git, node.js/npm, and bower:
  - https://git-scm.com/download
  - https://nodejs.org/en/
  - https://bower.io/#install-bower

- clone the git repository
  -->  "git clone https://github.com/bill-keller/egui-ivp.git"

- run the npm and bower installs:
  - cd to the egui directory
    - then run --> "npm install"
  - cd to the egui/public dir
    - then run --> "bower install"

- start the express server:
  - cd to the main egui directory
    - then run: "npm start"
  - access application at: http://localhost:3000/#!/items
