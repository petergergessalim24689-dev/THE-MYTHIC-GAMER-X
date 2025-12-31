document.addEventListener('DOMContentLoaded', function () {
  /* ======================
      1️⃣ السلايدر
  ====================== */
  document.querySelectorAll('.treanding-container').forEach((container) => {
    const cards = container.querySelector('.treanding-cards');
    const leftBtn = container.querySelector('.slider-btn.left');
    const rightBtn = container.querySelector('.slider-btn.next');

    rightBtn.addEventListener('click', () => {
      cards.scrollLeft += 300;
    });

    leftBtn.addEventListener('click', () => {
      cards.scrollLeft -= 300;
    });
  });
  

  /* ======================
      2️⃣ البحث
     ====================== */
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');

  function searchGames() {
    const value = searchInput.value.toLowerCase().trim();
    const allCards = document.querySelectorAll('.card');

    allCards.forEach((card) => {
      const title = card.querySelector('h3, h2');
      if (!title) return;

      const text = title.textContent.toLowerCase();
      card.style.display =
        text.includes(value) || value === '' ? 'flex' : 'none';
    });
  }

  if (searchInput && searchBtn) {
    searchBtn.onclick = searchGames;
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') searchGames();
    });
  }

  /* ======================
      3️⃣ زر الرجوع للأعلى
  ====================== */
  const scrollBtn = document.createElement('button');
  scrollBtn.textContent = '↑';
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

  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
});

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

function searchGames() {
  const value = searchInput.value.trim().toLowerCase();
  const allContainers = document.querySelectorAll('.treanding-cards');

  allContainers.forEach((container) => {
    const cards = container.querySelectorAll('.card');
    let anyVisible = false;

    cards.forEach((card) => {
      // ناخد النص بس من العنوان داخل الكارت
      const title = card.querySelector('h2, h3');
      if (!title) return;

      const text = title.innerText.toLowerCase();

      if (text.includes(value) || value === '') {
        card.style.display = 'flex'; // نظهر الكارت
        anyVisible = true;
      } else {
        card.style.display = 'none'; // نخفي الكارت
      }
    });

    // نخفي الصف بالكامل لو مافيش كارت ظاهر
    container.style.display = anyVisible ? 'flex' : 'none';
  });

  // بعد البحث نخفي أي عناصر جانبية أو اسماء الصفوف داخل الكونتينر
  const allTitles = document.querySelectorAll(
    '.treanding-cards > h2, .treanding-cards > h3'
  );
  allTitles.forEach((t) => (t.style.display = 'none'));

  // لو في عناصر جانبية (فيو لينك مثلا) جوا الكارت، نخليهم ثابتين داخل الكارت
  const allSideElements = document.querySelectorAll('.card > .side-element');
  allSideElements.forEach((el) => {
    el.style.position = 'absolute'; // أو display: inline-block حسب التصميم
    el.style.width = 'auto';
  });
}

searchBtn.addEventListener('click', searchGames);
searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') searchGames();
});

window.addEventListener('load', () => {
  document.querySelectorAll('.treanding-container').forEach((section) => {
    section.style.display = 'block';
  });

  document.querySelectorAll('.card').forEach((card) => {
    card.style.display = 'block';
  });
});
