const userName = "Aman Burnwal"
const data = [

    { name: 'Home', icon: '🏠' },
    { name: 'Subscriptions', icon: '🔔' },
    { name: 'You', icon: '👤' },
    { name: 'Your channel', icon: '📺' },
    { name: 'History', icon: '🕒' },
    { name: 'Playlists', icon: '🎵' },
    { name: 'Your videos', icon: '📹' },
    { name: 'Watch Later', icon: '⏰' },
    { name: 'Liked videos', icon: '👍' },
    { name: 'PocketTube', icon: '💼' },
    { name: 'Show more', icon: '➕' },
    { name: 'Your clips', icon: '✂️' },
    // { name: 'Subscriptions', icon: '🔔' },
    { name: '6 Pack Programmer', icon: '💻' },
    { name: 'Aryan Mittal', icon: '👨‍💻' },
    { name: 'Ayushi Sharma', icon: '👩‍💻' },
    { name: 'Becodemy', icon: '📚' },
    { name: 'Bedimcode', icon: '💡' },
    { name: 'Bouncing Knowledge', icon: '🧠' },
    { name: 'Branch Education', icon: '📖' },
    { name: 'Explore', icon: '🔍' },
    { name: 'Trending', icon: '🔥' },
    { name: 'Shopping', icon: '🛍️' },
    { name: 'Music', icon: '🎵' },
    { name: 'Films', icon: '🎬' },
    { name: 'Live', icon: '🔴' },
    { name: 'Gaming', icon: '🎮' },
    { name: 'News', icon: '📰' },
    { name: 'Sport', icon: '⚽' },
    { name: 'Courses', icon: '🎓' },
    { name: 'Fashion & beauty', icon: '💄' },
    { name: 'Podcasts', icon: '🎙️' },
    { name: 'More from YouTube', icon: '➕' },
    { name: 'YouTube Premium', icon: '💎' },
    { name: 'YouTube Studio', icon: '🎥' },
    { name: 'YouTube Music', icon: '🎵' },
    { name: 'YouTube Kids', icon: '🧒' },
    { name: 'Settings', icon: '⚙️' },
    { name: 'Report history', icon: '📊' },
    { name: 'Help', icon: '❓' },
    { name: 'Send feedback', icon: '📧' }
]

const buttonList = [
    "All",
    "Music",
    "New to you",
    "Programming",
    "Javascript",
    "News",
    "Live",
    "Game Shows",
    "Love songs",
    "Motivation", 
    "Movie",
    "Punjabi Song"
]
const API_KEY = 'AIzaSyBz_z1OqhIQ5iKWFYQUlxoVuy-VI-d-09s';

