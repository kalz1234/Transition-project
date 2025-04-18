document.addEventListener("DOMContentLoaded", () => {
    const block = document.getElementById("block");
    const codeBlock = document.getElementById("codeBlock");
    const durationInput = document.getElementById("duration");
    const easingSelect = document.getElementById("easing");
    const iterationSelect = document.getElementById("iteration");
    const buttons = document.querySelectorAll(".animations-list button");
  
    let currentAnimation = "";
  
    function applyAnimation(animation) {
      const duration = durationInput.value;
      const select = easingSelect.value;
      const iterations = iterationSelect.value;
  
      block.className = "block";
      block.style.animation = "none";
      void block.offsetWidth;
  
      block.classList.add(animation);
      block.style.animation = `${animation} ${duration}s ${select} ${iterations}`;
      codeBlock.innerText = `animation: ${animation} ${duration}s ${select} ${iterations};`;
      currentAnimation = animation;
    }
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const animation = button.getAttribute("data-animation");
        applyAnimation(animation);
      });
    });
  
    [durationInput, easingSelect, iterationSelect].forEach(input => {
      input.addEventListener("input", () => {
        if (currentAnimation) {
          applyAnimation(currentAnimation);
        }
      });
    });
  });
  