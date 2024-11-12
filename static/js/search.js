document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const suggestions = document.getElementById("suggestions");
  const searchContainer = document.querySelector(".relative");

  fetch("/index.json")
    .then((response) => response.json())
    .then((data) => {
      searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        suggestions.innerHTML = "";

        if (query.length > 0) {
          const filteredPosts = data.filter(
            (post) =>
              post.title.toLowerCase().includes(query) ||
              (post.excerpt && post.excerpt.toLowerCase().includes(query))
          );

          filteredPosts.forEach((post) => {
            const suggestionItem = document.createElement("div");
            suggestionItem.classList.add(
              "suggestion-item",
              "p-2",
              "border-b",
              "border-gray-700",
              "hover:bg-gray-700",
              "transition-colors"
            );
            suggestionItem.innerHTML = `
              <a href="${post.link}" class="text-green-400 font-medium hover:text-green-300 hover:underline transition-colors duration-200">
                ${post.title}
              </a>
            `;
            suggestions.appendChild(suggestionItem);
          });

          suggestions.style.display =
            filteredPosts.length > 0 ? "block" : "none";
        } else {
          suggestions.style.display = "none";
        }
      });

      document.addEventListener("click", function (e) {
        if (
          !searchContainer.contains(e.target) &&
          suggestions !== e.target &&
          !suggestions.contains(e.target)
        ) {
          suggestions.style.display = "none";
        }
      });
    })
    .catch((error) => console.error("Error fetching search data:", error));
});
