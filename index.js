// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "The Chain", artist: "Fleetwood Mac", genre: "Rock" },
    { title: "Staying Alive", artist: "Bee Gees", genre: "Pop" },
    { title: "September", artist: "Earth, Wind & Fire", genre: "R&B" },
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    // Add preferences for Drax, Rocket, and Groot
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // Use the map() function to create playlists for each Guardian
    // Your code here
    return Object.entries(guardians).map(([guardian, genre]) => {
        const playlist = songs.filter(song => song.genre === genre);
        return { guardian, playlist };
    });
}

function displayPlaylists(playlists) {
    const playlistsDiv = document.getElementById('playlists');
    playlistsDiv.innerHTML = '';

    playlists.forEach(({ guardian, playlist }) => {
       
        const guardianDiv = document.createElement('div');
        guardianDiv.classList.add('guardian-playlist');

        const guardianName = document.createElement('h2');
        guardianName.textContent = `${guardian}'s Awesome Mix Playlist`;
        guardianDiv.appendChild(guardianName);

        const ul = document.createElement('ul');

        playlist.forEach(song => {
            const li = document.createElement('li');
            li.textContent = `${song.title} by ${song.artist}`;
            ul.appendChild(li);
        });

        guardianDiv.appendChild(ul);

        playlistsDiv.appendChild(guardianDiv);
    });
}

const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);
