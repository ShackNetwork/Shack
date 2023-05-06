function addGameIcon(game) {
  var icon = document.createElement("div");
  icon.classList.add("game-icon");

  icon.onclick = function () {
    window.location.href = game.path;
  };

  var img = document.createElement("img");
  img.src = game.image;
  img.alt = game.name;
  img.width = "128";
  img.height = "128";
  icon.appendChild(img);

  var title = document.createElement("h2");
  title.textContent = game.name;
  icon.appendChild(title);

  var gameRow = document.querySelector(".games-row");
  gameRow.appendChild(icon);
}

fetch("games.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.games.forEach(function (game) {
      addGameIcon(game);
    });
  })
  .catch(function (err) {
    console.error(err);
  });