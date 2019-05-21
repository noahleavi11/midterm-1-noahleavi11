# CS 260  Midterm 1

For this midterm you will have 3 hours to complete the following prompt.  

You will be creating a simplified Goodreads application using Vue.  If you have never used Goodreads before it is a place for users to record and review books they have read and would like to read.  You will be using the OpenLibrary API - which provides lots of information about different books and allows you to search keywords by different fields.  

You will be required to:
- create a webpage using Vue that allows the user to search for a specific book or books
- allow the user to type a word/phrase/title of book into a search field and on submit, display all the results
- for each book found, display the title, author, publish date, cover image, and an option to "favorite" that book
- In a separate location on the page (or on another page) display all the "favorited" books.  If the user unfavorites a book in the list, remove it from the list


Some API calls that will helpful:
- 'http://openlibrary.org/search.json?q=the+lord+of+the+rings' will search in all fields for any books matching "the"+"lord"+"of"+"the"+"rings".  

- once you have the ISBN number of a book you use can use this call to get the "thumbnail_url" to display the image with the ISBN number:9780980200447
'https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=details&format=json'

See https://openlibrary.org/dev/docs/api/search or https://openlibrary.org/dev/docs/api/books for more information about these endpoints.




Behavior | Estimated Point Value
--- | ---
Create a web page made with Vue | 20
Uses the specified API to retrieve the correct data on search | 10
Displays the required information about the book in a visually asthethic manner | 30
Section to display all the favorited books - updates correctly and is visually appealing | 20
There is some button that allows the user to favorite and unfavorite books in the searched list and in the favorite list | 10
Your page looks really good. This is subjective, so wow us. | 10
Using any website besides the API documentation | -30
