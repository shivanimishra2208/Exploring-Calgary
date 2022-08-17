# EXPLORING CALGARY
#DESCRIPTION:  This website suggests places and food to explore in and around Calgary. I have shared my honest personal expereince to make it a authentic page to look forward to. several other people has also shared their own stories and experiences.

DETAILS:
I have created 2 static pages which is HOME and GALLERY. Home page contains basic headers and some info about the website.
Gallery contains the images and links to some famous places to explore around the city.
USED HTML and CSS for the frontend and for image used relative path to showcase the image in the page.

 I have used HTML5  to provides the structure of the page and CSS for the visual layout for all the pages.
For Frontend used javaScript to implement the functionality for CRUD operations on Project on Testimonials page- where the User can share their stories.
Used MOngoDB in backend for Database and all the operations on this page get stored in the database.
NodeJS and EXPRESS JS has served the backend. Initiated NPM to publish, discover, install, and develop node programs.
Installed Nodemon for restarting the node application when file changes in the directory are detected.

Created Resting API's for this:-

For populating the Comments stored in the database from the users
GET /all itmes:
/testimonials-type:	string-	---This API is for getting the stories and testimonials which others have shared stored in the database.

Get One comment
  GET /api/items/${id}-: /testimonials/:id- type:string	---Required. Id of item to fetch
and also for POST ,PATCH and DELETE operations


Also made a Contact Us page to send the messages and concerns.
As this page just containes post operations so createda API for POST request to store the data and information in the database.

Created a structure for login page and connected it to backend.

LOGIN AND REGISTER:

I implemented login and sign up operations in Login page of the website. Created a API in server. Made a controller for User Login.
Used BycryptJS to encrypt the credentials of the user in the Database. 
