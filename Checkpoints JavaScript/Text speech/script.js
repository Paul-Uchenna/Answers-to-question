document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("speechInput");
  const speak = document.getElementById("speechButton");

  speak.addEventListener("click", function () {
    const text = input.value;
    const utterance = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(utterance);
  });
});
