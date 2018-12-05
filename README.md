# egui-ivp

This sample application demonstrates a Node.js application which makes API calls to z/OS Connect REST APIs which invoke a CICS/COBOL application. The backend CICS application used is the Catalog Manager example application which is available on all supported versions of CICS.

The z/OS Connect REST APIs used can be created by following the z/OS Connect Quick Start Scenario steps in the z/OS Connect Knowledge Center to create a pre-configured z/OS Connect server using pre-generated artifacts for services and APIs designed to work with the CICS Catalog Manager application. see https://www.ibm.com/support/knowledgecenter/SS4SVW_3.0.0/scenarios/cics_connection.html

The above link has instructions for installing the sample CICS application as well as the steps for creating and customizing the z/OS Connect server instance.

To recreate the Node.js environment locally:

- install git, node.js/npm, and bower:
  - https://git-scm.com/download
  - https://nodejs.org/en/
  - https://bower.io/#install-bower

- clone the egui-ivp application git repository
  -->  "git clone https://github.com/bill-keller/egui-ivp.git"

- run the npm and bower installs:
  - cd to the egui-ivp directory
    - then run --> "npm install"
  - cd to the egui-ivp/public dir
    - then run --> "bower install"

- start the express server:
  - cd to the main egui-ivp directory
    - then run: "npm start"
  - access application at: http://localhost:3000/#!/items
