/*

Question 40:

Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

----------------
Solve Problem 40
----------------

*/
// Define the make_album function
function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
// Call the function to make three dictionaries representing different albums
console.log(make_album('Taylor Swift', 'Folklore'));
console.log(make_album('Kendrick Lamar', 'Good Kid, M.A.A.D City'));
console.log(make_album('The Beatles', 'Sgt. Pepper\'s Lonely Hearts Club Band', 13));
