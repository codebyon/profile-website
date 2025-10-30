document.getElementById("year").innerText = new Date().getFullYear();

// Animate skill bars when visible
const bars = document.querySelectorAll(".bar-fill");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.target + "%";
      }
    });
  },
  { threshold: 0.4 }
);
bars.forEach((bar) => observer.observe(bar));

// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const webLink = document.getElementById("web-link");
const igLink = document.getElementById("ig-link");
const close = document.getElementById("modal-close");

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    modalTitle.textContent = card.dataset.title;
    modalDesc.textContent = card.dataset.desc;

    // Update social links
    if (card.dataset.web) {
      webLink.href = card.dataset.web;
      webLink.style.display = "flex";
    } else {
      webLink.style.display = "none";
    }

    if (card.dataset.ig) {
      igLink.href = card.dataset.ig;
      igLink.style.display = "flex";
    } else {
      igLink.style.display = "none";
    }

    modal.classList.add("show");
  });
});

close.addEventListener("click", () => modal.classList.remove("show"));
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("show");
});
