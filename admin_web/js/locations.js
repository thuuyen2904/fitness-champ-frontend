const locationData = [
  {
    id: "ebe50087...",
    name: "Primerose",
    address: "X9QF+5XH, Madinat Hind 4, Damac",
    city: "Dubai",
    country: "United Arab Emirates",
    status: "Active",
    addressLine1: "X9QF+5XH, Madinat Hind 4, Damac",
    addressLine2: "",
    state: "",
    postalCode: "",
    description: "",
    googleMap1: "",
    googleMap2: "",
    active: true
  },
  {
    id: "3a1cd298...",
    name: "hitest",
    address: "Al Yufrah 2 Coursetia at AKOYA - Da",
    city: "Damac hills 2",
    country: "Singapore",
    status: "Active",
    addressLine1: "Al Yufrah 2 Coursetia at AKOYA - Damac Hills - Dubai - United Arab Emirates",
    addressLine2: "",
    state: "",
    postalCode: "",
    description: "test",
    googleMap1: "",
    googleMap2: "",
    active: true
  },
  {
    id: "999c3733...",
    name: "Victoria",
    address: "X9JM+76, Madinat Hind 4, Damac H",
    city: "Dubai",
    country: "United Arab Emirates",
    status: "Active",
    addressLine1: "X9JM+76, Madinat Hind 4, Damac H",
    addressLine2: "",
    state: "",
    postalCode: "",
    description: "",
    googleMap1: "",
    googleMap2: "",
    active: true
  },
  {
    id: "399d6328...",
    name: "Basswood",
    address: "Madinat Hind 4, Damac Hills",
    city: "Dubai",
    country: "United Arab Emirates",
    status: "Inactive",
    addressLine1: "Madinat Hind 4, Damac Hills",
    addressLine2: "",
    state: "",
    postalCode: "",
    description: "",
    googleMap1: "",
    googleMap2: "",
    active: false
  },
  {
    id: "8e9c114b...",
    name: "Coursetia",
    address: "Al Yufrah 2, Coursetia at AKOYA, Da",
    city: "Dubai",
    country: "United Arab Emirates",
    status: "Active",
    addressLine1: "Al Yufrah 2, Coursetia at AKOYA, Da",
    addressLine2: "",
    state: "",
    postalCode: "",
    description: "",
    googleMap1: "",
    googleMap2: "",
    active: true
  },
  {
    id: "e22db707...",
    name: "Test",
    address: "Dubai",
    city: "Dubai",
    country: "Singapore",
    status: "Active",
    addressLine1: "Dubai",
    addressLine2: "",
    state: "",
    postalCode: "",
    description: "",
    googleMap1: "",
    googleMap2: "",
    active: true
  },
  {
    id: "00000000...",
    name: "Dubai Sports City",
    address: "Dubai Sports City",
    city: "Dubai",
    country: "AE",
    status: "Active",
    addressLine1: "Dubai Sports City",
    addressLine2: "",
    state: "",
    postalCode: "",
    description: "",
    googleMap1: "",
    googleMap2: "",
    active: true
  },
  {
    id: "a1b2c3d4...",
    name: "Marina Pool",
    address: "Marina Walk, Dubai Marina",
    city: "Dubai",
    country: "United Arab Emirates",
    status: "Active",
    addressLine1: "Marina Walk, Dubai Marina",
    addressLine2: "",
    state: "",
    postalCode: "",
    description: "",
    googleMap1: "",
    googleMap2: "",
    active: true
  },
  {
    id: "x9y8z7k6...",
    name: "Sentosa Bay",
    address: "Sentosa Island Resort",
    city: "Singapore",
    country: "Singapore",
    status: "Inactive",
    addressLine1: "Sentosa Island Resort",
    addressLine2: "",
    state: "",
    postalCode: "",
    description: "",
    googleMap1: "",
    googleMap2: "",
    active: false
  }
];

let filteredLocationData = [...locationData];
let currentLocationPage = 1;
let locationRowsPerPage = 20;
let selectedLocationId = null;

const locationsTableBody = document.getElementById("locationsTableBody");
const exportLocationBtn = document.getElementById("exportLocationBtn");

const filterLocationName = document.getElementById("filterLocationName");
const filterLocationCity = document.getElementById("filterLocationCity");
const filterLocationCountry = document.getElementById("filterLocationCountry");
const filterLocationStatus = document.getElementById("filterLocationStatus");

