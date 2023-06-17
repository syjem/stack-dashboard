document.addEventListener("DOMContentLoaded", () => {
  // Sidebar

  const dropdown1 = document.getElementById("dropdown1");
  const dropList1 = document.getElementById("drop-list1");
  const dropList2 = document.getElementById("drop-list2");
  const dropdown2 = document.getElementById("dropdown2");
  const chevron1 = document.getElementById("chevron1");
  const chevron2 = document.getElementById("chevron2");

  const hiddenClass = (styleElement, removeClass) => {
    styleElement.style.transform = "rotate(0deg)";
    removeClass.classList.remove("active");
  };

  const showClass = (styleElement, addClass) => {
    styleElement.style.transform = "rotate(180deg)";
    addClass.classList.add("active");
  };

  dropdown1.addEventListener("click", () => {
    dropList2.classList.add("hide");
    dropList1.classList.toggle("hide");

    dropList1.classList.contains("hide")
      ? hiddenClass(chevron1, dropdown1)
      : showClass(chevron1, dropdown1);

    dropList2.classList.contains("hide")
      ? hiddenClass(chevron2, dropdown2)
      : showClass(chevron2, dropdown2);
  });

  dropdown2.addEventListener("click", () => {
    dropList1.classList.add("hide");
    dropList2.classList.toggle("hide");

    dropList1.classList.contains("hide")
      ? hiddenClass(chevron1, dropdown1)
      : showClass(chevron1, dropdown2);

    dropList2.classList.contains("hide")
      ? hiddenClass(chevron2, dropdown2)
      : showClass(chevron2, dropdown2);
  });

  // Image modal
  const modal = document.querySelector(".img-modal");
  const img = document.querySelector(".project-image");
  const modalImage = document.getElementById("img1");
  const caption = document.getElementById("caption");

  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = img.src;
    caption.textContent = img.alt;
  });

  const close = document.querySelector(".close");

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Article section - Cards
  const articleContents = document.querySelector(".article-contents");

  const card = (img, title, info) => {};

  articleContents.append(card);
});
