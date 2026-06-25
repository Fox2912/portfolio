const cards = Array.from(document.querySelectorAll(".student-card"));
const selectedCount = document.querySelector("#selectedCount");
const preview = document.querySelector("#preview");
const previewBody = document.querySelector("#previewBody");
const stayDate = document.querySelector("#stayDate");

stayDate.valueAsDate = new Date();

function updateCount() {
  selectedCount.textContent = String(cards.filter((card) => card.classList.contains("is-registered")).length);
}

cards.forEach((card) => {
  card.querySelector(".student-toggle").addEventListener("click", () => {
    const isRegistered = card.classList.toggle("is-registered");
    card.querySelector(".badge").textContent = isRegistered ? "登録済み" : "未登録";
    updateCount();
  });
});

document.querySelector("#clearAll").addEventListener("click", () => {
  cards.forEach((card) => {
    card.classList.remove("is-registered");
    card.querySelector(".badge").textContent = "未登録";
  });
  updateCount();
});

document.querySelector("#showPreview").addEventListener("click", () => {
  const rows = cards
    .filter((card) => card.classList.contains("is-registered"))
    .map((card) => {
      const room = card.querySelector("select").value;
      return `<tr><td>${card.dataset.number}</td><td>${card.dataset.name}</td><td>${room}</td><td>21:00</td></tr>`;
    });

  previewBody.innerHTML = rows.length
    ? rows.join("")
    : '<tr><td colspan="4">登録済みの学生はいません。</td></tr>';
  preview.hidden = false;
  preview.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#closePreview").addEventListener("click", () => {
  preview.hidden = true;
});
