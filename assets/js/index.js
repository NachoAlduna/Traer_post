const getPosts = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();

    if (data !== null) {
      const postDataDiv = document.getElementById("post-data");
      postDataDiv.innerHTML = ""; // Limpia el contenido previo del div

      const postList = document.createElement("ul"); // Crea un elemento <ul> para la lista

      const postElements = data
        .filter((post) => post.id < 6)
        .map((post) => {
          const listItem = document.createElement("li"); // Crea un elemento <li> para cada post
          const postTitle = document.createElement("h3");
          postTitle.textContent = `${post.title}`; // Establece el título
          const postBody = document.createElement("p");
          postBody.textContent = `${post.body}`; // Establece el cuerpo sin índice

          listItem.appendChild(postTitle);
          listItem.appendChild(postBody);
          return listItem; // Retorna el elemento <li> completo
        });

      // Agrega cada elemento <li> a la lista <ul>
      postElements.forEach((postElement) => postList.appendChild(postElement));

      // Agrega la lista <ul> al div principal
      postDataDiv.appendChild(postList);
    }
  } catch (error) {
    console.log(error);
  }
};
