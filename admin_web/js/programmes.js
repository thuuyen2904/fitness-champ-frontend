const programmeData = [
  {
    id: "f5d59ea8...",
    name: "Holiday Intensive Programme",
    category: "Children",
    description: "Accelerated learning during school holidays",
    duration: "2 hr",
    fee: "$787.50",
    status: "Active"
  },
  {
    id: "b2000000...",
    name: "Children Weekly Swimming Fundamentals",
    category: "Children",
    description: "Weekly swimming programme for children",
    duration: "45 min",
    fee: "$1260.00",
    status: "Active"
  },
  {
    id: "b1111111...",
    name: "Toddlers Weekly Swimming Intro",
    category: "Toddlers",
    description: "Weekly swimming programme for toddlers",
    duration: "30 min",
    fee: "$1207.50",
    status: "Active"
  },
  {
    id: "b3000000...",
    name: "Ladies Swimming Programme",
    category: "Ladies Adults",
    description: "Swimming programme for ladies with guided coaching",
    duration: "45 min",
    fee: "$1890.00",
    status: "Active"
  },
  {
    id: "b4000000...",
    name: "Mixed Adults Swimming Programme",
    category: "Mixed Adults",
    description: "Swimming programme for mixed adult learners",
    duration: "45 min",
    fee: "$1470.00",
    status: "Active"
  },
  {
    id: "b5000000...",
    name: "Holiday Intensive Programme Plus",
    category: "Holiday Intensive",
    description: "Summer intensive swimming programme",
    duration: "2 hr",
    fee: "$787.50",
    status: "Active"
  },
  {
    id: "b6000000...",
    name: "Private Toddlers Weekly Swim",
    category: "Toddlers",
    description: "Private 1:1 swimming programme for toddlers",
    duration: "30 min",
    fee: "$2940.00",
    status: "Active"
  },
  {
    id: "b7000000...",
    name: "Private Children Weekly Swim",
    category: "Children",
    description: "Private 1:1 swimming programme for children",
    duration: "45 min",
    fee: "$3360.00",
    status: "Active"
  },
  {
    id: "b8000000...",
    name: "Private Ladies Swimming Programme",
    category: "Ladies Adults",
    description: "Private 1:1 swimming programme for ladies",
    duration: "45 min",
    fee: "$4200.00",
    status: "Active"
  },
  {
    id: "29b4cb67...",
    name: "Test Programme",
    category: "Test",
    description: "Test swimming programmes package",
    duration: "1 hr",
    fee: "$300.00",
    status: "Active"
  },
  {
    id: "641a117e...",
    name: "test1122",
    category: "test1122",
    description: "test1122",
    duration: "1 hr",
    fee: "$150.00",
    status: "Inactive"
  },
  {
    id: "4f080046...",
    name: "SUMMER HOLIDAY CAMP",
    category: "Children",
    description: "Summer holiday swim camp programme",
    duration: "45 min",
    fee: "$980.00",
    status: "Active"
  },
  {
    id: "7ce12091...",
    name: "Beginner Swim Starter",
    category: "Children",
    description: "Beginner level class for new swimmers",
    duration: "45 min",
    fee: "$860.00",
    status: "Active"
  }
];

let filteredData = [...programmeData];
let currentPage = 1;
let rowsPerPage = 20;
let selectedProgrammeId = null;

const tableBody = document.getElementById("tableBody");
const exportBtn = document.getElementById("exportBtn");

const filterName = document.getElementById("filterName");
const filterCategory = document.getElementById("filterCategory");
const filterDescription = document.getElementById("filterDescription");
const filterStatus = document.getElementById("filterStatus");

const popupLayer = document.getElementById("popupLayer");
const openCreateProgramme = document.getElementById("openCreateProgramme");
const closeCreateProgramme = document.getElementById("closeCreateProgramme");
const cancelCreateProgramme = document.getElementById("cancelCreateProgramme");
const submitCreateProgramme = document.getElementById("submitCreateProgramme");

