document.addEventListener("DOMContentLoaded", () => {
  const dropdown1 = document.getElementById("dropdown1");
  const dropList1 = document.getElementById("drop-list1");
  const dropList2 = document.getElementById("drop-list2");
  const dropdown2 = document.getElementById("dropdown2");
  const chevron1 = document.getElementById("chevron1");
  const chevron2 = document.getElementById("chevron2");

  dropdown1.addEventListener("click", () => {
    dropList1.classList.toggle("hide");

    dropList1.classList.contains("hide")
      ? (chevron1.style.transform = "rotate(0deg)")
      : (chevron1.style.transform = "rotate(-180deg)");
  });
  dropdown2.addEventListener("click", () => {
    dropList2.classList.toggle("hide");

    dropList2.classList.contains("hide")
      ? (chevron2.style.transform = "rotate(0deg)")
      : (chevron2.style.transform = "rotate(-180deg)");
  });
});
