$(function () {
    const APIurl = "https://insta-api-por.herokuapp.com/api/posts"
    $.get(APIurl, function (data, status) {
        console.log(data);
        $("#posts").empty();
        for (const postid in data.data) {
            const post = data.data;
            let row = `<tr>
                        <th scope="row">${post.shortcode}</th>
                        <td>${post.full_name}</td>
                    </tr>`;
            $("#posts").append(row);
        }
    });
})