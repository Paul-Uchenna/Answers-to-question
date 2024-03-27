document.addEventListener("DOMContentLoaded", function () {
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // Function to generate a random color

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Add event listener to the change-color-btn

  changeColorBtn.addEventListener("click", () => {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
});