const tabButtons = document.querySelectorAll(".tab-btn[data-tab]");
const detailsPanel = document.getElementById("detailsPanel");
const schedulePanel = document.getElementById("schedulePanel");

const selectBox = document.getElementById("staffSelectBox");
const dropdown = document.getElementById("staffDropdown");
const selectedText = document.getElementById("staffSelected");
const items = document.querySelectorAll(".dropdown-item");

const editPopupLayer = document.getElementById("editPopupLayer");
const closeEditProgramme = document.getElementById("closeEditProgramme");
const cancelEditProgramme = document.getElementById("cancelEditProgramme");
const updateEditProgramme = document.getElementById("updateEditProgramme");
const deleteEditProgramme = document.getElementById("deleteEditProgramme");

const editProgrammeName = document.getElementById("editProgrammeName");
const editProgrammeCategory = document.getElementById("editProgrammeCategory");
const editProgrammeDescription = document.getElementById("editProgrammeDescription");
const editProgrammeDuration = document.getElementById("editProgrammeDuration");
const editProgrammeFee = document.getElementById("editProgrammeFee");
const editProgrammeDefaultLocation = document.getElementById("editProgrammeDefaultLocation");
const editProgrammeDefaultStaff = document.getElementById("editProgrammeDefaultStaff");
const editCodePrefix = document.getElementById("editCodePrefix");
const editMinAge = document.getElementById("editMinAge");
const editMaxAge = document.getElementById("editMaxAge");
const editFreeProgramme = document.getElementById("editFreeProgramme");
const editEnableTrial = document.getElementById("editEnableTrial");
const editProgrammeActive = document.getElementById("editProgrammeActive");

const editTabButtons = document.querySelectorAll(".edit-tab-btn");
const editDetailsPanel = document.getElementById("editDetailsPanel");
const editSchedulePanel = document.getElementById("editSchedulePanel");
const editCapacityPanel = document.getElementById("editCapacityPanel");

const rosterPopupLayer = document.getElementById("rosterPopupLayer");
const closeRosterPopup = document.getElementById("closeRosterPopup");
const rosterTabButtons = document.querySelectorAll(".roster-tab-btn");
const rosterStudentsPanel = document.getElementById("rosterStudentsPanel");
const rosterSessionsPanel = document.getElementById("rosterSessionsPanel");

const programmeSuccessToast = document.getElementById("programmeSuccessToast");
const closeProgrammeSuccessToast = document.getElementById("closeProgrammeSuccessToast");
const programmeUpdateToast = document.getElementById("programmeUpdateToast");
const closeProgrammeUpdateToast = document.getElementById("closeProgrammeUpdateToast");
const programmeDeleteToast = document.getElementById("programmeDeleteToast");
const closeProgrammeDeleteToast = document.getElementById("closeProgrammeDeleteToast");

function getFooterEls() {
  return {
    countText:
      document.getElementById("countText") ||
      document.querySelector("#tableFooterRoot .count-text") ||
      document.querySelector(".count-text"),
    rowsPill:
      document.getElementById("rowsPill") ||
      document.querySelector("#tableFooterRoot .rows-pill") ||
      document.querySelector(".rows-pill"),
    prevBtn:
      document.getElementById("prevBtn") ||
      document.querySelector("#tableFooterRoot #prevBtn") ||
      document.querySelector("#prevBtn"),
    nextBtn:
      document.getElementById("nextBtn") ||
      document.querySelector("#tableFooterRoot #nextBtn") ||
      document.querySelector("#nextBtn")
  };
}

