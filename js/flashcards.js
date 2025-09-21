// js/flashcards.js

// 1. サーバーからカードデータを取得
async function fetchFlashcards() {
  try {
    const res = await fetch("/api/flashcards");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching flashcards:", error);
    return [];
  }
}

// 2. 意味を表示/非表示に切り替える関数
function toggleMeaning(id) {
  const meaningEl = document.querySelector(`[data-meaning="${id}"]`);
  if (!meaningEl) return;

  if (meaningEl.classList.contains("hidden")) {
    meaningEl.classList.remove("hidden");
  } else {
    meaningEl.classList.add("hidden");
  }
}

// 3. カードを描画する関数
async function renderFlashcards(wordList) {
  const list = document.getElementById("flashcards-list");
  list.innerHTML = "";

  wordList.forEach((card) => {
    const flashcard = `
      <div class="flashcard">
        <div class="flashcard-content">
          <p class="flashcard-title">${card.word}</p>
          <!-- 意味表示ボタン -->
          <div class="flashcard-icons">
            <button class="flashcard-meaning" data-toggle="${card.id}">
              <span class="ri-eye-line"></span>
            </button>
          </div>
        </div>
        <!-- 意味（デフォルトは非表示） -->
        <div data-meaning="${card.id}" class="hidden">
          <p>${card.meaning}</p>
        </div>
      </div>
    `;
    list.innerHTML += flashcard;
  });
}

// 4. セットアップ関数
export async function setupFlashcards() {
  const wordList = await fetchFlashcards();
  await renderFlashcards(wordList);

  // カード一覧全体にイベントを仕込む（イベント委譲）
  const list = document.getElementById("flashcards-list");
  list.addEventListener("click", (event) => {
    const btn = event.target.closest(".flashcard-meaning");
    if (!btn) return; // 他の場所クリックなら無視

    const id = btn.dataset.toggle;
    toggleMeaning(id);
  });
}
