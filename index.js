const posts = [
  {
    name: 'Vincent van Gogh',
    username: 'vincey1853',
    location: 'Zundert, Netherlands',
    avatar: 'images/avatar-vangogh.jpg',
    post: 'images/post-vangogh.jpg',
    comment: 'just picked a few mushrooms in my garden',
    likes: 21,
  },
  {
    name: 'Gustave Courbet',
    username: 'gus1819',
    location: 'Ornans, France',
    avatar: 'images/avatar-courbet.jpg',
    post: 'images/post-courbet.jpg',
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: 'Joseph Ducreux',
    username: 'jd1735',
    location: 'Paris, France',
    avatar: 'images/avatar-ducreux.jpg',
    post: 'images/post-ducreux.jpg',
    comment:
      'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
    likes: 152,
  },
];

const feed = document.getElementById('feed');


let feedHTML = '';

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];

  feedHTML += `
    <article class="post">
      <header class="post-header">
        <div class="user-info">
          <img src="${post.avatar}" alt="Avatar of ${post.name}" class="user-img" />
          <div class="user-details">
            <h2 class="user-name">${post.name}</h2>
            <p class="user-location">${post.location}</p>
          </div>
        </div>
      </header>

      <img src="${post.post}" alt="Post by ${post.name}" class="post-img" />

      <div class="post-content">
        <section class="post-actions">
          <img src="./images/icon-heart.png" alt="Like post" class="icon" />
          <img src="./images/icon-comment.png" alt="Comment on post" class="icon" />
          <img src="./images/icon-dm.png" alt="Share post" class="icon" />
        </section>
        <p class="likes-text"><strong>${post.likes} likes</strong></p>
        <p class="post-caption">
          <strong>${post.username}</strong> ${post.comment}
        </p>
      </div>
    </article>
  `;
}


feed.innerHTML = feedHTML;
