
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
const API_KEY = 'AIzaSyChA6NUglGZYCu5uo5LvHXMPNM1eKg8Qj0';


const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&regionCode=IN&key=${API_KEY}`;

export {

    data,
    buttonList,
    
    url
};