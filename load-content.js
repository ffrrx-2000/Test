fetch("content.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("latest-dynamic");

    data.latest.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `
        <img src="${item.poster}" width="150">
        <p>${item.title}</p>
      `;
      container.appendChild(div);
    });
  });
