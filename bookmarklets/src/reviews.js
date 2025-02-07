var url = document.URL;
if (url.includes("amazon.com")) {
    var finalUrl = `https://fakespot.com/analyze?ra=true&url=${url}`; 
    window.location.href = finalUrl;
} else {
    alert("not an amazon product");
}