const createModal = document.getElementById("createLocationModal");
const openCreateLocationBtn = document.getElementById("openCreateLocation");
const closeCreateLocationBtn = document.getElementById("closeCreateLocation");
const cancelCreateLocationBtn = document.getElementById("cancelCreateLocation");
const submitCreateLocation = document.getElementById("submitCreateLocation");

const editModal = document.getElementById("editLocationModal");
const closeEditLocationBtn = document.getElementById("closeEditLocation");
const cancelEditLocationBtn = document.getElementById("cancelEditLocation");
const submitEditLocation = document.getElementById("submitEditLocation");
const deleteEditLocation = document.getElementById("deleteEditLocation");

const deleteLocationConfirmModal = document.getElementById("deleteLocationConfirmModal");
const cancelDeleteLocation = document.getElementById("cancelDeleteLocation");
const confirmDeleteLocation = document.getElementById("confirmDeleteLocation");

const locationSuccessToast = document.getElementById("locationSuccessToast");
const closeLocationSuccessToast = document.getElementById("closeLocationSuccessToast");
const locationUpdateToast = document.getElementById("locationUpdateToast");
const closeLocationUpdateToast = document.getElementById("closeLocationUpdateToast");
const locationDeleteToast = document.getElementById("locationDeleteToast");
const closeLocationDeleteToast = document.getElementById("closeLocationDeleteToast");

const editLocationName = document.getElementById("editLocationName");
const editAddressLine1 = document.getElementById("editAddressLine1");
const editAddressLine2 = document.getElementById("editAddressLine2");
const editCity = document.getElementById("editCity");
const editState = document.getElementById("editState");
const editPostalCode = document.getElementById("editPostalCode");
const editCountry = document.getElementById("editCountry");
const editDescription = document.getElementById("editDescription");
const editGoogleMap1 = document.getElementById("editGoogleMap1");
const editGoogleMap2 = document.getElementById("editGoogleMap2");
const editLocationActive = document.getElementById("editLocationActive");

function getLocationFooterEls() {
  return {
    countText:
      document.getElementById("locationCountText") ||
      document.querySelector("#tableFooterRoot .count-text") ||
      document.querySelector(".count-text"),
    rowsPill:
      document.getElementById("locationRowsPill") ||
      document.querySelector("#tableFooterRoot .rows-pill") ||
      document.querySelector(".rows-pill"),
    prevBtn:
      document.getElementById("locationPrevBtn") ||
      document.querySelector("#tableFooterRoot #prevBtn") ||
      document.querySelector("#prevBtn"),
    nextBtn:
      document.getElementById("locationNextBtn") ||
      document.querySelector("#tableFooterRoot #nextBtn") ||
      document.querySelector("#nextBtn")
  };
}

function renderLocationsTable() {
  if (!locationsTableBody) return;

  const { countText, prevBtn, nextBtn } = getLocationFooterEls();
  locationsTableBody.innerHTML = "";

  const startIndex = (currentLocationPage - 1) * locationRowsPerPage;
  const endIndex = startIndex + locationRowsPerPage;
  const pageData = filteredLocationData.slice(startIndex, endIndex);

  pageData.forEach((item) => {
    const row = document.createElement("div");
    row.className = "location-row";
    row.innerHTML = `
      <div class="col id">${item.id}</div>
      <div class="col name">${item.name}</div>
      <div class="col address">${item.address}</div>
      <div class="col city">${item.city}</div>
      <div class="col country">${item.country}</div>
      <div class="col status">${item.status}</div>
    `;

    row.addEventListener("click", () => {
      openEditLocationModal(item.id);
    });

    locationsTableBody.appendChild(row);
  });

  const showingFrom = filteredLocationData.length === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(endIndex, filteredLocationData.length);

  if (countText) {
    countText.textContent = `Showing ${showingFrom} - ${showingTo} of ${filteredLocationData.length}`;
  }

  const totalPages = Math.ceil(filteredLocationData.length / locationRowsPerPage) || 1;

  if (prevBtn) prevBtn.disabled = currentLocationPage === 1;
  if (nextBtn) nextBtn.disabled = currentLocationPage >= totalPages;
}

