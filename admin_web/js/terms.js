const termData = [
  {
    id: "a1111111...1111",
    name: "Term 1 - 2026",
    code: "T1_2027",
    startDate: "Jan 5, 2026",
    endDate: "Mar 15, 2026",
    status: "Active",
    isDefault: true
  },
  {
    id: "e8abc82e...1fda",
    name: "Term 2",
    code: "T2_2027",
    startDate: "Mar 15, 2026",
    endDate: "Jun 15, 2026",
    status: "Active",
    isDefault: false
  },
  {
    id: "a2222222...2222",
    name: "Summer 2026",
    code: "SUM_2026",
    startDate: "Jul 6, 2026",
    endDate: "Aug 23, 2026",
    status: "Upcoming",
    isDefault: false
  }
];

let filteredTermData = [...termData];
let currentTermPage = 1;
let termRowsPerPage = 20;
let selectedTermId = null;

const termsTableBody = document.getElementById("termsTableBody");
const exportTermBtn = document.getElementById("exportTermBtn");

const createTermModal = document.getElementById("createTermModal");
const openCreateTerm = document.getElementById("openCreateTerm");
const closeCreateTerm = document.getElementById("closeCreateTerm");
const cancelCreateTerm = document.getElementById("cancelCreateTerm");
const submitCreateTerm = document.getElementById("submitCreateTerm");

const editTermModal = document.getElementById("editTermModal");
const closeEditTerm = document.getElementById("closeEditTerm");
const cancelEditTerm = document.getElementById("cancelEditTerm");
const submitEditTerm = document.getElementById("submitEditTerm");
const deleteEditTerm = document.getElementById("deleteEditTerm");

const deleteTermConfirmModal = document.getElementById("deleteTermConfirmModal");
const cancelDeleteTerm = document.getElementById("cancelDeleteTerm");
const confirmDeleteTerm = document.getElementById("confirmDeleteTerm");

const termSuccessToast = document.getElementById("termSuccessToast");
const closeTermSuccessToast = document.getElementById("closeTermSuccessToast");
const termUpdateToast = document.getElementById("termUpdateToast");
const closeTermUpdateToast = document.getElementById("closeTermUpdateToast");
const termDeleteToast = document.getElementById("termDeleteToast");
const closeTermDeleteToast = document.getElementById("closeTermDeleteToast");

const createTermName = document.getElementById("createTermName");
const createTermCode = document.getElementById("createTermCode");
const createTermStartDate = document.getElementById("createTermStartDate");
const createTermEndDate = document.getElementById("createTermEndDate");
const createTermStatus = document.getElementById("createTermStatus");
const createDefaultTerm = document.getElementById("createDefaultTerm");

const editTermName = document.getElementById("editTermName");
const editTermCode = document.getElementById("editTermCode");
const editTermStartDate = document.getElementById("editTermStartDate");
const editTermEndDate = document.getElementById("editTermEndDate");
const editTermStatus = document.getElementById("editTermStatus");
const editDefaultTerm = document.getElementById("editDefaultTerm");

function getTermFooterEls() {
  return {
    countText:
      document.getElementById("termCountText") ||
      document.querySelector("#tableFooterRoot .count-text") ||
      document.querySelector(".count-text"),
    rowsPill:
      document.getElementById("termRowsPill") ||
      document.querySelector("#tableFooterRoot .rows-pill") ||
      document.querySelector(".rows-pill"),
    prevBtn:
      document.getElementById("termPrevBtn") ||
      document.querySelector("#tableFooterRoot #prevBtn") ||
      document.querySelector("#prevBtn"),
    nextBtn:
      document.getElementById("termNextBtn") ||
      document.querySelector("#tableFooterRoot #nextBtn") ||
      document.querySelector("#nextBtn")
  };
}

function normalizeStatus(status = "") {
  return status.toLowerCase();
}

function getStatusBadgeClass(status = "") {
  const normalized = normalizeStatus(status);

  if (normalized === "active") return "active";
  if (normalized === "upcoming") return "upcoming";
  return "inactive";
}

