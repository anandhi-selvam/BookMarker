let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");

var siteName = siteNameInputEl.value;
var urlName = siteUrlInputEl.value;

siteNameInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteName = event.target.value;
        console.log(siteName);
    }
});

siteUrlInputEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        urlName = event.target.value;
        console.log(urlName);
    }
});

function createAndAppend() {
    let listEl = document.createElement("li");
    listEl.classList.add("list-container");
    bookmarksListEl.appendChild(listEl);

    let listHeading = document.createElement("p");
    listHeading.textContent = siteName;
    listHeading.classList.add("list-heading");
    listEl.appendChild(listHeading);


    let listLink = document.createElement("a");
    listLink.textContent = urlName;
    listLink.setAttribute("href", urlName);
    listLink.setAttribute("target", "_blank");
    listLink.classList.add("link-link");
    listEl.appendChild(listLink);

    siteNameInputEl.value = "";
    siteUrlInputEl.value = "";
}

function validateData() {
    if (siteName === "") {
        siteNameErrMsgEl.textContent = "Required*";
    }
    if (urlName === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        createAndAppend();
    }
}

bookmarkFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateData();
});