const PostSummaryItem = post => {
  return(`<div class="list-group-item  d-flex justify-content-between align-items-center">
    <small>
      <p class="text-secondary mb-0">${post.topic}</p>
      <p class="d-inline">${post.userName}</p>
      <p class="d-inline text-secondary">- ${post.time}</p>
      <p>${post.title}</p>
    </small>
    <img src=${'../../images/' + post.image} class="img-fluid rounded list-img">
  </div>`)
}

export default PostSummaryItem;
