const hostingMessageGlitch =
  'Demo hosted on a free service of glitch.com and may take up to 30 seconds to wake up';
const hostingMessageHeroku =
  'Demo hosted on free tier of heroku.com and may take up to 30 seconds to wake up';
export const projectList = [
  {
    id: 'pn3',
    title: 'Multiplayer Tetris',
    imgLink: './images/projects/tetris.png',
    summary: 'A Multiplayer tetris game.',
    details: [
      'Wrote single player tetris game from scratch with custom shape detection algorithm on canvas',
      'Uses custom socket.io design on server side for authenticated players to play in multi-mode',
      'Redux state management, including for socket delivery ',
      'Write single games and match data to mongodb '
        ],
    projectLink: 'https://multiplayer-tetris.herokuapp.com/',
    githubLink: 'https://github.com/Dereje1/Multiplayer-Tetris',
    tags: ['Full Stack', 'React'],
    icons: ['socket','express', 'react', 'nodejs'],
    hosting: hostingMessageHeroku
  },
  {
    id: 'pn1',
    title: 'Relative Strength',
    imgLink: './images/projects/rstrength.png',
    summary: 'Currency relative strength and news aggregator',
    details: [
      'Price data generated with AWS EC2 instance via MT4/mql4',
      'News Data aggregated from forex factory\'s API',
      'Node server processes all data and delivers JSON to client for consumption with react',
      "Authenticated users able to enter, modify and close positions"
    ],
    projectLink: 'https://relative-strength.glitch.me/',
    githubLink: 'https://github.com/Dereje1/RelativeStrength',
    tags: ['Full Stack', 'React'],
    icons: ['mongodb','express', 'react', 'nodejs'],
    hosting: hostingMessageGlitch
  },
  {
    id: 'pn2',
    title: 'Cute or Not',
    imgLink: './images/projects/cuteornot.png',
    summary: 'A chingu collaborative app that enables uploading and voting of pets.',
    details: [
      'Uses Git / Github collaboration among 4 remote team members ',
      'Allows for multiple social media authentication services ',
      'Uses Enzyme for preliminary front end testing',
      'Stores uploaded pictures with an external service',
      'Uses Create React App'
        ],
    projectLink: 'https://cuteornotapp.herokuapp.com/',
    githubLink: 'https://github.com/chingu-voyage4/Bears-Team-23',
    tags: ['Full Stack', 'React'],
    icons: ['mongodb','express', 'react', 'nodejs'],
    hosting: hostingMessageHeroku
  },
  {
    id: 'p1',
    title: 'Pinterest Clone',
    imgLink: './images/projects/pinterest.png',
    summary: 'A basic clone of the pinterest application using the MERN stack.',
    details: [
      'authenticated users able to Pin, Save, Delete and add images',
      'Unauthenticated users able to view all images',
      'Upload pictures with links',
      'Broken image handling with React',
      'Uses react-masonry-component to handle picture layout'
    ],
    projectLink: 'https://dereje-pclone.herokuapp.com/',
    githubLink: 'https://github.com/Dereje1/Pinterest-Clone',
    tags: ['Full Stack', 'React'],
    icons: ['mongodb', 'express', 'react', 'nodejs'],
    hosting: hostingMessageHeroku
  },
  {
    id: 'p2',
    title: 'Book Trading',
    imgLink: './images/projects/booktrade.png',
    summary: 'Trade books with authenticated users of the App.',
    details: [
      'able to Update user profile and password',
      'Manage books in a personalized dashboard',
      'Unauthenticated users able to see all books in circulation',
      'uses Passport.js for Local Authentication',
      'uses Google books api to add books into personal collection'
    ],
    projectLink: 'https://dereje-book-trading.herokuapp.com/',
    githubLink: 'https://github.com/Dereje1/Book-Trading',
    tags: ['Full Stack', 'React'],
    icons: ['mongodb', 'express', 'react', 'nodejs'],
    hosting: hostingMessageHeroku
  },
  {
    id: 'p3',
    title: 'Stock Charting',
    imgLink: './images/projects/stock.png',
    summary: 'Plots relative performance charts for US listed stocks.',
    details: [
      'Able to detect Invalid Symbols',
      'view up to 10 years of data',
      'uses Socket.io to make Real time updates',
      'uses React-Highcharts to plot charts',
      'uses Quandl API to get stock price historical data'
    ],
    projectLink: 'https://dereje-stock-charts.herokuapp.com/',
    githubLink: 'https://github.com/Dereje1/Stock-Charts',
    tags: ['Full Stack', 'React'],
    icons: ['mongodb', 'express', 'react', 'nodejs'],
    hosting: hostingMessageHeroku
  },
  {
    id: 'p4',
    title: 'Night Life',
    imgLink: './images/projects/nightlife.png',
    summary: 'Coordinates places to go to on a night out',
    details: [
      'Authenticated users can toggle a venue they plan to go to',
      'approximates current location using ip address',
      "Uses YELP's fusion API to find venues",
      'Caches yelp token using memory-cache'
    ],
    projectLink: 'https://night-life-dereje.herokuapp.com/',
    githubLink: 'https://github.com/Dereje1/Night-Life',
    tags: ['Full Stack', 'React'],
    icons: ['mongodb', 'express', 'react', 'nodejs'],
    hosting: hostingMessageHeroku
  },
  {
    id: 'p5',
    title: 'Voting App',
    imgLink: './images/projects/voting.png',
    summary:
      'View, Create, Update and Delete Polls using a Node/express server',
    details: [
      'able to view and vote on all polls as an Unauthenticated user',
      'able to Share Polls on twitter',
      'uses Basic CRUD with Mongoose',
      'uses passport.js for twitter authentication',
      'Uses D3 for plotting polls',
      'uses redux for improved state management'
    ],
    projectLink: 'https://fcc-voting-app-dereje1.herokuapp.com/',
    githubLink: 'https://github.com/Dereje1/Voting-App',
    tags: ['Full Stack', 'React', 'D3'],
    icons: ['mongodb', 'express', 'react', 'nodejs'],
    hosting: hostingMessageHeroku
  },
  {
    id: 'p6',
    title: 'File Meta Data',
    imgLink: './images/projects/metadata.png',
    summary: 'File Uploading Microservice',
    details: [
      'After uploading file, API will respond with uploaded File Size',
      'Uses multer for file processing'
    ],
    projectLink: 'https://file-metadat.glitch.me/',
    githubLink: 'https://github.com/Dereje1/File-Metadata',
    tags: ['APIs & Microservices'],
    icons: ['nodejs', 'express'],
    hosting: hostingMessageGlitch
  },
  {
    id: 'p7',
    title: 'Image Search',
    imgLink: './images/projects/Image_Abstraction.png',
    summary: 'Image Searching Microservice',
    details: [
      'Given a query, will respond with images returned from Google Image search API',
      'able to vary pagination of the results',
      'responds with the last few Search queries as well'
    ],
    projectLink: 'https://search-images.glitch.me/',
    githubLink: 'https://github.com/Dereje1/Image-Search',
    tags: ['APIs & Microservices'],
    icons: ['nodejs', 'express', 'mongodb'],
    hosting: hostingMessageGlitch
  },
  {
    id: 'p8',
    title: 'URL Shortener',
    imgLink: './images/projects/URL_short.png',
    summary: 'URL Shortning Microservice',
    details: [
      'Enter any URL and get a JSON response with the Shortened Link',
      'If A link is already shortened, API will not shorten again',
      'stores shortened link using mongodb',
      'Parses URL for validity'
    ],
    projectLink: 'https://shorten-my-link.glitch.me/',
    githubLink: 'https://github.com/Dereje1/URL-Shortener',
    tags: ['APIs & Microservices'],
    icons: ['nodejs', 'express', 'mongodb'],
    hosting: hostingMessageGlitch
  },
  {
    id: 'p9',
    title: 'Header Parser',
    imgLink: './images/projects/headerparse.png',
    summary: 'Header Parsing Microservice',
    details: [
      'given a request, will respond with a JSON object containing the IP Address, Operating System and other info'
    ],
    projectLink: 'https://header-parsing.glitch.me/',
    githubLink: 'https://github.com/Dereje1/Header-Parser',
    tags: ['APIs & Microservices'],
    icons: ['nodejs', 'express'],
    hosting: hostingMessageGlitch
  },
  {
    id: 'p10',
    title: 'Time Stamp',
    imgLink: './images/projects/Timestamp.png',
    summary: 'Time Stamping Microservice',
    details: [
      'after validating string input server will respond with a JSON object containing the unix stamp and natural date',
      'An introduction to node and express'
    ],
    projectLink: 'https://timestamp-micro-serv.glitch.me/',
    githubLink: 'https://github.com/Dereje1/Time-Stamp',
    tags: ['APIs & Microservices'],
    icons: ['nodejs', 'express'],
    hosting: hostingMessageGlitch
  },
  {
    id: 'p11',
    title: 'Global Map',
    imgLink: './images/projects/globe.png',
    summary: 'Meteorite Strike areas plotted on a World Map',
    details: [
      'strike areas plotted proportional to strike size',
      'Zoomable map',
      "Uses geoJSON data with D3's geoMercator projection and geo path to build map"
    ],
    projectLink: 'https://dereje1.github.io/Globe-Data/',
    githubLink: 'https://github.com/Dereje1/Globe-Data',
    tags: ['D3', 'Front End'],
    icons: ['javascript', 'd3js', 'svg']
  },
  {
    id: 'p12',
    title: 'Force Graph',
    imgLink: './images/projects/Force.png',
    summary: 'Simulation of national contiguity with a force directed graph',
    details: [
      'Able to drag flags and let the simulation take over',
      "Uses D3's forceSimulation",
      'Uses image sprites for flags'
    ],
    projectLink: 'https://dereje1.github.io/Force-Directed/',
    githubLink: 'https://github.com/Dereje1/Force-Directed',
    tags: ['D3', 'Front End'],
    icons: ['javascript', 'd3js', 'svg']
  },
  {
    id: 'p13',
    title: 'Heat Map',
    imgLink: './images/projects/heatmap.png',
    summary: 'historical land-surface temperature in a heat map',
    details: [
      "Uses a variation of D3's bar chart",
      'Uses temperature range to create color scales'
    ],
    projectLink: 'https://dereje1.github.io/Heat-Map/',
    githubLink: 'https://github.com/Dereje1/Heat-Map',
    tags: ['D3', 'Front End'],
    icons: ['javascript', 'd3js', 'svg']
  },
  {
    id: 'p14',
    title: 'Scatter Plot',
    imgLink: './images/projects/scatter.png',
    summary: 'Doping Stats of Professional Bicycle Racers in a scatter plot',
    details: [
      "labels each athlete's allegation independently",
      "Uses a variation of D3's scatter chart"
    ],
    projectLink: 'https://dereje1.github.io/Scatter-Plot/',
    githubLink: 'https://github.com/Dereje1/Scatter-Plot',
    tags: ['D3', 'Front End'],
    icons: ['javascript', 'd3js', 'svg']
  },
  {
    id: 'p15',
    title: 'Bar Chart',
    imgLink: './images/projects/sample.png',
    summary: 'A bar chart Display of Historical US GDP',
    details: [
      'An intro to basic data visualization using D3.js V4',
      'Adds tooltip to individual bars',
      "Uses D3's built-in Json capabilities to read data",
      'Uses temporal scale for x-axis'
    ],
    projectLink: 'https://dereje1.github.io/Bar-Chart/',
    githubLink: 'https://github.com/Dereje1/Bar-Chart',
    tags: ['D3', 'Front End'],
    icons: ['javascript', 'd3js', 'svg']
  },
  {
    id: 'p16',
    title: 'Dungeon Crawler',
    imgLink: './images/projects/rogue.png',
    summary: 'A Dungeon Crawler Game with four levels',
    details: [
      'no two dungeons will have the same floor plan',
      'flood fill algorithm removes disjointed caves',
      'Complex react state management',
      'Uses Celluar Automata to generate a floor plan'
    ],
    projectLink: 'https://dereje1.github.io/Roguelike/',
    githubLink: 'https://github.com/Dereje1/Roguelike',
    tags: ['React', 'Front End'],
    icons: ['javascript', 'react', 'bootstrap', 'sass']
  },
  {
    id: 'p17',
    title: 'Game Of Life',
    imgLink: './images/projects/gol.png',
    summary: 'A react version of John conways game of life',
    details: [
      'Able to change grid size and speed of generation',
      'Will wrap new live cells created at the grid boundaries',
      'can manually add live cells',
      'play, pause and reset generations',
      'Integrated setinterval with react state management'
    ],
    projectLink: 'https://dereje1.github.io/Game-Of-Life/',
    githubLink: 'https://github.com/Dereje1/Game-Of-Life',
    tags: ['React', 'Front End'],
    icons: ['javascript', 'react', 'bootstrap', 'sass']
  },
  {
    id: 'p18',
    title: 'Recipe Book',
    imgLink: './images/projects/recipe.png',
    summary: 'A Recipe Book made with react',
    details: [
      'Create, read, update and delete recipes',
      'intermediate state management',
      "save recipes in browser's local storage",
      'Use react parent-child components concept'
    ],
    projectLink: 'https://dereje1.github.io/Recipe',
    githubLink: 'https://github.com/Dereje1/Recipe',
    tags: ['React', 'Front End'],
    icons: ['javascript', 'react', 'bootstrap', 'sass']
  },
  {
    id: 'p19',
    title: 'Leaderboard',
    imgLink: './images/projects/leaderboard.png',
    summary: 'A Leaderboard for the freeCodeCamp community',
    details: [
      'sortable by two different components of the dataset',
      'Add AJAX calls to react components',
      'Basic state management',
      'used react Component to build body of HTML table'
    ],
    projectLink: 'https://dereje1.github.io/Leaderboard/',
    githubLink: 'https://github.com/Dereje1/Leaderboard',
    tags: ['React', 'Front End'],
    icons: ['javascript', 'react', 'bootstrap', 'sass']
  },
  {
    id: 'p20',
    title: 'Markdown',
    imgLink: './images/projects/markdown.png',
    summary: 'Performs GitHub-flavored Markdown on entered text',
    details: [
      'an Introduction to react',
      'uses sass to create css file',
      'Imports and Uses Marked library'
    ],
    projectLink: 'https://dereje1.github.io/mark-down/',
    githubLink: 'https://github.com/Dereje1/mark-down',
    tags: ['React', 'Front End'],
    icons: ['javascript', 'react', 'bootstrap', 'sass']
  },
  {
    id: 'p21',
    title: 'Simon Game',
    imgLink: './images/projects/simon.png',
    summary: 'a web version of the 80s memory Game',
    details: [
      "Able to play in 'strict' mode",
      'Times out on delayed user responses',
      'Increases in difficulty as user progresses',
      'Advanced use of settimeout and setinterval',
      'Built with jQuery and SVG only'
    ],
    projectLink: 'https://dereje1.github.io/Simon-Game/',
    githubLink: 'https://github.com/Dereje1/Simon-Game',
    tags: ['jQuery', 'Front End'],
    icons: ['javascript', 'jquery', 'svg']
  },
  {
    id: 'p22',
    title: 'Tic Tac Toe',
    imgLink: './images/projects/tic.png',
    summary: 'an interactive Tic Tac Toe Game',
    details: [
      'game made to be challenging but beatable',
      "Optimizes computer's move with standard strategies",
      'Can play a series of games and scores will be kept until reset',
      'Built with jQuery and SVG only'
    ],
    projectLink: 'https://dereje1.github.io/Tic-Tac-Toe/',
    githubLink: 'https://github.com/Dereje1/Tic-Tac-Toe',
    tags: ['jQuery', 'Front End'],
    icons: ['javascript', 'jquery', 'svg']
  },
  {
    id: 'p23',
    title: 'Pomodoro Clock',
    imgLink: './images/projects/pomodoro.png',
    summary: 'a web based timer that oscillates between two interval cycles',
    details: [
      'Custom circular progress bar display',
      'Audible at the end of each cycle',
      'Built with jQuery and HTML5 canvas only',
      'Basic Usage of setintervals with callbacks'
    ],
    projectLink: 'https://dereje1.github.io/Pomodoro/',
    githubLink: 'https://github.com/Dereje1/Pomodoro',
    tags: ['jQuery', 'Front End'],
    icons: ['javascript', 'jquery', 'canvas']
  },
  {
    id: 'p24',
    title: 'Calculator',
    imgLink: './images/projects/calc.png',
    summary: 'a standard web-based calculator',
    details: [
      'Has secondary screen for numbers in memory',
      'Does basic mathematical operations',
      'Validates input to avoid screen overflow',
      'Uses an HTML table with css formatting for display'
    ],
    projectLink: 'https://dereje1.github.io/Calculator/',
    githubLink: 'https://github.com/Dereje1/Calculator',
    tags: ['jQuery', 'Front End'],
    icons: ['javascript', 'jquery', 'html5', 'css3']
  },
  {
    id: 'p25',
    title: 'Twitch.tV',
    imgLink: './images/projects/twitch.png',
    summary: 'Finds and displays the status of Twitch users',
    details: [
      'Able to Filter by users that are online or offline',
      "Dynamic link of results to the respective user's Twitch.tv channel",
      'Makes Multiple, nested AJAX requests',
      'uses an HTML table with css formatting to Display results'
    ],
    projectLink: 'https://dereje1.github.io/Twitch-TV/',
    githubLink: 'https://github.com/Dereje1/Twitch-TV',
    tags: ['jQuery', 'Front End'],
    icons: ['javascript', 'jquery', 'html5', 'css3']
  },
  {
    id: 'p26',
    title: 'Wikipedia Viewer',
    imgLink: './images/projects/wikiviewer.png',
    summary:
      'an online interface for making Wikipedia searches and displaying the results',
    details: [
      'Able to pull a random Wikipedia article',
      'Results linked to respective Wikipedia pages',
      "Makes multiple AJAX requests to Wikipedia's API",
      'Uses jQuery to dynamically create HTML elements'
    ],
    projectLink: 'https://dereje1.github.io/Wikipedia/',
    githubLink: 'https://github.com/Dereje1/Wikipedia',
    tags: ['jQuery', 'Front End'],
    icons: ['javascript', 'jquery', 'html5', 'css3']
  },
  {
    id: 'p27',
    title: 'Weather',
    imgLink: './images/projects/weather.png',
    summary: "Retrieves and displays the current weather for a user's location",
    details: [
      'Able to convert between Celsius/Fahrenheit',
      'Uses geolocation API',
      "Uses google's reverse geocode API to get city information",
      'Makes basic AJAX requests to A weather API',
      'Imports script to animate weather icons'
    ],
    projectLink: 'https://dereje1.github.io/The-Weather/',
    githubLink: 'https://github.com/Dereje1/The-Weather',
    tags: ['jQuery', 'Front End'],
    icons: ['javascript', 'jquery', 'html5', 'bootstrap']
  },
  {
    id: 'p28',
    title: 'Random Quotes',
    imgLink: './images/projects/quotes.png',
    summary:
      'Displays a simple quote generator that retrieves quotes from an online API',
    details: [
      'Able to tweet retrieved quotes',
      'uses jQuery to Make basic AJAX requests',
      'uses css bootstarp to Format quote display'
    ],
    projectLink: 'https://dereje1.github.io/Quotes',
    githubLink: 'https://github.com/Dereje1/Quotes',
    tags: ['jQuery', 'Front End'],
    icons: ['javascript', 'jquery', 'html5', 'bootstrap']
  }
];

/* Sample Object
{
  id:"p1",
  title:"Project 1 Title",
  imgLink:"./images/projects/sample.png",
  summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut dolor velit. Suspendisse lacinia vel enim et ornare.",
  details:["Point 1","Point 2","Point 3"],
  projectLink:"https://dereje1.github.io/portfolio-v2/",
  githubLink:"https://github.com/Dereje1/portfolio-v2",
  tags:['Full Stack','Front End','APIs & Microservices','React','D3','jQuery']
}
*/
