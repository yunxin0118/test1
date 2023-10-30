const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const fireworksCanvas = document.getElementById("fireworksCanvas");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();

    // 檢查分數是否達到10，如果是，觸發煙火效果
    if (score === 10) {
      triggerFireworks();
    }
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

function triggerFireworks() {
  // 在這裡添加觸發煙火效果的程式碼
  fireworksCanvas.style.display = "block"; // 顯示 canvas 元素
  startFireworks();
}

function startFireworks() {
  // 在這裡實現煙火效果的 JavaScript 程式碼
  // 您可以使用 HTML5 canvas 和 JavaScript 繪製煙火效果
  // 這個部分需要較複雜的程式碼，包括動畫和粒子效果

  // 下面是一個簡單的例子，創建一個簡單的煙火效果
  const ctx = fireworksCanvas.getContext("2d");

  function createFirework(x, y) {
    // 在這裡繪製煙火
    // 這只是一個簡單的示例，您可以自訂更複雜的煙火效果
  }

  // 調用 createFirework 函數，產生煙火效果
  createFirework(fireworksCanvas.width / 2, fireworksCanvas.height / 2);
}
