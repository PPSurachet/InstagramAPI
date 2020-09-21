$(function () {
    const APIurl = "https://insta-api-por.herokuapp.com/api/posts/"
    $.get(APIurl, function (data, status) {
        console.log(data);
    });
})