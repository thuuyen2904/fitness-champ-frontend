const staffData = [
  {
    id: "3f80c821...",
    name: "Emily Carter",
    email: "emily.carter@fitnesschamps.com",
    phone: "+971501234567",
    role: "Manager"
  },
  {
    id: "06e80738...",
    name: "Daniel Lee",
    email: "daniel.lee@fitnesschamps.com",
    phone: "+971528765432",
    role: "Coach"
  },
  {
    id: "82f4dcf6...",
    name: "Sophia Nguyen",
    email: "sophia.nguyen@fitnesschamps.com",
    phone: "+971556789123",
    role: "Staff"
  },
  {
    id: "721c8878...",
    name: "Michael Tan",
    email: "michael.tan@fitnesschamps.com",
    phone: "+971544321987",
    role: "Receptionist"
  },
  {
    id: "51ab29d4...",
    name: "Olivia Park",
    email: "olivia.park@fitnesschamps.com",
    phone: "+971502468135",
    role: "Coach"
  },
  {
    id: "9c4de120...",
    name: "James Abdullah",
    email: "james.abdullah@fitnesschamps.com",
    phone: "+971558812345",
    role: "Staff"
  }
];

let filteredStaffData = [...staffData];
let currentStaffPage = 1;
let staffRowsPerPage = 20;
let selectedStaffId = "82f4dcf6...";

const staffTableBody = document.getElementById("staffTableBody");
const exportStaffBtn = document.getElementById("exportStaffBtn");

const filterStaffName = document.getElementById("filterStaffName");
const filterStaffEmail = document.getElementById("filterStaffEmail");
const filterStaffPhone = document.getElementById("filterStaffPhone");
const filterStaffRole = document.getElementById("filterStaffRole");

const createStaffModal = document.getElementById("createStaffModal");
const openCreateStaff = document.getElementById("openCreateStaff");
const closeCreateStaff = document.getElementById("closeCreateStaff");
const cancelCreateStaff = document.getElementById("cancelCreateStaff");
const submitCreateStaff = document.getElementById("submitCreateStaff");

const editStaffModal = document.getElementById("editStaffModal");
const closeEditStaff = document.getElementById("closeEditStaff");
const cancelEditStaff = document.getElementById("cancelEditStaff");
const submitEditStaff = document.getElementById("submitEditStaff");
const deleteEditStaff = document.getElementById("deleteEditStaff");

const deleteStaffConfirmModal = document.getElementById("deleteStaffConfirmModal");
const cancelDeleteStaff = document.getElementById("cancelDeleteStaff");
const confirmDeleteStaff = document.getElementById("confirmDeleteStaff");

const staffSuccessToast = document.getElementById("staffSuccessToast");
const closeStaffSuccessToast = document.getElementById("closeStaffSuccessToast");
const staffUpdateToast = document.getElementById("staffUpdateToast");
const closeStaffUpdateToast = document.getElementById("closeStaffUpdateToast");
const staffDeleteToast = document.getElementById("staffDeleteToast");
const closeStaffDeleteToast = document.getElementById("closeStaffDeleteToast");

const createStaffName = document.getElementById("createStaffName");
const createStaffEmail = document.getElementById("createStaffEmail");
const createStaffPhone = document.getElementById("createStaffPhone");
const createStaffRole = document.getElementById("createStaffRole");

const editStaffName = document.getElementById("editStaffName");
const editStaffEmail = document.getElementById("editStaffEmail");
const editStaffPhone = document.getElementById("editStaffPhone");
const editStaffRole = document.getElementById("editStaffRole");

function getStaffFooterEls() {
  return {
    countText:
      document.getElementById("staffCountText") ||
      document.querySelector("#tableFooterRoot .count-text") ||
      document.querySelector(".count-text"),
    rowsPill:
      document.getElementById("staffRowsPill") ||
      document.querySelector("#tableFooterRoot .rows-pill") ||
      document.querySelector(".rows-pill"),
    prevBtn:
      document.getElementById("staffPrevBtn") ||
      document.querySelector("#tableFooterRoot #prevBtn") ||
      document.querySelector("#prevBtn"),
    nextBtn:
      document.getElementById("staffNextBtn") ||
      document.querySelector("#tableFooterRoot #nextBtn") ||
      document.querySelector("#nextBtn")
  };
}

