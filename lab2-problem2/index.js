fetch("http://jsonplaceholder.typicode.com/posts").then((response) => {
    return response.json();
}).then((json) => {
    
    let postTitles = json.filter((post) => {
        return post.title.split(" ").length > 6;
    }).map((post) => {
        console.log(post.title)
    });
    
    let frequencyMap = json.map((post) => {
        return post.body;
    }).join(" ").split(" ").reduce((map, word) => {
        if (map[word]) {
            map[word] = map[word] + 1;
        } else {
            map[word] = 1;
        }
        return map;
    }, {});
    
    console.log(frequencyMap);
});