function renderTermsTable() {
  if (!termsTableBody) return;

  const { countText, prevBtn, nextBtn } = getTermFooterEls();
  termsTableBody.innerHTML = "";

  const startIndex = (currentTermPage - 1) * termRowsPerPage;
  const endIndex = startIndex + termRowsPerPage;
  const pageData = filteredTermData.slice(startIndex, endIndex);

  pageData.forEach((item) => {
    const row = document.createElement("div");
    row.className = "term-row";
    row.innerHTML = `
      <div class="col id">${item.id}</div>
      <div class="col name">${item.name}</div>
      <div class="col code">${item.code}</div>
      <div class="col start-date">${item.startDate}</div>
      <div class="col end-date">${item.endDate}</div>
      <div class="col status">
        <span class="term-status-badge ${getStatusBadgeClass(item.status)}">${item.status.toLowerCase()}</span>
      </div>
    `;

    row.addEventListener("click", () => {
      openEditTermModal(item.id);
    });

    termsTableBody.appendChild(row);
  });

  const showingFrom = filteredTermData.length === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(endIndex, filteredTermData.length);

  if (countText) {
    countText.textContent = `Showing ${showingFrom} - ${showingTo} of ${filteredTermData.length}`;
  }

  const totalPages = Math.ceil(filteredTermData.length / termRowsPerPage) || 1;

  if (prevBtn) prevBtn.disabled = currentTermPage === 1;
  if (nextBtn) nextBtn.disabled = currentTermPage >= totalPages;
}

function exportTermsToCSV() {
  const headers = ["ID", "Name", "Code", "Start Date", "End Date", "Status"];
  const csvRows = [
    headers.join(","),
    ...filteredTermData.map((item) =>
      [
        item.id,
        `"${item.name}"`,
        `"${item.code}"`,
        `"${item.startDate}"`,
        `"${item.endDate}"`,
        `"${item.status}"`
      ].join(",")
    )
  ];

  const blob = new Blob([csvRows.join("\n")], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "terms.csv";
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

function resetCreateTermForm() {
  if (createTermName) createTermName.value = "";
  if (createTermCode) createTermCode.value = "";
  if (createTermStartDate) createTermStartDate.value = "";
  if (createTermEndDate) createTermEndDate.value = "";
  if (createTermStatus) createTermStatus.value = "Active";
  if (createDefaultTerm) createDefaultTerm.checked = false;
}

function openCreateTermModal() {
  if (!createTermModal) return;
  createTermModal.classList.add("active");
}

function closeCreateTermModal() {
  if (!createTermModal) return;
  createTermModal.classList.remove("active");
}

function openEditTermModal(id) {
  const item = termData.find((term) => term.id === id);
  if (!item || !editTermModal) return;

  selectedTermId = id;

  if (editTermName) editTermName.value = item.name || "";
  if (editTermCode) editTermCode.value = item.code || "";
  if (editTermStartDate) editTermStartDate.value = item.startDate || "";
  if (editTermEndDate) editTermEndDate.value = item.endDate || "";
  if (editTermStatus) editTermStatus.value = item.status || "Active";
  if (editDefaultTerm) editDefaultTerm.checked = !!item.isDefault;

  editTermModal.classList.add("active");
}

function closeEditTermModal() {
  if (!editTermModal) return;
  editTermModal.classList.remove("active");
}

function openDeleteTermConfirm() {
  if (!deleteTermConfirmModal) return;
  deleteTermConfirmModal.classList.add("active");
}

function closeDeleteTermConfirm() {
  if (!deleteTermConfirmModal) return;
  deleteTermConfirmModal.classList.remove("active");
}

function createNewTerm() {
  const name = createTermName ? createTermName.value.trim() : "";
  const code = createTermCode ? createTermCode.value.trim() : "";
  const startDate = createTermStartDate ? createTermStartDate.value.trim() : "";
  const endDate = createTermEndDate ? createTermEndDate.value.trim() : "";
  const status = createTermStatus ? createTermStatus.value.trim() : "Active";
  const isDefault = createDefaultTerm ? createDefaultTerm.checked : false;

  if (!name || !startDate || !endDate) {
    return;
  }

  if (isDefault) {
    termData.forEach((term) => {
      term.isDefault = false;
    });
  }

  const newTerm = {
    id: `t${Date.now()}`.slice(0, 12) + "...",
    name,
    code: code || "-",
    startDate,
    endDate,
    status,
    isDefault
  };

  termData.unshift(newTerm);
  filteredTermData = [...termData];
  currentTermPage = 1;
  renderTermsTable();
  closeCreateTermModal();
  resetCreateTermForm();
  showToast(termSuccessToast, "termCreateToastTimer");
}

function updateSelectedTerm() {
  const index = termData.findIndex((item) => item.id === selectedTermId);
  if (index === -1) return;

  const updatedName = editTermName ? editTermName.value.trim() : "";
  const updatedCode = editTermCode ? editTermCode.value.trim() : "";
  const updatedStartDate = editTermStartDate ? editTermStartDate.value.trim() : "";
  const updatedEndDate = editTermEndDate ? editTermEndDate.value.trim() : "";
  const updatedStatus = editTermStatus ? editTermStatus.value.trim() : "Active";
  const updatedDefault = editDefaultTerm ? editDefaultTerm.checked : false;

  if (!updatedName || !updatedStartDate || !updatedEndDate) {
    return;
  }

  if (updatedDefault) {
    termData.forEach((term) => {
      term.isDefault = false;
    });
  }

  termData[index].name = updatedName;
  termData[index].code = updatedCode || "-";
  termData[index].startDate = updatedStartDate;
  termData[index].endDate = updatedEndDate;
  termData[index].status = updatedStatus;
  termData[index].isDefault = updatedDefault;

  filteredTermData = [...termData];
  renderTermsTable();
  closeEditTermModal();
  showToast(termUpdateToast, "termUpdateToastTimer");
}

function handleDeleteTerm() {
  const index = termData.findIndex((item) => item.id === selectedTermId);
  if (index === -1) return;

  termData.splice(index, 1);
  filteredTermData = [...termData];
  currentTermPage = 1;

  renderTermsTable();
  closeDeleteTermConfirm();
  closeEditTermModal();
  showToast(termDeleteToast, "termDeleteToastTimer");
}

const footerEls = getTermFooterEls();

if (footerEls.prevBtn) {
  footerEls.prevBtn.addEventListener("click", () => {
    if (currentTermPage > 1) {
      currentTermPage -= 1;
      renderTermsTable();
    }
  });
}

if (footerEls.nextBtn) {
  footerEls.nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredTermData.length / termRowsPerPage) || 1;
    if (currentTermPage < totalPages) {
      currentTermPage += 1;
      renderTermsTable();
    }
  });
}

