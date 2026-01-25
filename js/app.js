const cards = document.querySelectorAll('.cards');
const getStartedBtn = document.querySelector(".get-started")
const cta = document.querySelector(".cta");
const step1Btn = document.querySelector("#step-one");
const step2Btn = document.querySelector("#step-two");
const step3Btn = document.querySelector("#step-three");
const step5Btn = document.querySelector("#step-five");
const step6Btn = document.querySelector("#step-six");
const backBtn = document.querySelector(".back-btn");

function goTo(url) {
  window.location.href = url
}

if(getStartedBtn) getStartedBtn.addEventListener('click', () => goTo("./step1.html"))
if(cta) cta.addEventListener('click', () => goTo("./step1.html"))
if (step1Btn) step1Btn.addEventListener('click', () => goTo("./step2.html"));
if (step2Btn) step2Btn.addEventListener('click', () => goTo("./step3.html"));
if (step3Btn) step3Btn.addEventListener('click', () => goTo("./step4.html"));
if (step5Btn) step5Btn.addEventListener('click', () => goTo("./step6.html"));
if (step6Btn) step6Btn.addEventListener('click', () => goTo("./result.html"));
if (backBtn) backBtn.addEventListener('click', () => goTo("./index.html"));

  
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Remove selection from all cards
    cards.forEach(c => c.classList.remove('selected'));
    
    // Add selection to clicked card
    card.classList.add('selected');

    // Get the value for calculations
    const value = card.dataset.value;
    console.log('Selected value:', value);

    // Use value in your calculations here
  });
});
