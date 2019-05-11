// // GET request to get info from a local text file
// function getText() {
//   fetch("sample.txt")
//     .then(res => res.text())
//     .then(data => {
//       document.getElementById("output").innerHTML = data;
//     })
//     .catch(err => console.log(err));
// }

// // GET request to users from a local json file
// function getUsers() {
//   fetch("users.json")
//     .then(res => res.json())
//     .then(data => {
//       let output = "<h2>Users</h2>";
//       data.map(function(user) {
//         // you can use forEach as well instead of map
//         output += `
//            <ul class="list-group mb-3">
//              <li class="list-group-item">ID: ${user.id}</li>
//              <li class="list-group-item">Name: ${user.name}</li>
//              <li class="list-group-item">Email: ${user.email}</li>
//            </ul>
//          `;
//       });
//       document.getElementById("output").innerHTML = output;
//     });
// }

// // GET request to get information for external url
// function getPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => {
//       let output = '<h2 class="mb-4">Posts</h2>';
//       data.map(function(post) {
//         // you can use forEach as well instead of map
//         output += `
//            <div class="card card-body mb-3">
//              <h3>${post.title}</h3>
//              <p>${post.body}</p>
//            </div>
//          `;
//       });
//       document.getElementById("output").innerHTML = output;
//     });
// }

// // POST request to add a post by user filled information
// function addPost(e) {
//   e.preventDefault();

//   let title = document.getElementById("title").value;
//   let body = document.getElementById("body").value;

//   fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       Accept: "application/json, text/plain, */*",
//       "Content-type": "application/json"
//     },
//     body: JSON.stringify({ title: title, body: body })
//   })
//     .then(res => res.json())
//     .then(data => console.log(data));
// }
