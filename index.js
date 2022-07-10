//# = document.getElementById;

const nextBtn = document.getElementById("nextButton");

const prevBtn = document.getElementById("prevButton");

const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");
const stepThree = document.getElementById("stepThree");

const steps = [stepOne, stepTwo, stepThree];
let stepTracker = 0;

nextBtn.addEventListener("click", () => {
  if (stepTracker === steps.length - 1) {
    return;
  } else {
    prevBtn.classList.remove("hiddenPresent");
    stepTracker++;
    if (stepTracker === steps.length - 1) {
      nextBtn.innerHTML = "Submit";
    }
    steps[stepTracker - 1].classList.add("hidden");
    steps[stepTracker].classList.remove("hidden");
  }
});

prevBtn.addEventListener("click", () => {
  if (stepTracker === 0) {
    return;
  } else {
    nextBtn.classList.remove("hiddenPresent");
    if (stepTracker === steps.length - 1) {
      nextBtn.innerHTML = "Next";
    }
    //if (stepTracker > 0) {
    stepTracker--;
    if (stepTracker === 0) prevBtn.classList.add("hiddenPresent");
    steps[stepTracker + 1].classList.add("hidden");
    steps[stepTracker].classList.remove("hidden");
    //}
  }
});
