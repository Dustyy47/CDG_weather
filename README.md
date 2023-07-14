<h1>:sun_behind_rain_cloud: CDG Academy Weather application</h1>
<p>The final project is written in React.js, during the practice at Crimea Digital</p>
<p>Live Demo: https://dustyy47.github.io/CDG_weather/</p>
<h2>General Information</h2>
1. As a user, you have the opportunity to see the weather and the name of your location according to your current coordinates by clicking on the geolocation button </br>
2.As a user, you have the opportunity to add a city and see the weather there </br>
3.As a user, you have the ability to switch between saved cities, search for them and delete them. </br>
4.As a user, you have a settings page where you can additionally add options to the weather display, such as sunset time, humidity, temperature, which is felt. </br>
5.As a user, after reloading the page, you can see the list of saved cities and saved data from the settings page. </br>

<h2>How To Use</h2>
First make sure that you have Node installed.js and npm. </br>
Clone the repository using the git </br>

   ```git
   https://github.com/Dustyy47/CDG_weather.git
   ```
Navigate to the project folder using the cd your-repository command </br>
Install the dependencies using the npm install command </br>

   ```javascript
   npm install
   ```
Create .env file in the root folder and set there your openweather API key

   ```javascript
   REACT_APP_WEATHER_API_KEY=YOUR_API_KEY
   ```

Launch the application using the npm start command </br>
   ```javascript
   npm start
   ```
Open the browser and go to http://localhost:3000 to see the app in action. </br>

<h2>API used</h2>
used weather and geo api`s from https://openweathermap.org/
