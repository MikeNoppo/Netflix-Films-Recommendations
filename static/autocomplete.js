$(document).ready(function(){
    const autoCompleteJS = new autoComplete({
        selector: "#autoComplete",
        placeHolder: "Search for Movies...",
        data: {
            src: films,  // 'films' is passed from Flask with suggestions
            cache: true
        },
        resultsList: {
            noResults: true,
            maxResults: 5,
        },
        resultItem: {
            highlight: true,
        },
        onSelection: (feedback) => {
            const selection = feedback.selection.value;
            document.querySelector("#autoComplete").value = selection;
        },
        threshold: 2,                        // Min. Chars length to start Engine | (Optional)
        debounce: 100,                       // Post duration for engine to start | (Optional)
        searchEngine: "strict",              // Search Engine type/mode           | (Optional)
        resultsList: {                       // Rendered results list object      | (Optional)
            render: true,
            container: source => {
                source.setAttribute("id", "food_list");
            },
            destination: document.querySelector("#autoComplete"),
            position: "afterend",
            element: "ul"
        },
        maxResults: 5,                         // Max. number of rendered results | (Optional)
        highlight: true,                       // Highlight matching results      | (Optional)
        resultItem: {                          // Rendered result item            | (Optional)
            content: (data, source) => {
                source.innerHTML = data.match;
            },
            element: "li"
        },
        noResults: () => {                     // Action script on noResults      | (Optional)
            const result = document.createElement("li");
            result.setAttribute("class", "no_result");
            result.setAttribute("tabindex", "1");
            result.innerHTML = "No Results";
            document.querySelector("#autoComplete_list").appendChild(result);
        },
        onSelection: feedback => {             // Action script onSelection event | (Optional)
            document.getElementById('autoComplete').value = feedback.selection.value;
        }
    });
});