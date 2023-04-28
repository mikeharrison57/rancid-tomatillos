<img width="506" alt="RancidTomatillos-logo" src="https://user-images.githubusercontent.com/95496577/179365634-4265b8b1-c621-4340-add2-47f9ec160999.png"> 

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Abstract](#abstract)
- [Deployed Link](#deployed-link)
- [Illustrations](#illustrations)
- [Technologies Used](#technologies-used)
- [Application & Component Wireframes](#application-and-component-wireframes)
- [Context and Features](#context-and-features)
- [User Stories](#user-stories)
- [Lessons Learned](#lessons-learned)
- [Future Features](#future-features)
- [Application Set-Up](#application-set-up)
- [Contributor LinkedIns and GitHubs](#contributor-linkedin-and-github)
- [Project Specs](#project-specs)

## Abstract

- Rancid Tomatillos is an application built using the React.js framework. It takes inspiration from popular review-aggregation website _Rotten Tomatoes_ as well as many different streaming services including but not limited to _Netflix_ and _HBO Max_. The goal of this application is to allow users to look at information about 40 different films that they might be interested in watching.  

## Deployed Link

[Deployed App](https://rancid-tomatillos-1.vercel.app)

## Illustrations

### Main page view and selecting an individual movie:

![DemoScroll](https://media.giphy.com/media/CxI3EVX5gBTEczfN1i/giphy.gif)

### Playing the trailer on an individual movie page:

![DemoPlay](https://media.giphy.com/media/QUukpoTX2BvQYVQn71/giphy.gif)

## Application and Component Wireframes

### Main Page

![Main Page 
WireFrame](https://user-images.githubusercontent.com/95496577/179425820-d44e3e6e-a531-4477-b8b0-e3b62298be08.png)    

### Individual Movie Page

![Individual Movie Comp ](https://user-images.githubusercontent.com/95496577/179425858-965719a9-ed39-4782-9219-af4e693297ed.png) 

### Component Architecture

![Component Architecture](https://user-images.githubusercontent.com/95496577/179425796-10dfd523-e18a-4aeb-b2fb-2ac18e180e63.png) 

## Technology Stack

- CSS
- Cypress.io
- Fetch API
- React.js
- React Router

## User Stories

- As a user, when I visit the app, all movies should be displayed.
- As a user, I can click a movie, and see that movie’s details.
- When a movie’s details are displayed, none of the other movies will be - visible; it should just be that movie’s details (header/footer/etc can still be visible, of course!).
- When a movie’s details are displayed, the user should have a way to return to the main view of all movies.
- When the server returns a 500 error, the user will see proper error handling.
- When a user clicks on a movie and the details page is rendered, the URL updates to reflect that movie’s unique ID as well
- The user can click the browser forward & back arrows to navigate
- The user can click the play trailer button on the individual movie page to play the trailer for that respective film. 

## Context and Features

- Rancid Tomatillos is an informational film application that allows a user to peruse a list of films and information associated with said films. Upon page load the user will see various movie cards on the main page of the application. If a user clicks one of the movie cards, they will be routed to an individual film page. The individual film page displays an additional image and information associated with that film upon page load. If the user clicks the play trailer button a trailer for that specific film will begin playing. After looking at and watching the trailer for an individual film, the user can navigate back to the main page by clicking the home button in the navbar or clicking on the back button in the web browser. 

- We built this application leveraging the `React.js` framework. Our component architecture involved two class based components, one for our entire application, and the other for our individual movie pages. This made the most sense to us given that the individual film pages needed to hold more properties in state than the main page of the application needed. Some additional functional components that were children of our `App` and `IndividualMovie` components were our `Navbar`, `MovieContainer`, `MovieCard`, and `Trailer` components. `React Router` was used to create routes from our main page to the various different pages of the individual films. Using these routes in conjunction with our film API allowed us to properly update the endpoint of our URL based on what film the user selects. 

- After completing the majority of the functionality for our application, we proceeded to thoroughly test our app using `Cypress.io`. We thoroughly tested our components, user flows, app views, happy and sad paths, and error handling. We also made use of some fixtures and stubbing in order to properly test for a sample of our page data.  

## Lessons Learned

### Michael:

- This application was my first major project built using `React.js`. Although my collaborator has some experience building React applications, this was absolutely a learning experience for us both. One of our biggest goals at the beginning of the project was to be able to build our application with the fewest class components that we could. We initially only had one class component, which was our `App` component. This did work with our conditional render initially, however once we switched over to routing it made sense for us to convert our `IndividualMovie` component into a class component so that it could have its own API call, `componentDidmount()` method, and hold state. Getting the route set up for the `IndividualMovie` component was a bit challenging at first, but once we were able to get the correct film id passed between the `App` component, network request, and route everything came together for us. 

- Another challenge was adding trailer functionality. Given that the trailer data is nested at an endpoint deeper than the individual film content we decided to set up an additional API call to fetch the trailer data upon click of the play trailer button. Our `playTrailer()` method was particularly complex as it had to sift through the video data, find the first trailer, get said trailer’s key, and set said key to the `trailerKey` property in our `IndividualMovie` component’s state. This `trailerKey` property was then passed along to our `Trailer` component and interpolated into a  _YouTube_ URL. The `Trailer` component then fetches and plays the correct trailer for the film. We are both proud of the functionality we were able to implement into our application, and look forward to continuing to build high quality React apps. 

### Nathan:

- This was my second rendition of Rancid Tomatillos. I felt much more comfortable with the component structure and interaction between components.  As Michael mentioned, we tried to keep our App as lean as possible, (ie. using functional components wherever possible), but felt it was necessary to ultimately make the individual Movie component a class component so it could use its own fetch call and avoid prop drilling to get the individual movie details to display.

- We decided to try and display movie trailers as an additional CYOA and I am glad we did as it provided a really good learning opportunity to achieve the functionality we wanted.

## Future Features

Some future features we’d like to add to this application are:

- Converting our video functionality to React Router instead of a conditional render.
- Add a search/filtering functionality for movies.
- Converting class components to functional components using `Hooks`.
- Create your own Express microservice to store user ratings for movies; build FE functionality to use and display that service.
- Supplement our Cypress tests with unit tests and integration tests by using the React Testing Library.

## Application Set-Up

1. Fork repository on GitHub.

2. `Git clone` the repository to your local machine.

3. `Cd` into the directory.

4. Run `npm install` in your terminal to install project dependencies.

5. Run `npm start` in the terminal to see the application. 

6. When finished with the application, type `Control + C` to stop running the application. 

## Contributor LinkedIn’s

- [Michael Harrison: LinkedIn](https://www.linkedin.com/in/michael-harrison-b476a498/)   
- [Nathan Hodnett: LinkedIn](https://www.linkedin.com/in/nathan-h-200a4710/)    

## Contributor GitHubs’s

- [Michael Harrison: GitHub](https://github.com/mikeharrison57) 
- [Nathan Hodnett: GitHub](https://github.com/nhodnett)     

## Project Specs

- The specs for this application can be found 
[here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)   
