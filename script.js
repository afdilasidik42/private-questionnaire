const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");


noBtn.addEventListener("mouseover", () => {
  const containerWidth = questionContainer.offsetWidth;
  const containerHeight = questionContainer.offsetHeight;

  const buttonWidth = noBtn.offsetWidth;
  const buttonHeight = noBtn.offsetHeight;

  const maxX = containerWidth - buttonWidth;
  const maxY = containerHeight - buttonHeight;

  const currentX = parseInt(noBtn.style.left) || 0;
  const currentY = parseInt(noBtn.style.top) || 0;

  let newX, newY;
  const minDistance = 100;
  let distance = 0;

  let attempts = 0;
  const maxAttempts = 10;

  do {
    newX = Math.floor(Math.random() * maxX);
    newY = Math.floor(Math.random() * maxY);

    const deltaX = Math.abs(newX - currentX);
    const deltaY = Math.abs(newY - currentY);
    distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    attempts++;
    if (attempts >= maxAttempts) {
      console.warn("Max attempts reached. Using fallback coordinates.");
      break;
    }
  } while (distance < minDistance);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;

  console.log(`Moved to: (${newX}px, ${newY}px), Distance: ${distance}px`);
});


yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});