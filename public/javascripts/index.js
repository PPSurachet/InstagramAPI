$(async function () {
    const APIurl = "https://insta-api-por.herokuapp.com/api/posts";


    try {
        const response = await axios.get(APIurl);
        console.log(response);

        $("#posts").empty();
        for (const postid in response.data.data) {
            const post = response.data.data[postid];
            let row = `<tr>
                        <th scope="row">${post.shortcode}</th>
                        <td>${post.full_name}</td>
                    </tr>`;
            $("#posts").append(row);
        }
    } catch (error) {
        console.log(error);
    }

    // $.get(APIurl, function (data, status) {
    //     console.log(data);
    //     $("#posts").empty();
    //     for (const postid in data.data) {
    //         const post = data.data[postid];
    //         let row = `<tr>
    //                     <th scope="row">${post.shortcode}</th>
    //                     <td>${post.full_name}</td>
    //                 </tr>`;
    //         $("#posts").append(row);
    //     }
    // });
})