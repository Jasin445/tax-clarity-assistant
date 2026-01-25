document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".progress-green");
  const progressText = document.querySelector(".progress-text");
  const steps = document.querySelectorAll(".step");
  const step4Btn = document.querySelector("#step-four");

function goTo(url) {
  window.location.href = url
}
  
  let progress = 0;

  const checkpoints = [
    { percent: 30, stepIndex: 0 },
    { percent: 60, stepIndex: 1 },
    { percent: 90, stepIndex: 2 }
  ];

  const interval = setInterval(() => {
    progress++;

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;

    checkpoints.forEach(({ percent, stepIndex }) => {
      if (progress >= percent) {
        const step = steps[stepIndex];
        if (!step || step.classList.contains("done")) return;

        step.classList.remove("pending");
        step.classList.add("done");

        const icon = step.firstElementChild;
        const check = step.children[1];

        if (icon && check) {
          icon.classList.add("hide");
          check.classList.remove("hide");
        }
      }
    });
    console.log(progress, step4Btn)
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        console.log("Analysis complete"), 800;
        goTo("./step5.html");
      });
    }
  }, 40);
});
