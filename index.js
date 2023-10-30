const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

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

    if (score === 10) {
      // 触发烟火效果，可以在这里调用显示烟火的函数或执行其他操作
      displayFireworks();
    }
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

// 添加一个显示烟火效果的函数
function displayFireworks() {
  // 创建烟火容器
  const fireworksContainer = document.createElement("div");
  fireworksContainer.className = "fireworks-container";
  document.body.appendChild(fireworksContainer);

  // 创建烟火粒子
  for (let i = 0; i < 30; i++) {
    const fireworkParticle = document.createElement("div");
    fireworkParticle.className = "firework-particle";
    fireworksContainer.appendChild(fireworkParticle);
  }

  // 添加烟火爆炸效果的 CSS 类
  fireworksContainer.classList.add("explode");

  // 移除烟火容器，以便下次触发烟火效果
  setTimeout(() => {
    document.body.removeChild(fireworksContainer);
  }, 2000); // 设置延迟时间以确保烟火效果完成
}