const Replies = [
    {
        id: "first",
        comment: "This is the first comment.",
        reply: [
            {
                id: "second",
                comment: "This is a reply to the first comment.",
                reply: []
            },
            {
                id: "third",
                comment: "Another reply to the first comment.",
                reply: [
                    {
                        id: "second",
                        comment: "A nested reply under the third reply.",
                        reply: []
                    },
                    {
                        id: "third",
                        comment: "Another nested reply under the third reply.",
                        reply: []
                    },
                    {
                        id: "four",
                        comment: "Yet another nested reply under the third reply.",
                        reply: []
                    }
                ]
            },
            {
                id: "four",
                comment: "One more reply to the first comment.",
                reply: []
            }
        ]
    },
    {
        id: "second",
        comment: "This is the second comment.",
        reply: []
    },
    {
        id: "third",
        comment: "The third comment.",
        reply: [
            {
                id: "second",
                comment: "A reply to the third comment.",
                reply: []
            },
            {
                id: "third",
                comment: "Another reply to the third comment.",
                reply: []
            },
            {
                id: "four",
                comment: "Yet another reply to the third comment.",
                reply: []
            }
        ]
    },
    {
        id: "four",
        comment: "This is the fourth comment.",
        reply: []
    }
];
const RandomUserNames = [
    "Kalani Holmes", "King Shields", "Analia Compton", "Abner Friedman", "Aspyn Carroll", "Oscar Sierra", "Marceline Rojas", "Colin Watson", "Hailey Booth", "Chaim Rose",
    "Magnolia Escobar", "Zachariah Houston", "Lylah Huffman", "Chris Rojas", "Adaline Watkins", "Nash Maldonado", "Elaina Graham", "Giovanni Richards", "Trinity Valentine",
    "Demetrius Ramirez", "Grace Cisneros", "Alden Orr", "Alaiya Vaughan", "Castiel Church", "Ayleen Booker", "Dominik Montes", "Roselyn Curry", "Briggs Clayton", "Saige Savage",
    "Keaton Brandt", "Loretta Harrington", "Omari Stokes", "Miranda Shepard", "Damari House", "Sariah Shannon", "Eliel Glenn", "Blaire Matthews", "Preston Frederick",
    "Sariyah Rosas", "Remi Mills", "June Peck", "Yousef Herrera", "Ximena McLean", "Crosby Maynard", "Carolyn Cain", "Benson Tapia", "Michaela Fuentes", "Bowen Hernandez",
    "Camila Harper", "Hayes Meadows", "Pearl Nicholson", "Rodrigo Cook", "Aaliyah Combs", "Ahmad Dorsey", "Addyson Booth", "Chaim McCarthy", "Kira Chase", "Otis Pennington",
    "Yareli Sutton", "Warren Clay", "Aliana Garcia", "James Huerta", "Dulce Patton", "Moises Ponce", "Aileen Pierce", "Nicolas Parra", "Dalary Mack", "Esteban Delgado",
    "Alani Mueller", "Albert Dean", "Julianna Delgado", "Colt Spears", "Isabela Stuart", "Dion Wall", "Jayda Best", "Harlem George", "Adelyn Cochran", "Danny Manning",
    "Jennifer Figueroa", "Spencer Salinas", "Royalty Murphy", "Cameron Kemp", "Anika Shields", "Devon Brooks", "Autumn Anthony", "Shiloh O’Connell", "Jillian Buck",
    "Jon Rose", "Magnolia Robinson", "Matthew Solis", "Miracle Yates", "Braylon Wilkinson", "Siena Mayer", "Yahir Barron", "Anya Curtis", "Muhammad Sims", "Lena Bonilla",
    "Aden Hanson", "Mariana Lucero", "Felipe Dennis", "Maisie Rivas", "Damon Dodson", "Etta Christensen", "Gregory Horne", "Marlowe Bentley", "Randy Levy", "Flora Cook",
    "Ezekiel Harding", "Aniya Stanton", "Zyair Leach", "Martha Carson", "Ares Peralta", "Malayah Clayton", "Boston Manning", "Jennifer Lim", "Cal Leach", "Martha Blackwell",
    "Marcellus Bryant", "Parker Weeks", "Anders Mills", "June Myers", "Adam Frederick", "Sariyah Vance", "Casen Rivera", "Lillian Melton", "Lennon Hopkins", "Gabriela Vance",
    "Casen Schultz", "Briella Kline", "Ramon Fields", "Annie Carson", "Ares Stevens", "Katherine Hammond", "Francis Page", "Cataleya Mejia", "Atticus Rosario", "Louisa Evans",
    "Elias Montgomery", "Evangeline Hull", "Salem Terrell", "Paityn Meyers", "Julien Mueller", "Imani McDowell", "Lachlan Morton", "Mallory Shelton", "Leonel Crawford",
    "Aubree Hail", "Hector Meza", "Rosa Hansen", "Charlie Copeland", "Dayana Khan", "Kendrick Kennedy", "Brianna Carlson", "Paul Allen", "Riley Porter", "Rhett Flowers",
    "Ariya Henson", "Bellamy Ortega", "Lilah Sherman", "Adan Warren", "Sloane Golden", "Amias Zimmerman", "Ariyah Miranda", "Rory Macdonald", "Rosalia Charles", "Conrad Griffin",
    "Charlie Rivera", "Charles Craig", "Brynn Bennett", "Leonardo Quintero", "Keyla Strickland", "Keegan Vaughan", "Nancy Walton", "Dominick Powell", "Vivian Crosby", "Tristen Moses",
    "Karter Roman", "Kian Todd", "Zariah Hampton", "Hank Nunez", "Mya Leal", "Cedric Mejia", "Saylor Kirby", "Tony Strong", "Margo Parsons", "Lewis Cross", "Nayeli Boyd",
    "Dean Shields", "Analia Davenport", "Dariel Gross", "Angel Parker", "Caleb Juarez", "Juliet Stuart", "Dion Mays", "Denisse Hobbs", "Brendan Figueroa", "Lilith Ponce",
    "Langston Pierce", "Arabella Wood", "Carson Drake", "Jayleen McKenzie", "Scott Neal", "Talia Alexander", "Kingston Williamson", "Catherine Delarosa", "Osiris Hale",
    "Brinley Lowe", "Julius Armstrong", "Presley Phillips", "Andrew Vang", "Madisyn Henry", "Carlos Vance", "Maxine Molina", "Prince Cherry", "Nyomi Carpenter", "Jeremy Cummings",
    "Nylah Rubio", "Titan Jensen", "Jane Johnson", "Noah Gray", "Sarah Hess", "Lawrence Hodges", "Eve Murray", "Ashton Hughes", "Samantha Glover", "Mack Randall", "Christina Hall",
    "Thomas Manning", "Jennifer Barrera", "Makai Hendrix", "Zhuri Whitney", "Jeffery Yoder", "Emerie Keith", "Jagger Wade", "Evie Jefferson", "Raylan Franklin", "Angela Greer",
    "Koda Leblanc", "Novalee Hodges", "Alonzo Patterson", "Kaylee Finley", "Calum Townsend", "Azalea Hanson", "Khalil Hinton", "Jaelynn Rose", "Hayden Lyons", "Kenzie Stephens",
    "Messiah Dougherty", "Alisson Cochran", "Danny McFarland", "Annika Mora", "Arturo Burgess", "Emory Briggs", "Case Hale", "Brinley Dejesus", "Rio Rice", "Ada Howell",
    "Bradley Andrade", "Emmy Pugh", "Judson Sims", "Lena Rollins", "Wes Salazar", "Freya Todd", "Baylor Deleon", "Gabrielle Wiley", "Mathew Higgins", "Leighton Weaver",
    "Tucker Schultz", "Briella Wise", "Frederick Stanley", "Gracelyn Hughes", "Everett Pacheco", "Paris Fry", "Jacoby Vasquez", "Rose Clayton", "Boston Williamson",
    "Catherine Snow", "Houston Quintero", "Keyla McBride", "Denver Wiggins", "Capri Snow", "Houston Gross", "Angel Wilcox", "Jerry Weaver", "Teagan Rose", "Hayden Banks",
    "Cali Dillon", "Alvin Ayers", "Simone Hail", "Hector Rodriguez", "Evelyn Morton", "Roland Figueroa", "Lilith Ryan", "Timothy Boyer", "Chaya Durham", "Kellen Welch",
    "Amira Dillon", "Alvin McDaniel", "Dahlia McIntyre", "Eliseo Francis", "Daniella Nolan", "Maximo Hudson", "Kamila Dixon", "Camden Graham", "Alaia Huerta", "Douglas Cochran",
    "Alma Maddox", "Lyric Larsen", "Xiomara Singleton", "Landyn James", "Quinn Bartlett", "Kace Daniel", "Joy Roman", "Kian Gates", "Melina Hines", "Uriel Logan",
    "Kora Stephens", "Messiah Mathis", "Anne Blair", "Troy Walter", "Penny Soto", "Barrett McMillan", "Oakleigh Hardin", "Hassan Pace", "Giana Porter", "Rhett Singh",
    "Vivienne Elliott", "Blake Blevins", "Aila Robbins", "Finnegan Farley", "Wrenley Archer", "Ephraim York", "Milan Villanueva", "Huxley Benton", "Anais Ramos", "Angel Anthony",
    "Macy Hebert", "Guillermo Roberson", "Sasha Neal", "Kane McConnell", "Denise Cain", "Benson Randall", "Christina Greene", "Griffin Glass", "Clare Francis", "Harvey Miranda",
    "Amina Huang", "Ayaan Rosales", "Kinley Moyer", "Ahmir Munoz", "Kehlani Medrano", "Arian Ayala", "Blair Fitzpatrick", "Blaze Rivas", "Averie King", "Julian Avalos",
    "Paloma Welch", "Hendrix Suarez", "Jimena Guerra", "Leland Ayala", "Blair Huerta", "Douglas Vazquez", "Journee Erickson", "Johnny Doyle", "Annalise Roman", "Kian Arias",
    "Aleah Abbott", "Kohen Contreras", "Daniela Roach", "Caspian Christensen", "Carmen Villegas", "Clyde Dawson", "Veronica Dominguez", "Kaden Wade", "Evie Burch", "Gerald Espinosa",
    "Braylee Chase", "Otis Gray", "Sarah Harding", "Brodie Smith", "Olivia Hendrix", "Korbyn Orozco", "Renata Lugo", "Santos Atkinson", "Jazmin Randolph", "Eugene Knapp",
    "Linda Bates", "Ellis Washington", "Valerie McClure", "Reese Becker", "Laura Fitzgerald", "Peyton Ramsey", "Lyric Castaneda", "Collin Vega", "Dakota Gordon", "Karter Waller",
    "Whitley Rodgers", "Mathias Bass", "Zahra Farley", "Graysen Friedman", "Aspyn Pineda", "Gerardo Kirby", "Skyla Estes", "Hakeem Logan", "Kora McKinney", "Romeo Vega",
    "Dakota Christian", "Ledger Morgan", "Delilah Cook", "Ezekiel Huerta", "Dulce McBride", "Denver Dickson", "Emmalynn O’Connell", "Jovanni Patterson", "Kaylee Avila",
    "Jaylen Cobb", "Aviana Kaur", "Augustine Rivas", "Averie Cruz", "Ryan Ayala", "Blair Terrell", "Jaxen Kemp", "Anika Sims", "Brian Kramer", "Hanna Gross", "Quinn Campos",
    "Sutton Soto", "Barrett Koch", "Milana McClain", "Mitchell Henson", "Kinslee Dixon", "Camden Sanchez", "Aria Taylor", "Jackson Patel", "Madeline Ramsey", "Luciano Small",
    "Zaria Magana", "Rey Vo", "Artemis Malone", "Ruben Morrow", "Reyna Cannon", "Archie Newman", "Oaklynn O’Neill", "Marcel Johnston", "Laila Daugherty", "Turner Arellano",
    "Faye Poole", "Quincy Peterson", "Caroline Whitney", "Jeffery Vo", "Artemis Lane", "Matias Frank", "Dior Vargas", "Ryker Cruz", "Claire Jensen", "Cash Clarke", "Kaitlyn Silva",
    "Luka Fuentes", "Madeleine Person", "Moses Murillo", "Mikaela McConnell", "London Terry", "Wren Jacobs", "Bryan Petersen", "Fernanda Osborne", "Augustus Orr", "Alaiya Hoffman",
    "Steven Hunt", "Genevieve Huerta", "Douglas Wilkerson", "Janiyah Peters", "Patrick Walls", "Lilianna Vaughn", "Remy Molina", "Alexandria Stafford", "Alfredo Rosales",
    "Kinley Wolf", "Jase Fernandez", "Amara Buckley", "Aryan Walls", "Lilianna Novak", "Bishop Walter", "Penny McGuire", "Casey Beasley", "Jaylah Dillon", "Alvin Chen",
    "Valeria Ingram", "Tripp McKinney", "Gwendolyn Blevins", "Avi McLaughlin", "Stephanie Rush", "Kaiser Benson", "Collins Sweeney", "Nixon Boyle", "Aliya Erickson", "Johnny Robinson",
    "Nora Lopez", "Michael Monroe", "Carly Booth", "Chaim Abbott", "Melany Mueller", "Albert Mercado", "Mckinley Ayers", "Ulises Moore", "Emily Cox", "Connor Yates",
    "Charley Williamson", "Emerson Dixon", "Blakely Santos", "Walker Hutchinson", "Jamie Bryant", "Jonah Duran", "Willa Best", "Harlem Walter", "Penny Anthony", "Shiloh Sharp",
    "Camryn Torres", "Jayden Charles", "Jenna Carter", "Maverick Esparza", "Ramona Vasquez", "Rowan Riley", "Kayla Villa", "Clay Parker", "Aubrey Corona", "Darian Sexton",
    "Ellen Andrade", "Abdiel Maldonado", "Elaina Chambers", "Orion Murray", "Faith Tate", "Dalton Joseph", "Gracelynn Small", "Rudy Pena", "Rachel Silva", "Luka Brandt",
    "Loretta Trevino", "Jaime Dickson", "Emmalynn Trevino", "Jaime Lee", "Scarlett Daniels", "Xander Shields", "Analia Powers", "Sean Gilbert", "Jocelyn Fischer", "Leonidas Snow",
    "Alexia Crosby", "Tristen Knox", "Kallie Ball", "Shane Fitzpatrick", "Annabella Bowman", "Francisco Castro", "Eloise Palmer", "Theo Duarte", "Kynlee Zhang", "Isaias Bradford",
    "Rhea Melendez", "Nikolas Williamson", "Catherine McLean", "Crosby Andrade", "Emmy Jenkins", "Declan Dillon", "Laurel Brandt", "Damir Barry", "Waverly Daniels", "Xander Cline",
    "Lina Lozano", "Boone Brady", "Ryan Robinson", "Matthew Kerr", "Baylee Mann", "Nehemiah Zimmerman", "Ariyah Hail", "Hector Parsons", "Maia Davenport", "Dariel Valentine",
    "August Howe", "Alaric McCall", "Kai Porter", "Rhett Flowers", "Ariya Hoover", "Jaziel Meyer", "Sara Becker", "Lawson Valdez", "Diana Ortiz", "Landon Manning",
    "Jennifer Zavala", "Dillon Correa", "Valery Cano", "Terry McDowell", "Rayna McCullough", "Briar Calhoun", "Thalia Vaughan", "Castiel Mejia", "Saylor Yu", "Bryant Blackwell",
    "Saoirse Pratt", "Rowen Gibson", "Eden Roberts", "Josiah Paul", "Daphne Butler", "Ryder Reyna", "Luella Villalobos", "Reuben Villanueva", "Monroe Hamilton", "Jason Cordova",
    "Florence Fry", "Jacoby Stone", "Catalina Frederick", "Kase Bradshaw", "Berkley Schmitt", "Murphy Morales", "Skylar Ray", "Arlo Jacobs", "Camilla Vance", "Casen Sanders",
    "Everleigh Hines", "Uriel Walter", "Penny Lloyd", "Zaire Fields", "Annie Sexton", "Mylo McFarland", "Annika Cervantes", "Kamari Ware", "Eileen Maxwell", "Eden Copeland",
    "Dayana Bravo", "Genesis Todd", "Zariah Cochran", "Danny Park", "Lia O’Donnell", "Lian Hurst", "Adalee Smith", "Liam Curtis", "Alexis Bass", "Landen Weber", "Alayah Lambert",
    "Mario Herrera", "Ximena Kaur", "Augustine Bentley", "Jaylin Johnson", "Noah Nava", "Scout Velasquez", "Sullivan Torres", "Violet Fitzpatrick", "Blaze Mills",
    "June Montgomery", "Maximiliano McBride", "Kelsey Kaur", "Augustine Walton", "Scarlet Marin", "Aldo Gould", "Violeta Clark", "John Enriquez", "Nellie Benjamin", "Kyro Rollins",
    "Araceli Goodwin", "Kaison Diaz", "Elena Ruiz", "Austin Harmon", "Maren Becker", "Lawson Berg", "Emmalyn Perkins", "Kyrie Vasquez", "Rose Cole", "Nathaniel Macias",
    "Adley Craig", "Odin Dudley", "Hadleigh Avalos", "Coen Rosario", "Louisa Ballard", "Kenzo Elliott", "Noelle Flynn", "Kannon Benjamin", "Jianna Hill", "Isaac Huffman",
    "Hayley Peterson", "Santiago Cunningham", "Marley Payne", "Edward Carson", "Nalani Escobar", "Zachariah Rosas", "Joelle Dodson", "Seven Portillo", "Nathalie Waller",
    "Marley Howell", "Mckenna Brooks", "Jordan Wiley", "Lauryn Anderson", "Jacob Bradley", "Vanessa Kaur", "Augustine Robertson", "Harmony Person", "Moses Lucas", "Phoenix Lugo",
    "Santos Villarreal", "Jazlyn Wiggins", "Azariah Collier", "Ivory Lucas", "Chance Woodward", "Drew Moyer", "Ahmir Duran", "Willa Nixon", "Cory Robertson", "Harmony Owens",
    "Adriel Rollins", "Araceli Howe", "Alaric Singh", "Vivienne Benton", "Jamal Espinoza", "Lucille McDowell", "Lachlan Warren", "Sloane Bartlett", "Kace Miller", "Isabella Phan",
    "Maison Rodgers", "Selah Bonilla", "Aden Olsen", "Oaklyn Gilbert", "Tobias McDaniel", "Dahlia Merritt", "Colten Maldonado", "Elaina Lowery", "Jaxxon Nixon", "Deborah Molina",
    "Prince Chung", "Rivka Gallegos", "Jonas Willis", "Alexa Patrick", "Derrick Velasquez", "Esme Acevedo", "Dakari Floyd", "Yaretzi Livingston", "Ambrose Frank", "Dior Carter",
    "Maverick Fuller", "Oakley Wood", "Carson Sanchez", "Aria Winters", "Deandre Lopez", "Gianna Briggs", "Case Quintana", "Kenia O’brien", "Riley Ortega", "Lilah Xiong",
    "Azrael Parra", "Dalary Patton", "Moises Baxter", "Lara Villarreal", "Nikolai Paul", "Daphne McPherson", "Foster Parrish", "Tiana Gould", "Blaine Woods", "Reese Hanson",
    "Khalil Schaefer", "Mavis Quintero", "Thatcher Cherry", "Nyomi Colon", "Bruce Murphy", "Bella Mullins", "Allen Henry", "Summer Foster", "Kayden Bernard", "Barbara Monroe",
    "Colby Patton", "Lorelei Day", "Kayson Gates", "Melina Zamora", "Quentin Taylor", "Sofia Waller", "Marley Watkins", "Lola Chambers", "Orion Wood", "Natalia Webb",
    "Lorenzo Andersen", "Zoie Kirby", "Tony May", "Adriana Smith", "Liam Beil", "Itzel Dalton", "Fletcher Conway", "Ryann Moyer", "Ahmir Calderon", "Serena Alexander",
    "Kingston Randolph", "Kailey Manning", "Seth Elliott", "Noelle McKay", "Joey Nava", "Scout Savage", "Keaton O’Connell", "Jillian Brock", "Julio Price", "Piper Bell",
    "Emmett Barry", "Waverly Gates", "Ermias Hughes", "Samantha Lin", "Conor Aguilar", "Josie Vincent", "Aarav Stevens", "Katherine Munoz", "Justin Stephens", "Brennan Chang",
    "Adrienne Vasquez", "Laila Barry", "Turner Knox", "Faye Chandler", "Leonard Moyer", "Lorena Owens", "Cedric Velez", "Kayley Jennings", "Kai Boyd", "Kieran Schroeder",
    "Eugene Brady", "Linda Nguyen", "Liana McLaughlin", "Kingston Castro", "Gabrielle Malone", "Kalel Sheppard", "Anaya Park", "Alfonso Krause", "Rosie Cardenas", "Jamal Petersen",
    "Lucie Juarez", "Zachary Guzman", "Kyra Jimenez", "Kylan Gates", "Ariana Brady", "Adonis Pacheco", "Ryann Santana", "Kristopher Rich", "Maddox Potts", "Luz Schwartz",
    "Matilda Brooks", "Santiago Huerta", "Ruthie Hicks", "Abril Shepherd", "Boston Mack", "Kailani Mendez", "Raven Bautista", "Kingston Vargas", "Kailey Waller", "Elaina Phelps",
    "Santana Thompson", "Rylan Hawkins", "Evangeline Flynn", "Myla Fitzgerald", "Saul Moon", "Izabella Norman", "Evelyn Quinn", "Eva Singh", "Austyn Gallegos", "Raul Holmes",
    "Brodie Ritter", "Mckenna Conner", "Maximus Collier", "Remy Glover", "Reagan Church", "Sloane Macdonald", "Jaiden Parsons", "Jaylene Chapman", "Emerie Bowman", "Davian Dillon",
    "Zara Dominguez", "Reed Mays", "Maliyah Bird", "Valerie Pace", "Rosa Levy", "Carson Buchanan", "Oaklynn Frey", "Marley Hancock", "Damari Frederick", "Amelie Blanchard",
    "Martha Ballard", "Myra Velasquez", "Haven Myers", "Thaddeus Lam", "Gabriela Valenzuela", "Korbyn Roth", "Presley Tate", "Uriel Moyer", "Brayan Hamilton", "Aimee Middleton",
    "Alfredo Stanley", "Hezekiah Deleon", "Yasmin Parks", "Jazmin Rubio", "Stefan Neal", "Evelin Baldwin", "Arielle Craig", "Emmitt Richard", "Catalina Green", "Jefferson Ortega",
    "Emerie Chan", "Luka Flowers", "Brett Norman", "Hendrix Oliver", "Hassan Mclean", "Adonis Pennington", "Jaylene Roy", "Everett Guzman", "Bianca Rangel", "Messiah Morris",
    "Franklin Mcbride", "Siena Whitney", "Joslyn Parks", "Trace Rollins", "Jemma Ball", "Brynn Tran", "John Cummings", "Zain Henson", "Brennan Rodgers", "Austyn Neal",
    "Cassius Hatfield", "Violet Hensley", "Drew Mathis", "Tiana Santana", "Kamden Werner", "Osvaldo Peck", "Gabriel Phan", "Maurice Ortega", "Aryan Pittman", "Xander Faulkner",
    "Lilah Kim", "Dayton York", "Sarai Price", "Santino Chaney", "Thea Tucker", "Dahlia York", "Adalynn Villegas", "Ivan Dorsey", "Arya Bush", "Giovanna Woodard",
    "London Lynch", "Wade Yang", "Anika Preston", "Ashlynn Clements", "Gracelyn Acevedo", "Rashad O’Neill", "Anabella Vargas", "Bristol James", "Aryan Hicks", "Lorenzo Mays",
    "Zayn Brooks", "Nola Khan", "Giancarlo Huynh", "Kamila Wilcox", "Cameron Kaiser", "Maxine Faulkner", "Kadence Johnson", "Nixon Osborne", "Sammy Nash", "Kinsley Yu",
    "Marissa Haley", "Shea Perez", "Atlas Cole", "Livia Kennedy", "Chaya Huffman", "Lilian Atkinson", "Mekhi Escobar", "Chandler Flynn", "Malakai Garrett", "Seth Lloyd",
    "Alana Mccall", "Leonidas Rivera", "Magnolia Roth", "Rey Bartlett", "Armando Bishop", "Giovanna Pollard", "Amara Daniels", "Nikolas Baird", "Janessa Huynh", "Khalil Lara",
    "Elianna Pope", "Kynlee Madden", "Yadira Carpenter", "Kaiya Reid", "Demetrius Guzman", "Vada Rollins", "Angelique Bolton", "Fletcher Moreno", "Kara Sheppard", "Rylan Short",
    "Karina Meza", "Lillianna Barnett", "Tristian Choi", "Damarion Lam", "Seth Frazier", "Malachi Mccall", "Siena Weeks", "Nathalie Vance", "Marcelo Hall", "Asa Stein",
    "Deandre Harding", "Makenzie Ware", "Layton Callahan", "Elsa Conner", "Sloane Velez", "Mikaela Cortez", "Esteban Yu", "Ashton Phelps", "Simeon Simpson", "Kamryn Ray",
    "Arnav Ward", "Aidan Quinn", "Kailey Watts", "Brentley Doyle", "Augustus Hart", "Jaime Hodges", "Naima Cordova", "Brennan Cantrell", "Charlie Colon", "Jameson Cordova",
    "Kennedi Saunders", "Crosby Ryan", "Laney Anderson", "Elian Waters", "Liv Roach", "Benjamin Montes", "Emersyn Mercer", "Matilda Cervantes", "Elliot Huffman", "Peyton Brock",
    "Scarlette Mathis", "Giovani Alvarado", "Devon Stone", "Yair Burke", "Anders Day", "Kora Luna", "Briggs Walker", "Morgan Rangel", "Kamari Cervantes", "Jazlene Kirk",
    "Kaleb Greer", "Joy Velazquez", "Melany House", "Giovani Peterson", "Luciana Mathis", "Harper Boyer", "Cedric Cameron", "Kailani Cooley", "Brielle Crane", "Lorelei Myers",
    "Kendra Griffith", "Marlee Beard", "Jaylen Quinn", "Emerson Henry", "Jayda Garrett", "Izabella Osborne", "Jemma Norton", "Nikolai Hoover", "Anabelle Spencer", "Kendrick Beard",
    "Trevor Nicholson", "Kai Cameron", "Brynn Stanton", "Darian Le", "Cecelia Arias", "Zion Gilmore", "Jamar Velazquez", "Jaylyn Campos", "Karsyn Hahn", "Leandro Cline",
    "Martha Bates", "Xander Gilmore", "Kash Obrien", "Dayana Mayo", "Elianna Combs", "Bode Molina", "Adrien Nielsen", "Amir Long", "Sloane Gilbert", "Cruz Rodriguez", "Joelle Forbes",
    "Skylah Cantu", "Maxwell Mcguire", "Finnegan Duran", "Efrain Li", "Cherish Fowler", "Isla Lutz", "Tristian Mcguire", "Sienna Velasquez", "Lyla Molina", "Agustin Mcintosh",
    "Keagan Kim", "Chana Reynolds", "Darren Carrillo", "Kallie Weeks", "Harlan Austin", "Jadiel Branch", "Leonidas Best", "Drew Bauer", "Judah Hutchinson", "Marianna Richard",
    "Tobias Ramsey", "Nathanael Friedman", "Alyvia Mayo", "Blaine Durham", "Dahlia Phelps", "Jolene Chen", "Leandro Burnett", "Rhett Mcbride", "Lylah Lucas", "Jamal Fields",
    "Alden Osborn", "Holly Davila", "Addison Brady", "Aviana Melendez", "Aurora Moyer", "Landin Vaughan", "Rebekah Charles", "Shelby Sosa", "Immanuel Wall", "Asa Snyder",
    "Brett Berg", "Brynlee Bird", "James Bond", "Jaylyn Sandoval", "Kaidence Chaney", "Kyrie Owen", "Maurice Bowers", "Kadence Young", "Sammy Compton", "Catalina Richmond",
    "Ximena Carr", "Zain Mays", "Ivory Stein", "Carolina Brown", "Lawrence Valdez", "Louie Buchanan", "Miley Frey", "Aria Gaines", "Baylor Floyd", "Kody Rice", "Konnor Banks",
    "Allisson Perkins", "Eden Fischer", "Dayami Molina", "Sarai Wall", "Ernest Hayden", "Nia Cochran", "Reuben Wood", "Ramon Vasquez", "Rowen Hines", "John Lee", "Mckenzie Taylor",
    "Lachlan Dillon", "Elle Berry", "Kieran Foley", "Haven Mccullough", "Chad Espinoza", "Mathew Ewing", "Alvaro Webb", "Lance Collins", "Sofia Lin", "Madelyn Murray", "Ariella Huynh",
    "Hattie Bishop", "Nelson Murray", "Valentino Mckinney", "Lara Hays", "Kingston Levine", "Kyrie Banks", "Viviana Gates", "Tori Glass", "Jaylene Jennings", "Abrielle Ryan",
    "Cayden Cummings", "Carla Hines", "Tyrell Ali", "Abrielle Berg", "Paislee Melendez", "Theo Key", "Roselyn Nolan", "Harold Le", "Ariella Cantu", "Avery Fernandez",
    "Joelle Chavez", "Josue Bowers", "Oscar Morse", "Vivian Brewer", "Armando Dougherty", "Braelynn Kent", "Yurem Rice", "Mckinley Solomon", "Aaliyah Gaines", "Hudson Johnson",
    "Aydin Schmidt", "Cesar Fischer", "Yosef Eaton", "Jaden Henson", "Jayson Rasmussen", "Nora Bradshaw", "Kiera Pennington", "Saniyah Nguyen", "Shane Frank", "Alicia Barton",
    "Gwendolyn Zhang", "Dexter Faulkner", "Alyvia Knapp", "Maddison Erickson", "Yaritza Hoover", "Immanuel Bailey", "Livia Mayo", "Gianni Velasquez", "Lia Wang", "Nina Snow",
    "Brylee Kirby", "Shea Roberson", "Joelle Lloyd", "Jaydan Cook", "Luz Gibson", "Tatum Mendez", "Reese Singh", "Brielle Bright", "Samuel Butler", "Olive Cochran",
    "Eva Frye", "Bridger Barron", "Jadiel Colon", "Avah Woodard", "Madalynn Singh", "Nelson Proctor", "Danna Dorsey", "Jadon Ho", "Alexzander Hurley", "Liberty Bates", "Joziah Rush",
    "Judah Abbott", "Randy Sandoval", "Yurem Mcdowell", "Alessia Burns", "Madalynn Olsen", "Tiana Mccarty", "Jaliyah Hancock", "Walter Dougherty", "Kaliyah Cooper", "Abigayle Frye",
    "Gunnar Gay", "Roselyn Woodard", "Bridger Baird", "Elyana Burgess", "Osvaldo Hamilton", "Ayleen Werner", "Lilia Webster", "Salma Gibson", "Crosby Mcknight", "Lyla Fisher",
    "Tobias Houston", "Hadassah Payne", "Bryant Bradshaw", "Noemi Ritter", "Ryland Bowen", "Jamison Mathews", "Cierra Richard", "Estrella Whitney", "Rhett Pollard", "Jordyn Whitaker",
    "Zaid Rice", "Anabel Stanton", "Brysen Nolan", "Jacqueline Powell", "Mikaela Stevenson", "Sloane Ritter", "Vivienne Gates", "Alisson Gordon", "Brett Peck", "Frank Waters",
    "Nathalia Rosario", "Nayeli Bernard", "Lucia Butler", "Zander Shea", "Skyla Newton", "Jazlene Benjamin", "Kamila Howard", "Naima Henry", "Case Woodward", "Lylah Maynard",
    "Sincere Rubio", "Luz Hensley", "Daphne Keith", "Jovanny Mayer", "Maximo Neal", "Miley Gross", "Alma Mccormick", "Teresa Christian", "Julieta Wallace", "Kaliyah Moody",
    "Braelyn Kaufman", "Orlando Lam", "Rayne Rosales", "Kyson Patel", "Amirah Lang", "Kalel Leon", "Jovany Marquez", "Adalynn Hodge", "Bryant Mcclain", "Mohammed Bender",
    "Valeria Acevedo", "Bryson Everett", "Curtis Burton", "Kendall Snow", "Lucas Koch", "Taliyah Tyler", "Zainab Rosario", "Ximena Donovan", "Jovanny Love", "Amina Mckenzie",
    "Kendal Ortiz", "Nina Frederick", "Kiera Simpson", "Abel Vang", "Cynthia Key", "Zainab Good"
]
const RandomLiveComments = [
    "This video blew my mind! I never knew [topic] could be so fascinating!",
    "Who else is here after seeing [famous person] mention this video?",
    "I've watched this video three times already and I still can't get enough of it.",
    "This channel deserves way more subscribers. Quality content all the way!",
    "I've been looking for a video like this for ages. Thank you!",
    "Not gonna lie, I only clicked on this video because of the thumbnail, but I stayed for the content!",
    "Anyone else binge-watching all the videos on this channel?",
    "This video changed my perspective on [topic]. Thank you for sharing!",
    "I'm so glad YouTube recommended this video to me. It's exactly what I needed today.",
    "Wow, the editing on this video is top-notch! Props to the editor!",
    "I can't believe I've been missing out on this channel for so long. Subscribed!",
    "Does anyone else find themselves coming back to this video every week?",
    "This video deserves to go viral. Let's make it happen, people!",
    "The comments section is surprisingly wholesome. Love this community!",
    "I wish I could give this video more than one thumbs up. Absolutely fantastic!",
    "This video popped up in my recommended, and I'm so glad it did. Instantly hooked!",
    "The amount of effort that went into making this video is evident. Kudos to the creator!",
    "This video taught me more than my entire semester of [related subject].",
    "I've never commented on a video before, but I had to for this one. Amazing work!",
    "I'm officially adding this channel to my list of favorites. Keep up the great work!",
    "I love how this video breaks down complex topics into easy-to-understand concepts.",
    "Thank you for making learning enjoyable. Subscribed!",
    "I could listen to the narrator's voice all day. So soothing!",
    "This video gave me the motivation I needed to pursue my goals. Thank you!",
    "The attention to detail in this video is incredible. Truly impressive!",
    "I've never seen anything like this on YouTube before. Refreshing content!",
    "I usually don't comment, but this video deserves all the praise. Well done!",
    "My favorite part of the day is watching new uploads from this channel. Keep 'em coming!",
    "I shared this video with all my friends. Everyone needs to see this!",
    "I love how this video challenges conventional wisdom. Thought-provoking stuff!",
    "The cinematography in this video is breathtaking. Such a visual treat!",
    "I'm amazed by how much I learned in just a few minutes. Truly educational!",
    "I've watched this video multiple times and I still pick up something new each time.",
    "This video deserves to win an award. Absolutely brilliant!",
    "The production quality on this channel is unmatched. A cut above the rest!",
    "This video made me laugh, cry, and think. What more could you ask for?",
    "The storytelling in this video is superb. I was hooked from start to finish!",
    "I love how interactive this channel is with its audience. Keep up the great work!",
    "This video should be required viewing for everyone. So much valuable information!",
    "I've never been so engaged while watching a YouTube video. Absolutely captivating!",
    "The passion of the creator shines through in every frame of this video.",
    "I stumbled upon this channel by accident, but now I'm a loyal subscriber!",
    "This video restored my faith in humanity. So heartwarming!",
    "I love how this channel tackles controversial topics with grace and empathy.",
    "I've never seen such a supportive community on YouTube before. Proud to be a part of it!",
    "This video inspired me to take action. Thank you for the motivation!",
    "The music selection in this video is spot on. Adds so much emotion!",
    "I've been binge-watching this channel all night. Can't get enough!",
    "This video made me realize I've been looking at [topic] all wrong. Eye-opening!",
    "I wish I could give this video a standing ovation. Absolutely incredible!",
    "I'm blown away by how much effort went into researching this topic. Well done!",
    "This video made me rethink my entire approach to [related subject]. Mind = blown!",
    "I love how this channel promotes critical thinking and open dialogue. Keep it up!",
    "This video is like therapy for my brain. So satisfying to watch!",
    "I've never commented on a YouTube video before, but I had to for this one. Truly outstanding!",
    "I feel smarter just by watching this video. Educational and entertaining!",
    "This video deserves to be on the trending page. Let's make it happen, folks!",
    "I've never seen a channel with such consistent quality content. Truly impressive!",
    "I'm so glad I stumbled upon this video."]


const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&regionCode=IN&key=${API_KEY}`;
const serachQueryUrl = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export {
    userName,
    RandomUserNames,
    RandomLiveComments,
    data,
    buttonList,
    serachQueryUrl,
    API_KEY,
    Replies,
    
    url
};