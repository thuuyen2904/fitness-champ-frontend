const couponData = [
  {
    id: "26161f2e...",
    code: "WELCOME15",
    name: "Welcome Offer",
    discount: "15%",
    type: "Universal",
    usage: "0 / 1000",
    status: "Active",
    discountType: "Percentage (%)",
    discountValue: "15",
    minOrderValue: "",
    usageLimit: "1000",
    startDate: "",
    endDate: "",
    description: "Discount for first-time enrolments.",
    newCustomerOnly: true,
    neverExpires: true
  },
  {
    id: "af5ded00...",
    code: "SUMMER20",
    name: "Summer Campaign",
    discount: "20%",
    type: "Universal",
    usage: "18 / 200",
    status: "Active",
    discountType: "Percentage (%)",
    discountValue: "20",
    minOrderValue: "100",
    usageLimit: "200",
    startDate: "06/01/2026",
    endDate: "08/31/2026",
    description: "Seasonal promotion for summer swimming programmes.",
    newCustomerOnly: false,
    neverExpires: false
  },
  {
    id: "58c28887...",
    code: "EARLYBIRD10",
    name: "Early Bird Registration",
    discount: "10%",
    type: "Universal",
    usage: "6 / 50",
    status: "Active",
    discountType: "Percentage (%)",
    discountValue: "10",
    minOrderValue: "",
    usageLimit: "50",
    startDate: "05/10/2026",
    endDate: "06/10/2026",
    description: "For parents who register before the term starts.",
    newCustomerOnly: false,
    neverExpires: false
  },
  {
    id: "90e32691...",
    code: "FAMILY25",
    name: "Family Bundle",
    discount: "25%",
    type: "Universal",
    usage: "4 / 40",
    status: "Active",
    discountType: "Percentage (%)",
    discountValue: "25",
    minOrderValue: "300",
    usageLimit: "40",
    startDate: "",
    endDate: "",
    description: "For multiple family members registering together.",
    newCustomerOnly: false,
    neverExpires: true
  },
  {
    id: "9e8782f0...",
    code: "PRIVATE50",
    name: "Private Lesson Offer",
    discount: "$50",
    type: "Universal",
    usage: "2 / 20",
    status: "Active",
    discountType: "Fixed Amount ($)",
    discountValue: "50",
    minOrderValue: "250",
    usageLimit: "20",
    startDate: "",
    endDate: "",
    description: "Fixed discount for private lesson packages.",
    newCustomerOnly: false,
    neverExpires: true
  },
  {
    id: "0b9bdbe0...",
    code: "NEWSTART12",
    name: "New Student Starter",
    discount: "12%",
    type: "Universal",
    usage: "11 / 100",
    status: "Active",
    discountType: "Percentage (%)",
    discountValue: "12",
    minOrderValue: "",
    usageLimit: "100",
    startDate: "",
    endDate: "",
    description: "Starter promotion for newly enrolled students.",
    newCustomerOnly: true,
    neverExpires: true
  },
  {
    id: "89645d27...",
    code: "HOLIDAY15",
    name: "Holiday Intensive",
    discount: "15%",
    type: "Universal",
    usage: "9 / 80",
    status: "Active",
    discountType: "Percentage (%)",
    discountValue: "15",
    minOrderValue: "",
    usageLimit: "80",
    startDate: "12/01/2026",
    endDate: "12/31/2026",
    description: "Applies to selected holiday intensive programmes.",
    newCustomerOnly: false,
    neverExpires: false
  },
  {
    id: "4972df79...",
    code: "REFER20",
    name: "Referral Reward",
    discount: "20%",
    type: "Universal",
    usage: "7 / 60",
    status: "Active",
    discountType: "Percentage (%)",
    discountValue: "20",
    minOrderValue: "",
    usageLimit: "60",
    startDate: "",
    endDate: "",
    description: "Given to customers referred by existing members.",
    newCustomerOnly: false,
    neverExpires: true
  },
  {
    id: "a87e5994...",
    code: "LADIES30",
    name: "Ladies Class Promotion",
    discount: "30%",
    type: "Universal",
    usage: "3 / 30",
    status: "Active",
    discountType: "Percentage (%)",
    discountValue: "30",
    minOrderValue: "",
    usageLimit: "30",
    startDate: "",
    endDate: "",
    description: "Promotion for ladies-only swimming classes.",
    newCustomerOnly: false,
    neverExpires: true
  },
  {
    id: "bf8ec14c...",
    code: "TODDLER10",
    name: "Toddler Programme Promo",
    discount: "10%",
    type: "Universal",
    usage: "5 / 40",
    status: "Active",
    discountType: "Percentage (%)",
    discountValue: "10",
    minOrderValue: "",
    usageLimit: "40",
    startDate: "",
    endDate: "",
    description: "Applies to toddler and parent-child sessions.",
    newCustomerOnly: false,
    neverExpires: true
  },
  {
    id: "fcdf3398...",
    code: "VIP200",
    name: "VIP Credit Discount",
    discount: "$200",
    type: "Universal",
    usage: "1 / 5",
    status: "Active",
    discountType: "Fixed Amount ($)",
    discountValue: "200",
    minOrderValue: "1000",
    usageLimit: "5",
    startDate: "",
    endDate: "",
    description: "Premium fixed discount for VIP package purchases.",
    newCustomerOnly: false,
    neverExpires: true
  },
  {
    id: "f45c3232...",
    code: "FLASH8",
    name: "Flash Sale Offer",
    discount: "8%",
    type: "Universal",
    usage: "14 / 20",
    status: "Inactive",
    discountType: "Percentage (%)",
    discountValue: "8",
    minOrderValue: "",
    usageLimit: "20",
    startDate: "04/01/2026",
    endDate: "04/07/2026",
    description: "Short-term flash campaign for selected classes.",
    newCustomerOnly: false,
    neverExpires: false
  }
];

