document.addEventListener("DOMContentLoaded", () => {
  // Header Scroll
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    window.scrollY > 0
      ? (header.style.boxShadow = "var(--box-shadow)")
      : (header.style.boxShadow = "none");
  });

  // Toggle dark mode
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.querySelector("body");
  const root = document.querySelector(":root");

  const replaceClass = (replace, newClass) => {
    themeToggle.classList.replace(replace, newClass);
  };

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    body.classList.contains("dark")
      ? replaceClass("bx-sun", "bx-moon")
      : replaceClass("bx-moon", "bx-sun");

    const setCustomProperty = (property, value) => {
      root.style.setProperty(property, value);
    };

    themeToggle.classList.contains("bx-moon")
      ? (setCustomProperty("--clr-light-text", "#fff"),
        setCustomProperty("--clr-bg-body", "#1a3247"),
        setCustomProperty("--box-shadow", "0 1px 3px 1px #020617"))
      : (setCustomProperty("--clr-light-text", "#0f172a"),
        setCustomProperty("--clr-bg-body", "#e7f2fd"),
        setCustomProperty('--box-shadow', '0 1px 3px 1px #97a4b9'));
  });

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

  // Show and Close sidebar on mobile
  const sidebar = document.querySelector('.sidebar');
  const article = document.querySelector('.article');
  const menu = document.getElementById('hamburger');
  const closeSidebar = document.getElementById('sidebar-x');

  menu.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    header.classList.add('opacity-x');
    article.classList.add('opacity-x');
  });

  closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('show');
    header.classList.remove('opacity-x');
    article.classList.remove('opacity-x');
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
            <i class="bx bxl-flask" style="color: var(--clr-light-text)"></i>
          </div>       
        `;

    return projectCard;
  };

  const projects = [
    {
      image:
        "<img src='img/projects/project-1.jpg' alt='FinTrack' class='project-image' />",
      title: "FinTrack",
      info: "Financial tracker. Provides a user-friendly interface for monitoring and analyzing financial data in real-time.",
    },
    {
      image:
        "<img src='img/projects/project-2.png' alt='InvestMate' class='project-image' />",
      title: "InvestMate",
      info: "Serves as a comprehensive investment platform that enables users to invest in stocks and manage their portfolio in a seamless and user-friendly manner. ",
    },
    {
      image:
        "<img src='img/projects/project-5.png' alt='DSM' class='project-image' />",
      title: "DSM",
      info: "Build beautiful products, faster. A professional design libraries for UI designers.",
    },
    {
      image:
        "<img src='img/projects/project-3.jpg' alt='Foundation' class='project-image' />",
      title: "Foundation",
      info: "We'll build the house of your Dream. Provide's customers with the flexibility to choose from a range of house designs.",
    },
    {
      image:
        "<img src='img/projects/project-9.png' alt='SwiftTrace' class='project-image' />",
      title: "SwiftTrace",
      info: "Delivery tracker application allows users to monitor the progress and location of their packages as they are being delivered.",
    },
    {
      image:
        "<img src='img/projects/project-6.png' alt='Meta Spark' class='project-image' />",
      title: "Meta Spark",
      info: "MetaSpark revolutionizes project management by empowering project managers with an AI assistant that automates administrative tasks.",
    },
  ];

  projects.forEach((project) => {
    const { image, title, info } = project;
    const projectCardElement = createCard(image, title, info);
    articleContents.appendChild(projectCardElement);
  });

  // Image modal
  const modal = document.querySelector(".img-modal");
  const img = document.querySelectorAll(".project-image");
  const modalImage = document.getElementById("img1");
  const caption = document.getElementById("caption");
  const close = document.querySelector(".close");

  img.forEach((pic) => {
    pic.addEventListener("click", () => {
      modal.style.display = "block";
      modalImage.src = pic.src;
      caption.textContent = pic.alt;
    });
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
