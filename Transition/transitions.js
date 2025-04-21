document.addEventListener("DOMContentLoaded", () => {

    const block = document.getElementById("block");
    const durationInput = document.getElementById("duration");
    const easingSelect = document.getElementById("easing");
    const buttons = document.querySelectorAll(".transition-list button");

    //Apply Transition function
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

    //Transition types function
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

    //User Clicks the transition button
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const transitionType = button.classList[1];
            applyTransition(transitionType);
        })
    })

    //User enters duration
    durationInput.addEventListener("input", () => {
        const active = document.querySelector(".transition-btn .active");
        if (active) applyTransition(active.classList[1]);
      });
      
    //User selects easing type
    easingSelect.addEventListener("change", () => {
        const active = document.querySelector(".transition-btn .active");
        if (active) applyTransition(active.classList[1]);
      });

});