let filteredCouponData = [...couponData];
let currentCouponPage = 1;
let couponRowsPerPage = 10;
let selectedCouponId = null;

const couponTableBody = document.getElementById("couponTableBody");
const exportCouponBtn = document.getElementById("exportCouponBtn");

const filterCouponCode = document.getElementById("filterCouponCode");
const filterCouponName = document.getElementById("filterCouponName");
const filterCouponType = document.getElementById("filterCouponType");
const filterCouponStatus = document.getElementById("filterCouponStatus");

const createCouponModal = document.getElementById("createCouponModal");
const openCreateCoupon = document.getElementById("openCreateCoupon");
const closeCreateCoupon = document.getElementById("closeCreateCoupon");
const cancelCreateCoupon = document.getElementById("cancelCreateCoupon");
const submitCreateCoupon = document.getElementById("submitCreateCoupon");
const generateCouponCode = document.getElementById("generateCouponCode");

const couponSuccessToast = document.getElementById("couponSuccessToast");
const closeCouponSuccessToast = document.getElementById("closeCouponSuccessToast");
const couponUpdateToast = document.getElementById("couponUpdateToast");
const closeCouponUpdateToast = document.getElementById("closeCouponUpdateToast");
const couponDeleteToast = document.getElementById("couponDeleteToast");
const closeCouponDeleteToast = document.getElementById("closeCouponDeleteToast");

const createCouponCodeInput = document.getElementById("createCouponCode");
const createCouponName = document.getElementById("createCouponName");
const createDiscountType = document.getElementById("createDiscountType");
const createDiscountValue = document.getElementById("createDiscountValue");
const createCouponType = document.getElementById("createCouponType");
const createCouponStatus = document.getElementById("createCouponStatus");
const createMinOrderValue = document.getElementById("createMinOrderValue");
const createUsageLimit = document.getElementById("createUsageLimit");
const createStartDate = document.getElementById("createStartDate");
const createEndDate = document.getElementById("createEndDate");
const createCouponDescription = document.getElementById("createCouponDescription");
const createNewCustomerOnly = document.getElementById("createNewCustomerOnly");
const createNeverExpires = document.getElementById("createNeverExpires");

