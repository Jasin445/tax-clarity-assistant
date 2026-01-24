document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.querySelector(".progress");
  const progressText = document.querySelector(".progress-text");
  const steps = document.querySelectorAll(".step");

  let progress = 0;

  // Step checkpoints (percentages)
  const checkpoints = [
    { percent: 30, stepIndex: 0 },
    { percent: 60, stepIndex: 1 },
    { percent: 90, stepIndex: 2 }
  ];

  const interval = setInterval(() => {
    progress += 1;

    // Update progress bar
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;

    // Update steps
    checkpoints.forEach(point => {
      if (progress >= point.percent) {
        const step = steps[point.stepIndex];
        step.classList.remove("pending");
        step.classList.add("done");
        step.querySelector(".icon").textContent = "✔";
      }
    });

    // Finish
    if (progress >= 100) {
      clearInterval(interval);

      // Optional: redirect after completion
      setTimeout(() => {
        // window.location.href = "result.html";
        console.log("Analysis complete");
      }, 800);
    }
  }, 40); // speed control
});
