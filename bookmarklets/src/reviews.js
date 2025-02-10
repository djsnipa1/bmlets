// var url = document.URL;
// if (url.includes("amazon.com")) {
//     var finalUrl = `https://fakespot.com/analyze?ra=true&url=${url}`;
//     window.location.href = finalUrl;
// } else {
//     alert("not an amazon product");
// }

var url = location.href;
if (url.includes('amazon.com')) {
	window.open('http://fakespot.com/analyze?url=' + encodeURIComponent(url), '_blank');
} else {
	alert('not an amazon.com product page');
}
