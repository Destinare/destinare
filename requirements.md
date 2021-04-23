## Vision

To create a proxy-server that allows users to access a weather, events, national parks and restaurants information for a city of their choosing. This will save user's the pain and hassle of having to traverse a plethora of sites to access all the relevant data that could improve their experience in said city.

## Scope

IN
Weather API
National parks API
Restaurant API
Events API
Data munging
Get endpoint
AWS services
Client-side search
Client-side display
Chrome extension
Local storage functions

OUT
OAuth
Session Cookies

## Functional Requirements

A user can search by city for location-specific information.
A user can access the URL for the specific information for more details on the place or event.
A user can initiate a search for other cities on our site.
A user can pin the Chrome extension and search for location-specific information from an accommodations site.

## Non-Functional Requirements

Usability: Destinare is a convenient way to search for location-specific details. It is an improved user experience because you only have to search one site for a multitude of details. Our functionality is on the server-side, which creates a sleek and easy-to-use display for the end user.

Scalability: Our proxy server is designed to be very easy to add or remove APIs. We’ve approached our design with the single responsibility principle in mind. We took this approach so that as APIs change or become available we can seamlessly change them our or add additions APIs. This will help us manage performance and scale the app in a relevant way.

## Data Flow

The user is provided with an input field for them to search a specific location by city name. The city name is stored in local storage, which we get from local storage to display in various places in the app. We use the city name for interpolation in two places: the header displaying the city name and in the URLs for the API calls. With the API call, we map through the array of data and format it to return the desired information. That information is displayed on the client side.
