document.addEventListener("DOMContentLoaded", () => {

    const box = document.getElementById("box");
    const block = document.getElementById("block");
    const durationInput = document.getElementById("duration");
    const easingSelect = document.getElementById("easing");
    const buttons = document.querySelectorAll(".transition-list button");


    function applyTransition(transition){
        const duration = durationInput.value;
        const select = easingSelect.value;
        block.style.transition = "none";
        void block.offsetWidth;
        block.className = "block";
        void block.offsetWidth;

        block.style.transition = `${transitionTypes(transition)} ${duration}s ${select}`
        block.classList.add(transition);

    }

    function transitionTypes(type){
        const transition = {
            "fade": "opacity",
            "slide-right": "transform",
            "slide-up": "transform",
            "rotate": "transform",
            "scale": "transform",
            "color": "background-color",
            "shadow": "box-shadow",
            "skew": "transform"
        }

        return transition[type] || "all";
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const transitionType = button.classList[1];
            applyTransition(transitionType);
        })
    })

    durationInput.addEventListener("input", () => {
        const active = document.querySelector(".transition-btn.active");
        if (active) applyTransition(active.classList[1]);
      });
      
    easingSelect.addEventListener("change", () => {
        const active = document.querySelector(".transition-btn.active");
        if (active) applyTransition(active.classList[1]);
      });

});