if (footerEls.rowsPill) {
  footerEls.rowsPill.addEventListener("click", () => {
    if (termRowsPerPage === 20) {
      termRowsPerPage = 10;
    } else if (termRowsPerPage === 10) {
      termRowsPerPage = 5;
    } else {
      termRowsPerPage = 20;
    }

    footerEls.rowsPill.textContent = `${termRowsPerPage} rows`;
    currentTermPage = 1;
    renderTermsTable();
  });
}

if (exportTermBtn) {
  exportTermBtn.addEventListener("click", exportTermsToCSV);
}

if (openCreateTerm) {
  openCreateTerm.addEventListener("click", openCreateTermModal);
}

if (closeCreateTerm) {
  closeCreateTerm.addEventListener("click", closeCreateTermModal);
}

if (cancelCreateTerm) {
  cancelCreateTerm.addEventListener("click", closeCreateTermModal);
}

if (submitCreateTerm) {
  submitCreateTerm.addEventListener("click", createNewTerm);
}

if (closeEditTerm) {
  closeEditTerm.addEventListener("click", closeEditTermModal);
}

if (cancelEditTerm) {
  cancelEditTerm.addEventListener("click", closeEditTermModal);
}

if (submitEditTerm) {
  submitEditTerm.addEventListener("click", updateSelectedTerm);
}

if (deleteEditTerm) {
  deleteEditTerm.addEventListener("click", openDeleteTermConfirm);
}

if (cancelDeleteTerm) {
  cancelDeleteTerm.addEventListener("click", closeDeleteTermConfirm);
}

if (confirmDeleteTerm) {
  confirmDeleteTerm.addEventListener("click", handleDeleteTerm);
}

if (closeTermSuccessToast) {
  closeTermSuccessToast.addEventListener("click", () => {
    hideToast(termSuccessToast, "termCreateToastTimer");
  });
}

if (closeTermUpdateToast) {
  closeTermUpdateToast.addEventListener("click", () => {
    hideToast(termUpdateToast, "termUpdateToastTimer");
  });
}

if (closeTermDeleteToast) {
  closeTermDeleteToast.addEventListener("click", () => {
    hideToast(termDeleteToast, "termDeleteToastTimer");
  });
}

if (createTermModal) {
  createTermModal.addEventListener("click", (e) => {
    if (e.target === createTermModal) {
      closeCreateTermModal();
    }
  });
}

if (editTermModal) {
  editTermModal.addEventListener("click", (e) => {
    if (e.target === editTermModal) {
      closeEditTermModal();
    }
  });
}

if (deleteTermConfirmModal) {
  deleteTermConfirmModal.addEventListener("click", (e) => {
    if (e.target === deleteTermConfirmModal) {
      closeDeleteTermConfirm();
    }
  });
}

renderTermsTable();