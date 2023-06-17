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

  const createCard = (image, title, info) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";

    projectCard.innerHTML = `<span class="project-img-wrapper">${image}</span>
          <h2 class="project-title">${title}</h2> 
          <p class="project-info">${info}</p>
          <div class="project-stacks">
            <h3>Built with:</h3>
            <i class="bx bxl-react" style="color: #61dbfb"></i>
            <img src="img/icons8-tailwindcss.svg" alt="Tailwind" />
          </div>       
        `;

    return projectCard;
  };

  const projects = [
    {
      image: "<img src='img/projects/project-2.png' alt='Project Image' />",
      title: "Portfolio Dashboard",
      info: "Info about Project 2",
    },
    {
      image: "<img src='img/projects/project-3.jpg' alt='Project Image' />",
      title: "Housing Plan",
      info: "Info about Project 3",
    },
    {
      image: "<img src='img/projects/project-5.png' alt='Project Image' />",
      title: "Development Software Manager",
      info: "Info about Project 4",
    },
    {
      image: "<img src='img/projects/project-6.png' alt='Project Image' />",
      title: "Meta Spark",
      info: "Info about Project 5",
    },
    {
      image: "<img src='img/projects/project-7.png' alt='Project Image' />",
      title: "Return of Investment Calculator",
      info: "Info about Project 6",
    },
    {
      image: "<img src='img/projects/project-9.png' alt='Project Image' />",
      title: "Delivery Tracker",
      info: "Info about Project 7",
    },
  ];

  projects.forEach((project) => {
    const { image, title, info } = project;
    const projectCardElement = createCard(image, title, info);
    articleContents.append(projectCardElement);
  });
});
