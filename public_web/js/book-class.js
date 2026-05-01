const locationFilter = document.getElementById("locationFilter");

if (locationFilter) {
  locationFilter.addEventListener("change", () => {
    console.log("Location selected:", locationFilter.value);
  });
}