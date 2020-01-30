# CpfCreditInfo
Challenge for a job application

The project revolves around making available data from three different databases with varying levels of required performance and security.
To get started I sketched up a quick mockup of how the problem could be tackled. You can check that out here: [architecture](https://i.imgur.com/FdADIhj.png)

#### **Base 1**
Requires the highest level of security and has the lowest performance required, to handle that we have an authentication service using Spring Security and JWT that fowards our query onto the core API. The request passes through a AWS IAM module wich will make sure that the given user has all the right permissions for that query.

#### **Base 2**
Is similar but demands some extra performance, for that matter a REDIS cache was added to fetch reppeated query results faster. Security layers were also reduced as the information available is not as sensitive.

#### **Base 3**
Requires the fastest access and has no sensitive data available, thus it's just a simple API wich queries a REDIS cache for reppeated data or the mysql database for new data.

Data in the caches is refreshed after a set period of time. In this case: 12 hours.

## CoreBaseC application
To test the core API wich interacts with Base 3 you will need:
* Running mysql server  on localhost
* Running redis server
* Start node server.js on /CoreBaseC/

I added an insomnia JSON export so you can test the endpoints more easily.
You can run the test suit on /CoreBaseC/ with yarn test command.
