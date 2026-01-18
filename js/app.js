// Select all option cards
const options = document.querySelectorAll(".option");

// Add click event to each option
options.forEach(option => {
  option.addEventListener("click", () => {
    // Remove selected class from all options
    options.forEach(opt => opt.classList.remove("selected"));

    // Add selected class to the clicked option
    option.classList.add("selected");

    // (Optional) Get selected value
    const selectedValue = option.getAttribute("data-option");
    console.log("Selected option:", selectedValue);
  });
});
