function addNewComment(data){

}

document.getElementById('comment-button')
.addEventListener('click', function(ev){
    console.log("inside this")
    let commentTextElement = document.getElementById('comment-text');
    console.log(commentTextElement, "comment-button getel");
    let commentText = commentTextElement.value;
    console.log(ev, "event daga");
    let postId = ev.currentTarget.dataset.postid;

    fetch("/comments/create", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            comment: commentText,
            postId: postId
        })

    })
    .then(response => response.json())
    .then(res_json => {
        console.log(res_json);
    })
}) ;



// select c.id, c.text, c.createdAt, u.username FROM comments c JOIN users u ON c.fk_authorId=u.id WHERE fk_postId=?;