// READ the giphy API docs: https://developers.giphy.com/

//variable defintions

var giphy_startpoint = 'http://api.giphy.com/v1/gifs/search'
var giphy_api_key = "GBHeKCKpQVCMAJhRj8sCIufVBg0nQW7F"

var searchForm = document.querySelector("#search-form")
var searchInput = document.querySelector("#search-form input")
var results = document.querySelector(".results")



//define the function

function displayGifs(data) {
    data.forEach(function (gif) {
        results.innerHTML += `
            <img class="image" src="${gif.images.preview_gif.url}">
`
    })

}


function getGifs(term) {
    $.ajax({
        type: "GET",
        url: `${giphy_startpoint}?api_key=${giphy_api_key}&q=${term}`,
        dataType: "json",
        success: function (data) {
            displayGifs(data.data)
        },
        error: function (error) {
            console.log("There was an error")
        }
    })

}




//call the functions/eventlisteners
searchForm.addEventListener("submit", function (event) {
    event.preventDefault()

    getGifs(searchInput.value)

    if (searchInput.value == "") return

})
