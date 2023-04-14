# Enterprise Web Development - Assignment 1.

__Name:__ Alka Nixon

## Overview.

+ Upcoming movies page.
+ Top rated movies page.
+ Popular movies page.
+ Page for movies that are now playing in theatres.
+ Main actors list in movie details page.
+ List view for full cast and crew page (with new parameterized route).
+ Fantasy movie page where users can add and view their own movies.
+ Login and register page.
+ Supabase authentication - private and public routes.
+ Actor bio page, with personal details, social media profile links and profile images.
+ Pagination support for different category movies (All movies, Top rated, popular, now playing and upcoming).
+ Movie sorting functionality based on 8 parameters.
+ Sorting functionality in favourite movies page.
+ Extensive hyperlinking in actors and movies page.
+ Navigation on clicking logo.
+ New toolbar for different movie categories.
+ Must watch icon for upcoming movies.
+ Favourites icon in Movie details page if movie selected as favourite.
+ Updated title and logo to match the application scenario.
+ Responsive scroll bar for the image list in the movie and actor details page.



## Feature Design.

#### The Upcoming Movies page.

> Lists movies from the Upcoming movies endpoint of TMDB when clicked on "Upcoming" button from the toolbar.

![][image1]

#### The Top Rated Movies page.

> Lists movies from the Top Rated movies endpoint of TMDB when clicked on "Top Rated" button from the toolbar.

![][image2]

#### The Popular Movies page.

> Lists movies from the Popular movies endpoint of TMDB when clicked on "Popular" button from the toolbar.

![][image3]

#### The Now Playing Movies page.

> Lists movies from the Upcoming movies endpoint of TMDB when clicked on "Now Playing" button from the toolbar.

![][image4]

#### Actors list in movie details page.

> Filter the first 10 actors of a movie from credits endpoint of TMDB and list them in the corresponding movie details page.

![][image5]

#### Full cast and crew page.

> List all cast and crew from credits endpoint of TMDB when clicked on "See more" button from above page.

> cast
![][image6]

> crew
![][image7]

#### Fantasy movie page.

> When clicked on avatar from the toolbar, user is presented with a new page, which lists all the created fantasy movies, if exists. Otherwise, a text is shown as in the below figure.

![][image8]

> When "create movie" button is clicked, user is redirected to a form where he/she can add movie title and overview to create a new fantasy movie.

![][image9]

> The created movies are listed as below

![][image10]

#### Login page.

> User can login with email and password, both input fields are required, otherwise errors are displayed.

![][image11]

#### Register page.

> User can register with email and password, all input fields are required, otherwise errors are displayed. Confirm password must match with the password input, else error message is displayed.

![][image12]

#### Supabase authentication.

> Supabase is used for authentication of user. If logged in, user can access all routes. If not logged in, user can view Home page(discover movies page) and favourite movies page where user is allowed to add movies to favourites and can use the filter and sort fucntionality. Home page and favourites page are public routes and all others are private routes which are protected and cannot be accessed without logging in.

![][image13]

> If logged in, "login" and "register" buttons are not displayed. Instead "logout" button is displayed. 

> If not logged in, "login" and "register" buttons are displayed. Both "logout" button and toolbar for movie categories are not displayed. 

![][image15]

#### Actor bio page.

> Actor's personal details are fetched from person endpoint of TMDB, profiles are fetched from images endpoint and social media profile ids are from external ids endpoint.

![][image14]
![][image16]

#### Pagination.

> User can view next and previous pages by clicking arrows in movies home page and also in movie category pages. Button will be disabled when the user reaches the last page and also when clicks "previous" from page 1.

#### Movie sorting.

> Sorting can be done based on 8 parameters as shown below.

![][image18]

![][image19]

#### Movie sorting in favourite movies page.

> Sorting can also be done based on 8 parameters in favourite movies page as above.

#### Hyperlinking

> User can navigate to actor details page from movie details page and also from full cast and crew page by clicking on the actor's card component. Also user can go to movie details page from full cast and crew page by clicking on the movie header. 

#### Logo navigation

> User can navigate to home page by clicking logo. 

#### Movie category toolbar.

> New toolbar created for different categories of movie.

#### Must watch icon

> Must watch icon added for different categories of movie.

![][image22]

#### Favourites icon in movie details page.

> Favourites icon in movie details page if movie selected as favourite.

![][image23]

#### Title and logo of application

> Title(TMDB Client) and logo of application changed to match the scenario. The logo is shown below:

![][image24]

#### Image list scrollbar

> In movie and actor details page, imagelist is displayed with responsive scrollbar.

![][image25]


## Storybook.

![][image26]

## Authentication.

+ /discover/movie - List of all movies from the Discover endpoint.
+ /movie/upcoming (Protected) - List of all upcoming movies from the upcoming endpoint.
+ /movie/popular (Protected) - List of all popular movies.
+ /movie/top_rated (Protected) - List of all top rated movies.
+ /movie/now_playing (Protected) - List of all movies now playing in the theatres.
+ /genre/movie/list - List of all genres.
+ /movie/{movie_id}/images (Protected) - List of all images on a specific movie.
+ /movies/{movie_id} (Protected) - Detailed information on a specific movie.
+ /movie/{movie_id}/reviews (Protected) - List of all reviews on a specific movie.
+ /movie/{movie_id}/credits (Protected) - List of all cast and crew for a specific movie. 
+ /person/{person_id} (Protected) - A specific actor's bio.
+ /person/{person_id}/images (Protected) - A specific actor's images.
+ /person/{person_id}/external_ids (Protected) - A specific actor's external IDs (social media profile IDs).


#### Protected features

Unauthenticated users can access the home page and favourites page. Anyone can add movies to favourites and delete them. Also, filter and sorting functionality is accessibile for all. But all other functionalities like viewing actor or movie details, adding fantasy movies etc. are available only for authenticated users.

#### Supabase

![][image13]

Project url and project key is provided as env variables.


## Additional Information.

Form validation is provided, where proper error messages are shown to user. Snackbar used to show success messages.

[image1]: ./images/image1.png
[image2]: ./images/image2.png
[image3]: ./images/image3.png
[image4]: ./images/image4.png
[image5]: ./images/image5.png
[image6]: ./images/image6.png
[image7]: ./images/image7.png
[image8]: ./images/image8.png
[image9]: ./images/image9.png
[image10]: ./images/image10.png
[image11]: ./images/image11.png
[image12]: ./images/image12.png
[image13]: ./images/image13.png
[image14]: ./images/image14.png
[image15]: ./images/image15.png
[image16]: ./images/image16.png
[image17]: ./images/image17.png
[image18]: ./images/image18.png
[image19]: ./images/image19.png
[image20]: ./images/image20.png
[image21]: ./images/image21.png
[image22]: ./images/image22.png
[image23]: ./images/image23.png
[image24]: ./images/image24.png
[image25]: ./images/image25.png
