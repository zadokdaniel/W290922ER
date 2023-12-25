create a new project use nodemon and create scripts

1. log each request
2. parse url so path and query will be separated
3. create the following endpoints with the response described (fs and pipe)

GET / or GET /index.html 	=> 200 a page with the header HOME
GET /about			        => 200 page with the header ABOUT
GET /contactUs			    => 200 page with the header CONTACT US
GET /STORE			        => 200 page with the header STORE
* *				            => 404 page with the header PAGE NOT FOUND

4. navbar: create links in each of the pages so from each page I can get to any other page

5. add the following endpoint
GET /static/styles.css      => a css changing body to red

5.1. include this css in every page

6. crate a module named messages with the following function 
	- addMessage(message)          will add a string message into an array with its timestamp
	- readMessages() 	    will return all the messages
	- clearMessages()	    will delete the array content

6.1. create the following endpoints 
POST 	/api/message?message=the user message		    will add a message (addMessage())
GET 	/api/messages		            				will return all pending messages (readMessages())
DELETE 	/api/messages					            	will empty the messages (clearMessages())
