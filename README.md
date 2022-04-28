# music-be-real-node



## Starting the Application
Go to the root level directory in your terminal and type `node server.js`. 
The terminal should print "now listening on port 8000" and be waiting for input.

The base link will be 'http://localhost:8000'. Add the following routes to accomplish desired tasks.


### Relevant User Routes
POST: /api/users -> create a user (add object in body). 
GET: /api/users -> Find All Users. 
GET: /api/users/:USERID -> User By ID. 
PUT: /api/users/:USERID -> Update User (add object in body). 
DELETE: /api/users/:USERID -> Delete User. 
POST: /api/userslogin -> Login User (give username and password in body). 



### Relevant Post Routes
POST: /api/posts -> Create a post (add object in body). 
GET: /api/posts -> Find All Posts. 
GET: /api/posts/:POSTID -> Post by ID. 
PUT: /api/posts/:POSTID -> Update a Post (add desired updates in body). 
DELETE: /api/posts/:POSTID -> Delete a Post. 
GET: /api/postsLastFive -> Returns last 5 posts. 
