// ここからコードを書いてください
// setupTabs 関数をインポート
import { setupTabs } from "./js/tabs.js";
import { setupConverter } from "./js/converter.js";

// DOMが読み込まれた後に setupTabs を呼び出す
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  setupConverter();
});
