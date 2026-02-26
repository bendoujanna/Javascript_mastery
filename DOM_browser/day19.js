// fetch api

// async function getdDailyTip() {
    // try {
        // const request = await fetch ("https://jsonplaceholder.typicode.com/posts")
        // const response = await request.json();
        // const firstTip = response[0];
        // console.log(`Today's tip: ${firstTip.title}`);
    // } catch (error) {
        // console.error("Error fetching daily tip:", error);
    // }
// }
// 
// getdDailyTip();


const poemTitle = document.getElementById("poem-title");
const poemAuthor = document.getElementById("poem-author");
// 
addEventListener("click", async () => {
    try {
        const response = await fetch("https://poetrydb.org/random");
        const data = await response.json();
        const poem = data[0];
// 
        poemTitle.textContent = poem.title;
        poemAuthor.textContent = `by ${poem.author}`;
    } catch (error) {
        console.error("Error fetching poem:", error);
    }
});