function showProgrammeToast(toastEl, timerKey) {
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

function hideProgrammeToast(toastEl, timerKey) {
  if (!toastEl) return;

  toastEl.classList.remove("show");

  if (window[timerKey]) {
    clearTimeout(window[timerKey]);
    window[timerKey] = null;
  }
}

function renderTable() {
  if (!tableBody) return;

  const { countText, prevBtn, nextBtn } = getFooterEls();
  tableBody.innerHTML = "";

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageData = filteredData.slice(startIndex, endIndex);

  pageData.forEach((item) => {
    const row = document.createElement("div");
    row.className = "table-row";
    row.innerHTML = `
      <div class="col id">${item.id}</div>
      <div class="col name">${item.name}</div>
      <div class="col category">${item.category}</div>
      <div class="col description">${item.description}</div>
      <div class="col duration">${item.duration}</div>
      <div class="col fee">${item.fee}</div>
      <div class="col status">${item.status}</div>
    `;

    row.addEventListener("click", () => {
      openEditPopup(item);
    });

    tableBody.appendChild(row);
  });

  const showingFrom = filteredData.length === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(endIndex, filteredData.length);

  if (countText) {
    countText.textContent = `Showing ${showingFrom} - ${showingTo} of ${filteredData.length}`;
  }

  const totalPages = Math.ceil(filteredData.length / rowsPerPage) || 1;
  if (prevBtn) prevBtn.disabled = currentPage === 1;
  if (nextBtn) nextBtn.disabled = currentPage >= totalPages;
}

function applyFilters() {
  const name = filterName ? filterName.value.trim().toLowerCase() : "";
  const category = filterCategory ? filterCategory.value.trim().toLowerCase() : "";
  const description = filterDescription ? filterDescription.value.trim().toLowerCase() : "";
  const status = filterStatus ? filterStatus.value.trim().toLowerCase() : "";

  filteredData = programmeData.filter((item) => {
    return (
      (!name || item.name.toLowerCase().includes(name)) &&
      (!category || item.category.toLowerCase().includes(category)) &&
      (!description || item.description.toLowerCase().includes(description)) &&
      (!status || status === "all" || item.status.toLowerCase().includes(status))
    );
  });

  currentPage = 1;
  renderTable();
}

function exportToCSV() {
  const headers = ["ID", "Name", "Category", "Description", "Duration", "Fee", "Status"];
  const csvRows = [
    headers.join(","),
    ...filteredData.map((item) =>
      [
        item.id,
        `"${item.name}"`,
        `"${item.category}"`,
        `"${item.description}"`,
        item.duration,
        item.fee,
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
  link.download = "programmes.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function lockBodyScroll() {
  document.body.style.overflow = "hidden";
}

function unlockBodyScroll() {
  const hasActiveModal =
    (popupLayer && popupLayer.classList.contains("active")) ||
    (editPopupLayer && editPopupLayer.classList.contains("active")) ||
    (rosterPopupLayer && rosterPopupLayer.classList.contains("active"));

  if (!hasActiveModal) {
    document.body.style.overflow = "";
  }
}

function openPopup() {
  if (!popupLayer) return;
  popupLayer.classList.add("active");
  lockBodyScroll();
}

function closePopup() {
  if (!popupLayer) return;
  popupLayer.classList.remove("active");
  unlockBodyScroll();
}

function openEditPopup(programme) {
  if (!editPopupLayer) return;

  selectedProgrammeId = programme.id;

  if (editProgrammeName) editProgrammeName.value = programme.name || "";
  if (editProgrammeCategory) editProgrammeCategory.value = programme.category || "";
  if (editProgrammeDescription) editProgrammeDescription.value = programme.description || "";
  if (editProgrammeDuration) editProgrammeDuration.value = programme.duration || "";
  if (editProgrammeFee) editProgrammeFee.value = programme.fee || "";
  if (editProgrammeDefaultLocation) {
    editProgrammeDefaultLocation.textContent =
      programme.defaultLocation || "Select default locations for schedule";
  }
  if (editProgrammeDefaultStaff) {
    editProgrammeDefaultStaff.textContent = programme.defaultStaff || "No staff";
  }
  if (editCodePrefix) editCodePrefix.value = programme.codePrefix || "";
  if (editMinAge) editMinAge.value = programme.minAge || "48";
  if (editMaxAge) editMaxAge.value = programme.maxAge || "144";
  if (editFreeProgramme) editFreeProgramme.checked = !!programme.freeProgramme;
  if (editEnableTrial) editEnableTrial.checked = !!programme.enableTrial;
  if (editProgrammeActive) editProgrammeActive.checked = programme.active !== false;

  editPopupLayer.classList.add("active");
  lockBodyScroll();
  setActiveEditTab("details");
}

function closeEditPopup() {
  if (!editPopupLayer) return;
  editPopupLayer.classList.remove("active");
  unlockBodyScroll();
}

function setActiveCreateTab(tab) {
  tabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });

  if (detailsPanel) detailsPanel.classList.toggle("active", tab === "details");
  if (schedulePanel) schedulePanel.classList.toggle("active", tab === "schedule");
}

function setActiveEditTab(tab) {
  editTabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.editTab === tab);
  });

  if (editDetailsPanel) editDetailsPanel.classList.toggle("active", tab === "details");
  if (editSchedulePanel) editSchedulePanel.classList.toggle("active", tab === "schedule");
  if (editCapacityPanel) editCapacityPanel.classList.toggle("active", tab === "capacity");
}

