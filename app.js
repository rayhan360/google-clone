const googleSearch = (e) => {
    e.preventDefault();
    const prompt = document.getElementById("search").value;
    if (prompt === "") {
        alert("Please enter a search query.");
        return;
    }
    var query = prompt.replace(" ", "+", prompt);
    var url = "http://www.google.com/search?q=" + query;

    window.location.href = url;
};