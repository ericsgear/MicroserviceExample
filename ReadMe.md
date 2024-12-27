# Microservices Example
## By Eric Ingamells
### For Eric's Gear
Dec 2024

This is an example of a basic microservices in NodeJS.

There is a main API that calls 3 other APIs. The main API run on port 8080 and calls the other APIs through their ports of 3001, 3002, and 3003. Each sub-API also calls one other sub-API. I could have just as easily had each of the sub-APIs call both of the other APIs, I just didn't feel the need to do that, in an effort to save some time.

Each API runs on it's own instance of Node. The problem with that is when published to GCP, running all 4 APIs goes beyond the hard memoery limit. Running three of the 4 APIs works just fine, but then you get HTTP request failures for the API that isn't running.

I don't know if running it as JavaScript, rather than TypeScript, would save memory, but it's not something I want to spend time working on right now.

I could probably get this going with Docker containers, but I'm not interested in spending more time getting this working. It was supposed to be a working concept/test for another project, but with the memory issues, I'm going to change plans for that project. Once I get it up and running, I may come back to this project to try something new, then refactor the other project if the "something new" works.

If you look at the ***app.yml*** file, you'll see the line:
>instance_class: F2

This was an attempt to increase the server memory. I could have tried ***F3*** and ***F4***, but again, chose not to due to not wanting to spend any more time on this project than necessary. I mean, if even these tiny APIs take up this much memory, the much larger and complicated APIs I'm going to be writing will definitely be too much for a single instance.

If you want to try running this project, feel free, but with the current setup, you'll need to remove ***start3*** from the ***start*** script in the ***scripts*** section of the ***package.json*** file.

I'm tempted to try running this on AWS, but again, that's more time I don't really want to spend.