let info = [
  { img: "./assets/images/linux (1).png", title: "Linux Wallpaper 1" },
  { img: "./assets/images/linux (1).png", title: "Linux Wallpaper 2" },
  { img: "./assets/images/linux (1).png", title: "Linux Wallpaper 3" },
  { img: "./assets/images/linux (1).png", title: "Linux Wallpaper 4" },
];

let mailELem = document.querySelector("main");

info.forEach((item) => {
  mailELem.insertAdjacentHTML(
    "beforeend",
    ` <div class="info-container">
          <img src="${item.img}"/>
          <div class="info">
            <p class="title">${item.title}</p>
            <p class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
              sunt nemo, est quod molestias fugit quaerat aperiam dolorem vel
              laborum, beatae, magnam itaque cupiditate. Quis maxime illo mollitia
              odit perferendis.
            </p>
          </div>
        </div>`
  );
});