function renderStaffTable() {
  if (!staffTableBody) return;

  const { countText, prevBtn, nextBtn } = getStaffFooterEls();
  staffTableBody.innerHTML = "";

  const startIndex = (currentStaffPage - 1) * staffRowsPerPage;
  const endIndex = startIndex + staffRowsPerPage;
  const pageData = filteredStaffData.slice(startIndex, endIndex);

  pageData.forEach((item) => {
    const row = document.createElement("div");
    row.className = "staff-row";

    if (item.id === selectedStaffId) {
      row.classList.add("active");
    }

    row.innerHTML = `
      <div class="col id">${item.id}</div>
      <div class="col name">${item.name}</div>
      <div class="col email">${item.email}</div>
      <div class="col phone">${item.phone}</div>
      <div class="col role">${item.role}</div>
    `;

    row.addEventListener("click", () => {
      selectedStaffId = item.id;
      openEditStaffModal(item.id);
      renderStaffTable();
    });

    staffTableBody.appendChild(row);
  });

  const showingFrom = filteredStaffData.length === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(endIndex, filteredStaffData.length);

  if (countText) {
    countText.textContent = `Showing ${showingFrom} - ${showingTo} of ${filteredStaffData.length}`;
  }

  const totalPages = Math.ceil(filteredStaffData.length / staffRowsPerPage) || 1;

  if (prevBtn) prevBtn.disabled = currentStaffPage === 1;
  if (nextBtn) nextBtn.disabled = currentStaffPage >= totalPages;
}

function applyStaffFilters() {
  const name = filterStaffName ? filterStaffName.value.trim().toLowerCase() : "";
  const email = filterStaffEmail ? filterStaffEmail.value.trim().toLowerCase() : "";
  const phone = filterStaffPhone ? filterStaffPhone.value.trim().toLowerCase() : "";
  const role = filterStaffRole ? filterStaffRole.value.trim().toLowerCase() : "";

  filteredStaffData = staffData.filter((item) => {
    return (
      (!name || item.name.toLowerCase().includes(name)) &&
      (!email || item.email.toLowerCase().includes(email)) &&
      (!phone || item.phone.toLowerCase().includes(phone)) &&
      (!role || item.role.toLowerCase().includes(role))
    );
  });

  currentStaffPage = 1;
  renderStaffTable();
}

function exportStaffToCSV() {
  const headers = ["ID", "Name", "Email", "Phone", "Role"];
  const csvRows = [
    headers.join(","),
    ...filteredStaffData.map((item) =>
      [
        item.id,
        `"${item.name}"`,
        `"${item.email}"`,
        `"${item.phone}"`,
        `"${item.role}"`
      ].join(",")
    )
  ];

  const blob = new Blob([csvRows.join("\n")], {
    type: "text/csv;charset=utf-8;"
  });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "staff.csv";
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

function openCreateStaffModal() {
  if (createStaffModal) createStaffModal.classList.add("active");
}

function closeCreateStaffModal() {
  if (createStaffModal) createStaffModal.classList.remove("active");
}

function openEditStaffModal(id) {
  const item = staffData.find((staff) => staff.id === id);
  if (!item || !editStaffModal) return;

  selectedStaffId = id;

  if (editStaffName) editStaffName.value = item.name || "";
  if (editStaffEmail) editStaffEmail.value = item.email || "";
  if (editStaffPhone) editStaffPhone.value = item.phone || "";
  if (editStaffRole) editStaffRole.value = item.role || "";

  editStaffModal.classList.add("active");
}

function closeEditStaffModal() {
  if (editStaffModal) editStaffModal.classList.remove("active");
}

function openDeleteStaffConfirm() {
  if (deleteStaffConfirmModal) deleteStaffConfirmModal.classList.add("active");
}

function closeDeleteStaffConfirm() {
  if (deleteStaffConfirmModal) deleteStaffConfirmModal.classList.remove("active");
}

function createStaff() {
  const name = createStaffName ? createStaffName.value.trim() : "";
  const email = createStaffEmail ? createStaffEmail.value.trim() : "";
  const phone = createStaffPhone ? createStaffPhone.value.trim() : "";
  const role = createStaffRole ? createStaffRole.value.trim() : "";

  const newStaff = {
    id: `${Date.now()}`.slice(-8) + "...",
    name,
    email,
    phone,
    role
  };

  staffData.unshift(newStaff);
  selectedStaffId = newStaff.id;

  applyStaffFilters();
  closeCreateStaffModal();
  showToast(staffSuccessToast, "staffCreateToastTimer");
}

function updateSelectedStaff() {
  const index = staffData.findIndex((item) => item.id === selectedStaffId);
  if (index === -1) return;

  staffData[index].name = editStaffName ? editStaffName.value.trim() : staffData[index].name;
  staffData[index].email = editStaffEmail ? editStaffEmail.value.trim() : staffData[index].email;
  staffData[index].phone = editStaffPhone ? editStaffPhone.value.trim() : staffData[index].phone;
  staffData[index].role = editStaffRole ? editStaffRole.value.trim() : staffData[index].role;

  applyStaffFilters();
  closeEditStaffModal();
  showToast(staffUpdateToast, "staffUpdateToastTimer");
}

function handleDeleteStaff() {
  const index = staffData.findIndex((item) => item.id === selectedStaffId);
  if (index === -1) return;

  staffData.splice(index, 1);

  if (staffData.length > 0) {
    selectedStaffId = staffData[0].id;
  } else {
    selectedStaffId = null;
  }

  applyStaffFilters();
  closeDeleteStaffConfirm();
  closeEditStaffModal();
  showToast(staffDeleteToast, "staffDeleteToastTimer");
}

if (filterStaffName) filterStaffName.addEventListener("input", applyStaffFilters);
if (filterStaffEmail) filterStaffEmail.addEventListener("input", applyStaffFilters);
if (filterStaffPhone) filterStaffPhone.addEventListener("input", applyStaffFilters);
if (filterStaffRole) filterStaffRole.addEventListener("input", applyStaffFilters);

const footerEls = getStaffFooterEls();

if (footerEls.prevBtn) {
  footerEls.prevBtn.addEventListener("click", () => {
    if (currentStaffPage > 1) {
      currentStaffPage -= 1;
      renderStaffTable();
    }
  });
}

if (footerEls.nextBtn) {
  footerEls.nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredStaffData.length / staffRowsPerPage) || 1;
    if (currentStaffPage < totalPages) {
      currentStaffPage += 1;
      renderStaffTable();
    }
  });
}