const editCouponModal = document.getElementById("editCouponModal");
const closeEditCoupon = document.getElementById("closeEditCoupon");
const cancelEditCoupon = document.getElementById("cancelEditCoupon");
const submitEditCoupon = document.getElementById("submitEditCoupon");
const deleteEditCoupon = document.getElementById("deleteEditCoupon");
const editGenerateCouponCode = document.getElementById("editGenerateCouponCode");

const editCouponCode = document.getElementById("editCouponCode");
const editCouponName = document.getElementById("editCouponName");
const editDiscountType = document.getElementById("editDiscountType");
const editDiscountValue = document.getElementById("editDiscountValue");
const editCouponType = document.getElementById("editCouponType");
const editCouponStatus = document.getElementById("editCouponStatus");
const editMinOrderValue = document.getElementById("editMinOrderValue");
const editUsageLimit = document.getElementById("editUsageLimit");
const editStartDate = document.getElementById("editStartDate");
const editEndDate = document.getElementById("editEndDate");
const editCouponDescription = document.getElementById("editCouponDescription");
const editNewCustomerOnly = document.getElementById("editNewCustomerOnly");
const editNeverExpires = document.getElementById("editNeverExpires");

const deleteCouponConfirmModal = document.getElementById("deleteCouponConfirmModal");
const cancelDeleteCoupon = document.getElementById("cancelDeleteCoupon");
const confirmDeleteCoupon = document.getElementById("confirmDeleteCoupon");

function getCouponFooterEls() {
  return {
    countText:
      document.getElementById("couponCountText") ||
      document.querySelector("#tableFooterRoot .count-text") ||
      document.querySelector(".count-text"),
    rowsPill:
      document.getElementById("couponRowsPill") ||
      document.querySelector("#tableFooterRoot .rows-pill") ||
      document.querySelector(".rows-pill"),
    prevBtn:
      document.getElementById("couponPrevBtn") ||
      document.querySelector("#tableFooterRoot #prevBtn") ||
      document.querySelector("#prevBtn"),
    nextBtn:
      document.getElementById("couponNextBtn") ||
      document.querySelector("#tableFooterRoot #nextBtn") ||
      document.querySelector("#nextBtn")
  };
}

function renderCouponTable() {
  if (!couponTableBody) return;

  const { countText, prevBtn, nextBtn } = getCouponFooterEls();
  couponTableBody.innerHTML = "";

  const startIndex = (currentCouponPage - 1) * couponRowsPerPage;
  const endIndex = startIndex + couponRowsPerPage;
  const pageData = filteredCouponData.slice(startIndex, endIndex);

  pageData.forEach((item) => {
    const row = document.createElement("div");
    row.className = "coupon-row";
    row.innerHTML = `
      <div class="col id">${item.id}</div>
      <div class="col code">${item.code}</div>
      <div class="col name">${item.name}</div>
      <div class="col discount">${item.discount}</div>
      <div class="col type">${item.type}</div>
      <div class="col usage">${item.usage}</div>
      <div class="col status">${item.status}</div>
    `;

    row.addEventListener("click", () => {
      openEditCouponModal(item.id);
    });

    couponTableBody.appendChild(row);
  });

  const showingFrom = filteredCouponData.length === 0 ? 0 : startIndex + 1;
  const showingTo = Math.min(endIndex, filteredCouponData.length);

  if (countText) {
    countText.textContent = `Showing ${showingFrom} - ${showingTo} of ${filteredCouponData.length}`;
  }

  const totalPages = Math.ceil(filteredCouponData.length / couponRowsPerPage) || 1;
  if (prevBtn) prevBtn.disabled = currentCouponPage === 1;
  if (nextBtn) nextBtn.disabled = currentCouponPage >= totalPages;
}

