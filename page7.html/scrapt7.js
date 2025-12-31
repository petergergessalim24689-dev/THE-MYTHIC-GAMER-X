document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  function searchGames() {
    const value = searchInput.value.trim().toLowerCase();
    const allContainers = document.querySelectorAll('.treanding-cards');

    allContainers.forEach((container) => {
      const cards = container.querySelectorAll('.card');
      let anyVisible = false; // نعرف لو فيه كروت ظاهرة

      cards.forEach((card) => {
        const title = card.querySelector('h3, h2');
        if (!title) return;

        const text = title.innerText.toLowerCase();
        if (text.includes(value) || value === '') {
          card.style.display = 'flex';
          anyVisible = true;
        } else {
          card.style.display = 'none';
        }
      });

      // لو مافيش كروت ظاهرة في الكارد، نخفي الكونتينر بالكامل
      container.style.display = anyVisible ? 'flex' : 'none';
    });
  }

  searchBtn.addEventListener('click', searchGames);
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') searchGames();
  });
});

const row = document.querySelector('.games-row');

document.getElementById('next').onclick = () => {
  row.scrollLeft += 300;
};

document.getElementById('prev').onclick = () => {
  row.scrollLeft -= 300;
};

const mainVideo = document.querySelector(".main-video video");
const mainTitle = document.querySelector(".main-video h2");
const mainDesc  = document.querySelector(".main-video p");

// ==========================
// 3️⃣ الفيديوهات الجانبية
// ==========================
const sideCards = document.querySelectorAll(".side-card");

sideCards.forEach(card => {
  card.addEventListener("click", () => {

    const video = card.querySelector("video");
    const title = card.querySelector("p").innerText;

    if (!video) return;

    console.log("▶️ Side video clicked:", title);

    // تغيير الفيديو الرئيسي
    mainVideo.src = video.querySelector("source").src;
    mainVideo.load();
    mainVideo.play();

    // تغيير النص
    mainTitle.textContent = title;
    mainDesc.textContent = "فيديو من القناة - مشاهدة مباشرة";

    // تأثير بسيط
    sideCards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});

// ==========================
// 4️⃣ زر الرجوع للأعلى
// ==========================
const scrollBtn = document.createElement("button");
scrollBtn.textContent = "↑";
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 14px;
  font-size: 18px;
  border-radius: 50%;
  border: none;
  background: #ff2323;
  color: white;
  cursor: pointer;
  display: none;
  z-index: 999;
`;
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.body.appendChild(scrollBtn);

  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


document.getElementById('leftBtn').onclick = () => {
  console.log('Left clicked');
};

document.getElementById('rightBtn').onclick = () => {
  console.log('Right clicked');
};