if (footerEls.rowsPill) {
  footerEls.rowsPill.addEventListener("click", () => {
    if (staffRowsPerPage === 20) {
      staffRowsPerPage = 10;
    } else if (staffRowsPerPage === 10) {
      staffRowsPerPage = 5;
    } else {
      staffRowsPerPage = 20;
    }

    footerEls.rowsPill.textContent = `${staffRowsPerPage} rows`;
    currentStaffPage = 1;
    renderStaffTable();
  });
}

if (exportStaffBtn) exportStaffBtn.addEventListener("click", exportStaffToCSV);
if (openCreateStaff) openCreateStaff.addEventListener("click", openCreateStaffModal);
if (closeCreateStaff) closeCreateStaff.addEventListener("click", closeCreateStaffModal);
if (cancelCreateStaff) cancelCreateStaff.addEventListener("click", closeCreateStaffModal);

if (createStaffModal) {
  createStaffModal.addEventListener("click", (e) => {
    if (e.target === createStaffModal) closeCreateStaffModal();
  });
}

if (submitCreateStaff) submitCreateStaff.addEventListener("click", createStaff);

if (closeStaffSuccessToast) {
  closeStaffSuccessToast.addEventListener("click", () => {
    hideToast(staffSuccessToast, "staffCreateToastTimer");
  });
}

if (closeStaffUpdateToast) {
  closeStaffUpdateToast.addEventListener("click", () => {
    hideToast(staffUpdateToast, "staffUpdateToastTimer");
  });
}

if (closeStaffDeleteToast) {
  closeStaffDeleteToast.addEventListener("click", () => {
    hideToast(staffDeleteToast, "staffDeleteToastTimer");
  });
}

if (closeEditStaff) closeEditStaff.addEventListener("click", closeEditStaffModal);
if (cancelEditStaff) cancelEditStaff.addEventListener("click", closeEditStaffModal);
if (submitEditStaff) submitEditStaff.addEventListener("click", updateSelectedStaff);
if (deleteEditStaff) deleteEditStaff.addEventListener("click", openDeleteStaffConfirm);

if (editStaffModal) {
  editStaffModal.addEventListener("click", (e) => {
    if (e.target === editStaffModal) closeEditStaffModal();
  });
}

if (cancelDeleteStaff) cancelDeleteStaff.addEventListener("click", closeDeleteStaffConfirm);
if (confirmDeleteStaff) confirmDeleteStaff.addEventListener("click", handleDeleteStaff);

if (deleteStaffConfirmModal) {
  deleteStaffConfirmModal.addEventListener("click", (e) => {
    if (e.target === deleteStaffConfirmModal) closeDeleteStaffConfirm();
  });
}

renderStaffTable();