function applyCouponFilters() {
  const code = filterCouponCode ? filterCouponCode.value.trim().toLowerCase() : "";
  const name = filterCouponName ? filterCouponName.value.trim().toLowerCase() : "";
  const type = filterCouponType ? filterCouponType.value.trim().toLowerCase() : "";
  const status = filterCouponStatus ? filterCouponStatus.value.trim().toLowerCase() : "";

  filteredCouponData = couponData.filter((item) => {
    return (
      (!code || item.code.toLowerCase().includes(code)) &&
      (!name || item.name.toLowerCase().includes(name)) &&
      (!type || type === "all" || item.type.toLowerCase().includes(type)) &&
      (!status || status === "all" || item.status.toLowerCase().includes(status))
    );
  });

  currentCouponPage = 1;
  renderCouponTable();
}

function exportCouponsToCSV() {
  const headers = ["ID", "Code", "Name", "Discount", "Type", "Usage", "Status"];
  const csvRows = [
    headers.join(","),
    ...filteredCouponData.map((item) =>
      [
        item.id,
        `"${item.code}"`,
        `"${item.name}"`,
        `"${item.discount}"`,
        `"${item.type}"`,
        `"${item.usage}"`,
        `"${item.status}"`
      ].join(",")
    )
  ];

  const blob = new Blob([csvRows.join("\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "coupons.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function showToast(toastEl, timerKey) {
  if (!toastEl) return;
  toastEl.classList.add("show");
  if (window[timerKey]) clearTimeout(window[timerKey]);
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

function randomCouponCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 8; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
  return code;
}

function buildDiscountLabel(type, value) {
  if (!value) return "";
  return type.includes("Percentage") ? `${value}%` : `$${value}`;
}

function openCreateCouponModal() {
  if (!createCouponModal) return;
  createCouponModal.classList.add("active");
}

function closeCreateCouponModal() {
  if (!createCouponModal) return;
  createCouponModal.classList.remove("active");
}

function createCoupon() {
  const typeValue = createDiscountType ? createDiscountType.value : "Percentage (%)";
  const usageLimitValue = createUsageLimit && createUsageLimit.value.trim() ? createUsageLimit.value.trim() : "1";

  const newCoupon = {
    id: `${Date.now()}`.slice(-8) + "...",
    code: createCouponCodeInput && createCouponCodeInput.value.trim() ? createCouponCodeInput.value.trim() : randomCouponCode(),
    name: createCouponName ? createCouponName.value.trim() || "-" : "-",
    discount: buildDiscountLabel(typeValue, createDiscountValue ? createDiscountValue.value.trim() : ""),
    type: createCouponType && createCouponType.value.includes("Universal") ? "Universal" : (createCouponType ? createCouponType.value : "Universal"),
    usage: `0 / ${usageLimitValue}`,
    status: createCouponStatus ? createCouponStatus.value : "Active",
    discountType: typeValue,
    discountValue: createDiscountValue ? createDiscountValue.value.trim() : "",
    minOrderValue: createMinOrderValue ? createMinOrderValue.value.trim() : "",
    usageLimit: usageLimitValue,
    startDate: createStartDate ? createStartDate.value.trim() : "",
    endDate: createEndDate ? createEndDate.value.trim() : "",
    description: createCouponDescription ? createCouponDescription.value.trim() : "",
    newCustomerOnly: createNewCustomerOnly ? createNewCustomerOnly.checked : false,
    neverExpires: createNeverExpires ? createNeverExpires.checked : false
  };

  couponData.unshift(newCoupon);
  filteredCouponData = [...couponData];
  currentCouponPage = 1;
  renderCouponTable();

  closeCreateCouponModal();
  showToast(couponSuccessToast, "couponCreateToastTimer");
}

function openEditCouponModal(id) {
  const item = couponData.find((coupon) => coupon.id === id);
  if (!item || !editCouponModal) return;

  selectedCouponId = id;

  if (editCouponCode) editCouponCode.value = item.code || "";
  if (editCouponName) editCouponName.value = item.name || "";
  if (editDiscountType) editDiscountType.value = item.discountType || "Percentage (%)";
  if (editDiscountValue) editDiscountValue.value = item.discountValue || "";
  if (editCouponType) editCouponType.value = item.type === "Universal" ? "Universal (All customers)" : item.type;
  if (editCouponStatus) editCouponStatus.value = item.status || "Active";
  if (editMinOrderValue) editMinOrderValue.value = item.minOrderValue || "";
  if (editUsageLimit) editUsageLimit.value = item.usageLimit || "";
  if (editStartDate) editStartDate.value = item.startDate || "";
  if (editEndDate) editEndDate.value = item.endDate || "";
  if (editCouponDescription) editCouponDescription.value = item.description || "";
  if (editNewCustomerOnly) editNewCustomerOnly.checked = !!item.newCustomerOnly;
  if (editNeverExpires) editNeverExpires.checked = !!item.neverExpires;

  editCouponModal.classList.add("active");
}

function closeEditCouponModal() {
  if (!editCouponModal) return;
  editCouponModal.classList.remove("active");
}

function updateSelectedCoupon() {
  const index = couponData.findIndex((item) => item.id === selectedCouponId);
  if (index === -1) return;

  const typeValue = editDiscountType ? editDiscountType.value : couponData[index].discountType;

  couponData[index].code = editCouponCode ? editCouponCode.value.trim() : couponData[index].code;
  couponData[index].name = editCouponName ? editCouponName.value.trim() : couponData[index].name;
  couponData[index].discountType = typeValue;
  couponData[index].discountValue = editDiscountValue ? editDiscountValue.value.trim() : couponData[index].discountValue;
  couponData[index].discount = buildDiscountLabel(typeValue, couponData[index].discountValue);
  couponData[index].type = editCouponType && editCouponType.value.includes("Universal") ? "Universal" : (editCouponType ? editCouponType.value : couponData[index].type);
  couponData[index].status = editCouponStatus ? editCouponStatus.value : couponData[index].status;
  couponData[index].minOrderValue = editMinOrderValue ? editMinOrderValue.value.trim() : couponData[index].minOrderValue;
  couponData[index].usageLimit = editUsageLimit ? editUsageLimit.value.trim() : couponData[index].usageLimit;
  couponData[index].usage = couponData[index].usageLimit ? `0 / ${couponData[index].usageLimit}` : couponData[index].usage;
  couponData[index].startDate = editStartDate ? editStartDate.value.trim() : couponData[index].startDate;
  couponData[index].endDate = editEndDate ? editEndDate.value.trim() : couponData[index].endDate;
  couponData[index].description = editCouponDescription ? editCouponDescription.value.trim() : couponData[index].description;
  couponData[index].newCustomerOnly = editNewCustomerOnly ? editNewCustomerOnly.checked : couponData[index].newCustomerOnly;
  couponData[index].neverExpires = editNeverExpires ? editNeverExpires.checked : couponData[index].neverExpires;

  applyCouponFilters();
  closeEditCouponModal();
  showToast(couponUpdateToast, "couponUpdateToastTimer");
}

function openDeleteCouponConfirm() {
  if (!deleteCouponConfirmModal) return;
  deleteCouponConfirmModal.classList.add("active");
}

function closeDeleteCouponConfirm() {
  if (!deleteCouponConfirmModal) return;
  deleteCouponConfirmModal.classList.remove("active");
}

function handleDeleteCoupon() {
  const index = couponData.findIndex((item) => item.id === selectedCouponId);
  if (index === -1) return;

  couponData.splice(index, 1);
  applyCouponFilters();
  closeDeleteCouponConfirm();
  closeEditCouponModal();
  showToast(couponDeleteToast, "couponDeleteToastTimer");
}

if (filterCouponCode) filterCouponCode.addEventListener("input", applyCouponFilters);
if (filterCouponName) filterCouponName.addEventListener("input", applyCouponFilters);
if (filterCouponType) filterCouponType.addEventListener("input", applyCouponFilters);
if (filterCouponStatus) filterCouponStatus.addEventListener("input", applyCouponFilters);

const footerEls = getCouponFooterEls();

if (footerEls.prevBtn) {
  footerEls.prevBtn.addEventListener("click", () => {
    if (currentCouponPage > 1) {
      currentCouponPage -= 1;
      renderCouponTable();
    }
  });
}

if (footerEls.nextBtn) {
  footerEls.nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(filteredCouponData.length / couponRowsPerPage) || 1;
    if (currentCouponPage < totalPages) {
      currentCouponPage += 1;
      renderCouponTable();
    }
  });
}

if (footerEls.rowsPill) {
  footerEls.rowsPill.addEventListener("click", () => {
    if (couponRowsPerPage === 10) {
      couponRowsPerPage = 5;
    } else if (couponRowsPerPage === 5) {
      couponRowsPerPage = 20;
    } else {
      couponRowsPerPage = 10;
    }
    footerEls.rowsPill.textContent = `${couponRowsPerPage} rows`;
    currentCouponPage = 1;
    renderCouponTable();
  });
}

if (exportCouponBtn) exportCouponBtn.addEventListener("click", exportCouponsToCSV);
if (openCreateCoupon) openCreateCoupon.addEventListener("click", openCreateCouponModal);
if (closeCreateCoupon) closeCreateCoupon.addEventListener("click", closeCreateCouponModal);
if (cancelCreateCoupon) cancelCreateCoupon.addEventListener("click", closeCreateCouponModal);

if (createCouponModal) {
  createCouponModal.addEventListener("click", (e) => {
    if (e.target === createCouponModal) closeCreateCouponModal();
  });
}

if (generateCouponCode) {
  generateCouponCode.addEventListener("click", () => {
    if (createCouponCodeInput) createCouponCodeInput.value = randomCouponCode();
  });
}

if (editGenerateCouponCode) {
  editGenerateCouponCode.addEventListener("click", () => {
    if (editCouponCode) editCouponCode.value = randomCouponCode();
  });
}

if (submitCreateCoupon) submitCreateCoupon.addEventListener("click", createCoupon);
if (submitEditCoupon) submitEditCoupon.addEventListener("click", updateSelectedCoupon);
if (deleteEditCoupon) deleteEditCoupon.addEventListener("click", openDeleteCouponConfirm);

if (closeCouponSuccessToast) {
  closeCouponSuccessToast.addEventListener("click", () => hideToast(couponSuccessToast, "couponCreateToastTimer"));
}
if (closeCouponUpdateToast) {
  closeCouponUpdateToast.addEventListener("click", () => hideToast(couponUpdateToast, "couponUpdateToastTimer"));
}
if (closeCouponDeleteToast) {
  closeCouponDeleteToast.addEventListener("click", () => hideToast(couponDeleteToast, "couponDeleteToastTimer"));
}

if (closeEditCoupon) closeEditCoupon.addEventListener("click", closeEditCouponModal);
if (cancelEditCoupon) cancelEditCoupon.addEventListener("click", closeEditCouponModal);

if (editCouponModal) {
  editCouponModal.addEventListener("click", (e) => {
    if (e.target === editCouponModal) closeEditCouponModal();
  });
}

if (cancelDeleteCoupon) cancelDeleteCoupon.addEventListener("click", closeDeleteCouponConfirm);
if (confirmDeleteCoupon) confirmDeleteCoupon.addEventListener("click", handleDeleteCoupon);

if (deleteCouponConfirmModal) {
  deleteCouponConfirmModal.addEventListener("click", (e) => {
    if (e.target === deleteCouponConfirmModal) closeDeleteCouponConfirm();
  });
}

renderCouponTable();