# EXPLORING CALGARY
Exploring Calgary. This website suggests places and food to explore in and around Calgary. I have shared my honest personal expereince to make it a authentic page to look forward to. several other people has also shared their own stories and experiences.

i have created 2 static pages which is HOME and GALLERY. Home page contains basic headers and some info about the website.
Gallery contains the images and links to some famous places to explore around the city..

 I have used HTML5  to provides the structure of the page and CSS for the visual layout for all the pages.
For Frontend used javaScript to implement the functionality for CRUD operations on Project on Testimonials page- where the User can share their stories.
Used MOngoDB in backend for Database and all the operations on this page get stored in the database.
NodeJS and EXPRESS JS has served the backend
created Resting API's for this:

For populating the Comments stored in the database from the users
GET /all itmes:
/testimonials-type:	string-	---This API is for getting the stories and testimonials which others have shared stored in the database.

Get One comment
  GET /api/items/${id}-: /testimonials/:id- type:string	---Required. Id of item to fetch
and also for POST ,PATCH and DELETE operations


Also made a Contact Us page to send the messages and concerns.
As this page just containes post operations so createda API for POST request to store the data and information in the database.
