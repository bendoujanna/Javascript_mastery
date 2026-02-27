const corruptedData = '{"user": "Janna", "role": "Admin"'; 
let parsedUser;

try {
    parsedUser = JSON.parse(corruptedData);
    console.log("Data parsed successfully!");
} catch (error) {
    console.error("Error: Failed to parse data.");
    console.error(error.message);
    
    parsedUser = { user: "Guest", role: "Read-Only" };
} finally {
    console.log(`System check complete. Current user is: ${parsedUser.user}`);
}


// const syncBtn = document.getElementById("sync-btn");
// const statusDisplay = document.getElementById("status-display");
// 
// syncBtn.addEventListener("click", async () => {
    // statusDisplay.textContent = "Syncing...";
    // statusDisplay.style.color = "black";
    // syncBtn.disabled = true;
// 
    // try {
        // const response = await fetch("https://jsonplaceholder.typicode.com/broken-link");
        // 
        // if (!response.ok) {
            // throw new Error(`HTTP Error ${response.status}: Server rejected the connection.`);
        // }
        // 
        // const data = await response.json();
        // statusDisplay.textContent = "Sync complete!";
        // statusDisplay.style.color = "green";
// 
    // } catch (error) {
        // console.error(error);
        // statusDisplay.textContent = `Sync failed: ${error.message}`;
        // statusDisplay.style.color = "red";
        // 
    // } finally {
        // syncBtn.disabled = false;
        // console.log("Sync operation closed.");
    // }
// });