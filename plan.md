## Component Tree

App (Parent)
│
├── Header
│ ├── Title (h1)
│
├── CitySearch
│ ├── InputField (input for city)
│ └── SearchButton (button)
│
└── WeatherDisplay
├── Temperature
├── WeatherCondition
└── Humidity
└── Error handling- if city is not found
├── Footer

## Plan

1. Create separate component files with .tsx extentsion eg for header, footer, main including city search and weather display. ✅
2. Create title in header ✅
3. Create the input field and search button in city search ✅
4. In weather display, define how the data is going to be recieved from the api (object- use interface).✅
5. Handle logic in app.tsx file, trigger event when search button is clicked to fetch relevant data for specific city. ✅
6. Style each component so it looks okay ✅