function setActiveRosterTab(tabName = "students") {
  rosterTabButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.rosterTab === tabName);
  });

  if (rosterStudentsPanel) {
    rosterStudentsPanel.classList.toggle("active", tabName === "students");
  }

  if (rosterSessionsPanel) {
    rosterSessionsPanel.classList.toggle("active", tabName === "sessions");
  }
}

function openRosterPopup(defaultTab = "students") {
  if (!rosterPopupLayer) return;

  rosterPopupLayer.classList.add("active");
  setActiveRosterTab(defaultTab);
  lockBodyScroll();
}

function closeRosterModal() {
  if (!rosterPopupLayer) return;

  rosterPopupLayer.classList.remove("active");
  unlockBodyScroll();
}

if (filterName) filterName.addEventListener("input", applyFilters);
if (filterCategory) filterCategory.addEventListener("input", applyFilters);
if (filterDescription) filterDescription.addEventListener("input", applyFilters);
if (filterStatus) filterStatus.addEventListener("input", applyFilters);

const footerEls = getFooterEls();

if (footerEls.prevBtn) {
  footerEls.prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage -= 1;
      renderTable();
    }
  });
}

if (footerEls.nextBtn) {
  footerEls.nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage) || 1;
    if (currentPage < totalPages) {
      currentPage += 1;
      renderTable();
    }
  });
}

if (footerEls.rowsPill) {
  footerEls.rowsPill.addEventListener("click", () => {
    if (rowsPerPage === 20) {
      rowsPerPage = 10;
    } else if (rowsPerPage === 10) {
      rowsPerPage = 5;
    } else {
      rowsPerPage = 20;
    }

    footerEls.rowsPill.textContent = `${rowsPerPage} rows`;
    currentPage = 1;
    renderTable();
  });
}

if (exportBtn) exportBtn.addEventListener("click", exportToCSV);

if (openCreateProgramme) openCreateProgramme.addEventListener("click", openPopup);
if (closeCreateProgramme) closeCreateProgramme.addEventListener("click", closePopup);
if (cancelCreateProgramme) cancelCreateProgramme.addEventListener("click", closePopup);

if (submitCreateProgramme) {
  submitCreateProgramme.addEventListener("click", () => {
    closePopup();
    showProgrammeToast(programmeSuccessToast, "programmeCreateToastTimer");
  });
}

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveCreateTab(btn.dataset.tab);
  });
});

if (selectBox && dropdown) {
  selectBox.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("hidden");
  });
}

items.forEach((item) => {
  item.addEventListener("click", () => {
    if (selectedText) selectedText.textContent = item.textContent;
    items.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    if (dropdown) dropdown.classList.add("hidden");
  });
});

if (closeEditProgramme) closeEditProgramme.addEventListener("click", closeEditPopup);
if (cancelEditProgramme) cancelEditProgramme.addEventListener("click", closeEditPopup);