function applyLocationFilters() {
  const name = filterLocationName ? filterLocationName.value.trim().toLowerCase() : "";
  const city = filterLocationCity ? filterLocationCity.value.trim().toLowerCase() : "";
  const country = filterLocationCountry ? filterLocationCountry.value.trim().toLowerCase() : "";
  const status = filterLocationStatus ? filterLocationStatus.value.trim().toLowerCase() : "";

  filteredLocationData = locationData.filter((item) => {
    return (
      (!name || item.name.toLowerCase().includes(name)) &&
      (!city || item.city.toLowerCase().includes(city)) &&
      (!country || item.country.toLowerCase().includes(country)) &&
      (!status || status === "all" || item.status.toLowerCase().includes(status))
    );
  });

  currentLocationPage = 1;
  renderLocationsTable();
}

function exportLocationsToCSV() {
  const headers = ["ID", "Name", "Address", "City", "Country", "Status"];
  const csvRows = [
    headers.join(","),
    ...filteredLocationData.map((item) =>
      [
        item.id,
        `"${item.name}"`,
        `"${item.address}"`,
        `"${item.city}"`,
        `"${item.country}"`,
        item.status
      ].join(",")
    )
  ];

  const blob = new Blob([csvRows.join("\n")], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "locations.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function showToast(toastEl, timerKey) {
  if (!toastEl) return;

  toastEl.classList.add("show");

  if (window[timerKey]) {
    clearTimeout(window[timerKey]);
  }

  window[timerKey] = setTimeout(() => {
    toastEl.classList.remove("show");
    window[timerKey] = null;
  }, 3000);
}

function hideToast(toastEl, timerKey) {
  if (!toastEl) return;

  toastEl.classList.remove("show");

  if (window[timerKey]) {
    clearTimeout(window[timerKey]);
    window[timerKey] = null;
  }
}

function openCreateLocationModal() {
  if (createModal) createModal.classList.add("active");
}

function closeCreateLocationModal() {
  if (createModal) createModal.classList.remove("active");
}

function openEditLocationModal(id) {
  const item = locationData.find((location) => location.id === id);
  if (!item || !editModal) return;

  selectedLocationId = id;

  if (editLocationName) editLocationName.value = item.name || "";
  if (editAddressLine1) editAddressLine1.value = item.addressLine1 || item.address || "";
  if (editAddressLine2) editAddressLine2.value = item.addressLine2 || "";
  if (editCity) editCity.value = item.city || "";
  if (editState) editState.value = item.state || "";
  if (editPostalCode) editPostalCode.value = item.postalCode || "";
  if (editCountry) editCountry.value = item.country || "Singapore";
  if (editDescription) editDescription.value = item.description || "";
  if (editGoogleMap1) editGoogleMap1.value = item.googleMap1 || "";
  if (editGoogleMap2) editGoogleMap2.value = item.googleMap2 || "";
  if (editLocationActive) editLocationActive.checked = item.active !== false;

  editModal.classList.add("active");
}

function closeEditLocationModal() {
  if (editModal) editModal.classList.remove("active");
}

function openDeleteLocationConfirm() {
  if (deleteLocationConfirmModal) deleteLocationConfirmModal.classList.add("active");
}

function closeDeleteLocationConfirm() {
  if (deleteLocationConfirmModal) deleteLocationConfirmModal.classList.remove("active");
}

function updateSelectedLocation() {
  const index = locationData.findIndex((item) => item.id === selectedLocationId);
  if (index === -1) return;

  locationData[index].name = editLocationName ? editLocationName.value.trim() : locationData[index].name;
  locationData[index].addressLine1 = editAddressLine1 ? editAddressLine1.value.trim() : locationData[index].addressLine1;
  locationData[index].addressLine2 = editAddressLine2 ? editAddressLine2.value.trim() : locationData[index].addressLine2;
  locationData[index].city = editCity ? editCity.value.trim() : locationData[index].city;
  locationData[index].state = editState ? editState.value.trim() : locationData[index].state;
  locationData[index].postalCode = editPostalCode ? editPostalCode.value.trim() : locationData[index].postalCode;
  locationData[index].country = editCountry ? editCountry.value : locationData[index].country;
  locationData[index].description = editDescription ? editDescription.value.trim() : locationData[index].description;
  locationData[index].googleMap1 = editGoogleMap1 ? editGoogleMap1.value.trim() : locationData[index].googleMap1;
  locationData[index].googleMap2 = editGoogleMap2 ? editGoogleMap2.value.trim() : locationData[index].googleMap2;
  locationData[index].active = editLocationActive ? editLocationActive.checked : locationData[index].active;
  locationData[index].status = locationData[index].active ? "Active" : "Inactive";
  locationData[index].address = locationData[index].addressLine1;

  applyLocationFilters();
  closeEditLocationModal();
  showToast(locationUpdateToast, "updateToastTimer");
}

function handleDeleteLocation() {
  const index = locationData.findIndex((item) => item.id === selectedLocationId);
  if (index === -1) return;

  locationData.splice(index, 1);
  applyLocationFilters();
  closeDeleteLocationConfirm();
  closeEditLocationModal();
  showToast(locationDeleteToast, "deleteToastTimer");
}

if (filterLocationName) filterLocationName.addEventListener("input", applyLocationFilters);
if (filterLocationCity) filterLocationCity.addEventListener("input", applyLocationFilters);
if (filterLocationCountry) filterLocationCountry.addEventListener("input", applyLocationFilters);
if (filterLocationStatus) filterLocationStatus.addEventListener("input", applyLocationFilters);

const footerEls = getLocationFooterEls();

if (footerEls.prevBtn) {
  footerEls.prevBtn.addEventListener("click", () => {
    if (currentLocationPage > 1) {
      currentLocationPage -= 1;
      renderLocationsTable();
    }
  });
}

if (footerEls.nextBtn) {
  footerEls.nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredLocationData.length / locationRowsPerPage) || 1;
    if (currentLocationPage < totalPages) {
      currentLocationPage += 1;
      renderLocationsTable();
    }
  });
}

