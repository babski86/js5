import { results } from "./results.js";
const jambuli = document.querySelector(".jambuli");
const img = document.createElement("img");
const aqvamateb = document.querySelector(".aqvamateb");
const butImg = document.querySelector(".buttonforimages");
img.setAttribute(
  "src",
  "https://fastly.picsum.photos/id/534/1000/800.jpg?hmac=tFbU1nZ2RnQNroI_ToBhH-LFB8KNjyWoc3bVv5G9Wkw",
);
aqvamateb.insertAdjacentElement("beforeend", img);
img.style.display = "block";
img.setAttribute("width", "200px");
img.style.margin = "auto";
img.setAttribute("alt", "img");
jambuli.style.marginLeft = "40%";
jambuli.addEventListener("click", () => {
  jambuli.remove();
});
const container = document.querySelector("#images-list");
function card() {
  let i = "";

  results.forEach((e) => {
    i += `
      <div class="mainCard border p-4 rounded-lg bg-white shadow-md">
        <img src="${e.webImage.url}" alt="img" class="w-full h-auto object-cover rounded"/> 
        <h2 class="text-xl font-bold mt-2">${e.title}</h2>
        <p class="text-sm text-gray-600 hidden">${e.longTitle}</p></p>
        <div class="mt-5 flex gap-2">
          <button class="seeMoreDetails bg-blue-500 text-white p-2 rounded text-xs">see more details</button>
          <button class="removeCard bg-red-500 text-white p-2 rounded text-xs">remove card</button>
        </div>
      </div>
    `;
  });

  container.innerHTML = i;
}

butImg.addEventListener("click", card, { once: true });

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("seeMoreDetails")) {
    const card = e.target.closest(".mainCard");
    const title = card.querySelector("p");
    title.classList.toggle("hidden");
    if (title.classList.contains("hidden")) {
      e.target.textContent = "see more details";
    } else {
      e.target.textContent = "see less details";
    }
  }
  if (e.target.classList.contains("removeCard")) {
    const card = e.target.closest(".mainCard");
    card.remove();
  }
});
// esaa meore varianti
// container.addEventListener("click", (e) => {
//   if (e.target.classList.contains("seeMoreDetails")) {
//     const card = e.target.closest(".mainCard");
//     const title = card.querySelector(".title");

//     if (title.textContent === "") {
//       const id = e.target.dataset.id;
//       const result = results.find((item) => item.id === id);
//       title.textContent = result.longTitle;
//     } else {
//       title.textContent = "";
//     }
//   }
// });
// container.addEventListener("click", (e) => {
//   if (e.target.classList.contains("removeCard")) {
//     const card = e.target.closest(".mainCard");
//     card.remove();
//   }
// });