if (updateEditProgramme) {
  updateEditProgramme.addEventListener("click", () => {
    const programmeIndex = programmeData.findIndex((item) => item.id === selectedProgrammeId);
    if (programmeIndex === -1) return;

    programmeData[programmeIndex].name = editProgrammeName ? editProgrammeName.value.trim() : "";
    programmeData[programmeIndex].category = editProgrammeCategory ? editProgrammeCategory.value.trim() : "";
    programmeData[programmeIndex].description = editProgrammeDescription ? editProgrammeDescription.value.trim() : "";
    programmeData[programmeIndex].duration = editProgrammeDuration ? editProgrammeDuration.value.trim() : "";
    programmeData[programmeIndex].fee = editProgrammeFee ? editProgrammeFee.value.trim() : "";
    programmeData[programmeIndex].defaultLocation = editProgrammeDefaultLocation
      ? editProgrammeDefaultLocation.textContent.trim()
      : "";
    programmeData[programmeIndex].defaultStaff = editProgrammeDefaultStaff
      ? editProgrammeDefaultStaff.textContent.trim()
      : "";
    programmeData[programmeIndex].codePrefix = editCodePrefix ? editCodePrefix.value.trim() : "";
    programmeData[programmeIndex].minAge = editMinAge ? editMinAge.value.trim() : "";
    programmeData[programmeIndex].maxAge = editMaxAge ? editMaxAge.value.trim() : "";
    programmeData[programmeIndex].freeProgramme = editFreeProgramme ? editFreeProgramme.checked : false;
    programmeData[programmeIndex].enableTrial = editEnableTrial ? editEnableTrial.checked : false;
    programmeData[programmeIndex].active = editProgrammeActive ? editProgrammeActive.checked : false;
    programmeData[programmeIndex].status =
      editProgrammeActive && editProgrammeActive.checked ? "Active" : "Inactive";

    applyFilters();
    closeEditPopup();
    showProgrammeToast(programmeUpdateToast, "programmeUpdateToastTimer");
  });
}

if (deleteEditProgramme) {
  deleteEditProgramme.addEventListener("click", () => {
    const index = programmeData.findIndex((item) => item.id === selectedProgrammeId);
    if (index === -1) return;

    programmeData.splice(index, 1);
    applyFilters();
    closeEditPopup();
    showProgrammeToast(programmeDeleteToast, "programmeDeleteToastTimer");
  });
}

editTabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveEditTab(btn.dataset.editTab);
  });
});

if (closeRosterPopup) {
  closeRosterPopup.addEventListener("click", closeRosterModal);
}

rosterTabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setActiveRosterTab(btn.dataset.rosterTab);
  });
});

if (closeProgrammeSuccessToast) {
  closeProgrammeSuccessToast.addEventListener("click", () => {
    hideProgrammeToast(programmeSuccessToast, "programmeCreateToastTimer");
  });
}

if (closeProgrammeUpdateToast) {
  closeProgrammeUpdateToast.addEventListener("click", () => {
    hideProgrammeToast(programmeUpdateToast, "programmeUpdateToastTimer");
  });
}

if (closeProgrammeDeleteToast) {
  closeProgrammeDeleteToast.addEventListener("click", () => {
    hideProgrammeToast(programmeDeleteToast, "programmeDeleteToastTimer");
  });
}

document.addEventListener("click", (e) => {
  const rosterBtn = e.target.closest(".view-roster");
  if (rosterBtn) {
    e.preventDefault();
    e.stopPropagation();
    openRosterPopup("students");
    return;
  }

  if (popupLayer && e.target === popupLayer) {
    closePopup();
  }

  if (editPopupLayer && e.target === editPopupLayer) {
    closeEditPopup();
  }

  if (rosterPopupLayer && e.target === rosterPopupLayer) {
    closeRosterModal();
  }

  if (selectBox && dropdown && !selectBox.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add("hidden");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;

  if (rosterPopupLayer && rosterPopupLayer.classList.contains("active")) {
    closeRosterModal();
    return;
  }

  if (editPopupLayer && editPopupLayer.classList.contains("active")) {
    closeEditPopup();
    return;
  }

  if (popupLayer && popupLayer.classList.contains("active")) {
    closePopup();
  }
});

renderTable();