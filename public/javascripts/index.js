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

    try {
        const response = await axios.get(APIurl);
        $("#SearchID").click(function () {
            // $("#SearchPosts").empty();
            const ID = $("#ID").val();
            const post = response.data.data[ID - 1];
            let row = `<tr>
                        <th scope="row">${post.id}</th>
                        <td>${post.shortcode}</td>
                        <td>${post.full_name}</td>
                        <td>${post.location_name}</td>
                    </tr>`;
            $("#SearchPosts").append(row);
        })

        $("#SearchSC").click(function () {
            // $("#SearchPosts").empty();
            const Shortcode = $("#SC").val();
            for (const postid in response.data.data) {
                const post = response.data.data[postid];
                if (post.shortcode == Shortcode) {
                    let row = `<tr>
                        <th scope="row">${post.id}</th>
                        <td>${post.shortcode}</td>
                        <td>${post.full_name}</td>
                        <td>${post.location_name}</td>
                    </tr>`;
                    $("#SearchPosts").append(row);
                }
            }
            // let row = `<tr>
            //             <th scope="row">${post.id}</th>
            //             <td>${post.shortcode}</td>
            //             <td>${post.full_name}</td>
            //             <td>${post.location_name}</td>
            //         </tr>`;
            // $("#SearchPosts").append(row);
        })

    } catch (error) {
        console.log(error);
    }

})