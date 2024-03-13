// document.addEventListener("DOMContentLoaded", function () {
//     const tabContents = document.querySelectorAll(
//         ".dis-tab-container .dis-bs-card"
//     );
//     function filterTabsByCategory(category) {
//         tabContents.forEach((tabContent) => {
//             if (
//                 tabContent.getAttribute("data-category") === category ||
//                 category === "All"
//             ) {
//                 tabContent.style.display = "flex";
//             } else {
//                 tabContent.style.display = "none";
//             }
//         });
//     }
//     document
//         .getElementById("dis-cat")
//         .addEventListener("change", function () {
//             const selectedCategory = this.value;
//             filterTabsByCategory(selectedCategory);
//         });
//     const initialCategory = document.getElementById("dis-cat").value;
//     filterTabsByCategory(initialCategory);
// });

function redirectToPage(selectElement) {
    var selectedValue = selectElement.value;
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  }