if (footerEls.rowsPill) {
  footerEls.rowsPill.addEventListener("click", () => {
    if (locationRowsPerPage === 20) {
      locationRowsPerPage = 10;
    } else if (locationRowsPerPage === 10) {
      locationRowsPerPage = 5;
    } else {
      locationRowsPerPage = 20;
    }

    footerEls.rowsPill.textContent = `${locationRowsPerPage} rows`;
    currentLocationPage = 1;
    renderLocationsTable();
  });
}

if (exportLocationBtn) exportLocationBtn.addEventListener("click", exportLocationsToCSV);

if (openCreateLocationBtn) openCreateLocationBtn.addEventListener("click", openCreateLocationModal);
if (closeCreateLocationBtn) closeCreateLocationBtn.addEventListener("click", closeCreateLocationModal);
if (cancelCreateLocationBtn) cancelCreateLocationBtn.addEventListener("click", closeCreateLocationModal);

if (createModal) {
  createModal.addEventListener("click", (e) => {
    if (e.target === createModal) closeCreateLocationModal();
  });
}

if (submitCreateLocation) {
  submitCreateLocation.addEventListener("click", () => {
    closeCreateLocationModal();
    showToast(locationSuccessToast, "createToastTimer");
  });
}

if (closeLocationSuccessToast) {
  closeLocationSuccessToast.addEventListener("click", () => {
    hideToast(locationSuccessToast, "createToastTimer");
  });
}

if (closeLocationUpdateToast) {
  closeLocationUpdateToast.addEventListener("click", () => {
    hideToast(locationUpdateToast, "updateToastTimer");
  });
}

if (closeLocationDeleteToast) {
  closeLocationDeleteToast.addEventListener("click", () => {
    hideToast(locationDeleteToast, "deleteToastTimer");
  });
}

if (closeEditLocationBtn) closeEditLocationBtn.addEventListener("click", closeEditLocationModal);
if (cancelEditLocationBtn) cancelEditLocationBtn.addEventListener("click", closeEditLocationModal);
if (submitEditLocation) submitEditLocation.addEventListener("click", updateSelectedLocation);
if (deleteEditLocation) deleteEditLocation.addEventListener("click", openDeleteLocationConfirm);

if (editModal) {
  editModal.addEventListener("click", (e) => {
    if (e.target === editModal) closeEditLocationModal();
  });
}

if (cancelDeleteLocation) cancelDeleteLocation.addEventListener("click", closeDeleteLocationConfirm);
if (confirmDeleteLocation) confirmDeleteLocation.addEventListener("click", handleDeleteLocation);

if (deleteLocationConfirmModal) {
  deleteLocationConfirmModal.addEventListener("click", (e) => {
    if (e.target === deleteLocationConfirmModal) closeDeleteLocationConfirm();
  });
}

renderLocationsTable();