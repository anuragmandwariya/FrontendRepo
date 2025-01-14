// Example: Dynamically load blog posts
document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts');
    const userPostsContainer = document.getElementById('userPosts');

    const posts = [
        { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
        { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' }
    ];

    function displayPosts() {
        postsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    function displayUserPosts() {
        userPostsContainer.innerHTML = '';
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <button onclick="editPost(${post.id})">Edit</button>
                <button onclick="deletePost(${post.id})">Delete</button>
            `;
            userPostsContainer.appendChild(postElement);
        });
    }

    function editPost(id) {
        const post = posts.find(p => p.id === id);
        if (post) {
            const newContent = prompt('Edit your post content:', post.content);
            if (newContent) {
                post.content = newContent;
                displayUserPosts();
            }
        }
    }

    function deletePost(id) {
        const postIndex = posts.findIndex(p => p.id === id);
        if (postIndex > -1) {
            posts.splice(postIndex, 1);
            displayUserPosts();
        }
    }

    displayPosts();
    displayUserPosts();

    document.getElementById('createPost').addEventListener('click', () => {
        const title = prompt('Enter post title:');
        const content = prompt('Enter post content:');
        if (title && content) {
            const newPost = { id: Date.now(), title, content };
            posts.push(newPost);
            displayUserPosts();
        }
    });
});
