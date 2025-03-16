document.getElementById("fetchData").addEventListener("click", () => {
    fetch('https://the-trivia-api.com/v2/questions') // Trivia API
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            // console.log(data);
            const question = data[0].question.text; // Extract question
            document.getElementById("result").innerText = `Trivia: ${question}`;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("result").innerText = "Failed to load trivia.";
        });
});

