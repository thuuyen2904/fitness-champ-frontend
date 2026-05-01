const classesData = [
  {
    id: 1,
    classCode: "TOD-L1-MON-1545",
    className: "Toddlers Weekly Swimming",
    service: "Swimming",
    level: "Level 1",
    coach: "John",
    location: "Coursetia",
    schedule: "Monday · 3:45 PM - 4:15 PM",
    sessionsSummary: "6 / 12",
    capacityText: "8 / 10",
    status: "Active"
  },
  {
    id: 2,
    classCode: "CHD-L1-MON-1315",
    className: "Children Weekly Swimming",
    service: "Swimming",
    level: "Level 1",
    coach: "Michael",
    location: "Victoria",
    schedule: "Monday · 1:15 PM - 2:00 PM",
    sessionsSummary: "4 / 10",
    capacityText: "6 / 8",
    status: "Upcoming"
  },
  {
    id: 3,
    classCode: "PLS-L2-TUE-0900",
    className: "Private Ladies Swimming",
    service: "Swimming",
    level: "Level 2",
    coach: "Sarah",
    location: "Marina Pool",
    schedule: "Tuesday · 9:00 AM - 10:00 AM",
    sessionsSummary: "8 / 8",
    capacityText: "4 / 4",
    status: "Completed"
  },
  {
    id: 4,
    classCode: "TOD-L6-MON-0900",
    className: "Toddlers Weekly Swimming",
    service: "Swimming",
    level: "Level 6",
    coach: "Emma",
    location: "Coursetia",
    schedule: "Monday · 9:00 AM - 10:00 AM",
    sessionsSummary: "3 / 10",
    capacityText: "5 / 8",
    status: "Active"
  },
  {
    id: 5,
    classCode: "CHD-L1-SUN-0500",
    className: "Children Weekly Swimming",
    service: "Swimming",
    level: "Level 1",
    coach: "Emma",
    location: "Victoria",
    schedule: "Sunday · 5:00 AM - 5:45 AM",
    sessionsSummary: "1 / 9",
    capacityText: "3 / 8",
    status: "Cancelled"
  },
  {
    id: 6,
    classCode: "CHD-L1-SUN-1230",
    className: "Children Weekly Swimming",
    service: "Swimming",
    level: "Level 1",
    coach: "Michael",
    location: "Coursetia",
    schedule: "Sunday · 12:30 PM - 1:15 PM",
    sessionsSummary: "2 / 9",
    capacityText: "4 / 8",
    status: "Active"
  }
];

const classFilters = {
  search: "",
  coach: "",
  location: "",
  status: "All"
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getClassStatusClass(status) {
  const value = String(status || "").toLowerCase();
  if (value === "upcoming") return "class-status-upcoming";
  if (value === "active") return "class-status-active";
  if (value === "completed") return "class-status-completed";
  if (value === "cancelled") return "class-status-cancelled";
  return "";
}

function renderClassesTable(data) {
  const tableBody = document.getElementById("classesTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  if (!data.length) {
    const emptyRow = document.createElement("div");
    emptyRow.className = "classes-row classes-row-empty";
    emptyRow.innerHTML = `<div class="col" style="grid-column: 1 / -1;">No classes found.</div>`;
    tableBody.appendChild(emptyRow);
    return;
  }

  data.forEach((item) => {
    const row = document.createElement("div");
    row.className = "classes-row";
    row.innerHTML = `
      <div class="col">${escapeHtml(item.classCode)}</div>
      <div class="col">${escapeHtml(item.className)}</div>
      <div class="col">${escapeHtml(item.schedule)}</div>
      <div class="col">${escapeHtml(item.coach)}</div>
      <div class="col">${escapeHtml(item.location)}</div>
      <div class="col">${escapeHtml(item.sessionsSummary)}</div>
      <div class="col">${escapeHtml(item.level)}</div>
      <div class="col status ${getClassStatusClass(item.status)}">${escapeHtml(item.status)}</div>
    `;

    row.addEventListener("click", () => {
      window.location.href = `./class-detail.html?id=${item.id}`;
    });

    tableBody.appendChild(row);
  });
}

function updateClassesFooter(total) {
  if (typeof renderTableFooter !== "function") return;

  const footerText =
    total === 0
      ? "Showing 0 - 0 of 0"
      : `Showing 1 - ${Math.min(20, total)} of ${total}`;

  renderTableFooter(footerText);
}

function applyClassFilters() {
  const keyword = classFilters.search.trim().toLowerCase();

  const filtered = classesData.filter((item) => {
    const matchesSearch =
      !keyword ||
      item.classCode.toLowerCase().includes(keyword) ||
      item.className.toLowerCase().includes(keyword) ||
      item.schedule.toLowerCase().includes(keyword);

    const matchesCoach =
      !classFilters.coach || item.coach === classFilters.coach;

    const matchesLocation =
      !classFilters.location || item.location === classFilters.location;

    const matchesStatus =
      classFilters.status === "All" || item.status === classFilters.status;

    return matchesSearch && matchesCoach && matchesLocation && matchesStatus;
  });

  renderClassesTable(filtered);
  updateClassesFooter(filtered.length);
}

function bindClassFilters() {
  const searchInput = document.getElementById("filterClassSearch");
  const coachSelect = document.getElementById("filterClassCoach");
  const locationSelect = document.getElementById("filterClassLocation");
  const chips = document.querySelectorAll("#classesStatusChipRow .classes-chip");

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      classFilters.search = event.target.value || "";
      applyClassFilters();
    });
  }

  if (coachSelect) {
    coachSelect.addEventListener("change", (event) => {
      classFilters.coach = event.target.value || "";
      applyClassFilters();
    });
  }

  if (locationSelect) {
    locationSelect.addEventListener("change", (event) => {
      classFilters.location = event.target.value || "";
      applyClassFilters();
    });
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      classFilters.status = chip.dataset.status || "All";
      applyClassFilters();
    });
  });
}

function bindExportClasses() {
  const exportBtn = document.getElementById("exportClassesBtn");
  if (!exportBtn) return;

  exportBtn.addEventListener("click", () => {
    const headers = [
      "Class Code",
      "Class Name",
      "Schedule",
      "Coach",
      "Location",
      "Sessions",
      "Level",
      "Status"
    ];

    const csvRows = [
      headers.join(","),
      ...classesData.map((item) =>
        [
          `"${item.classCode}"`,
          `"${item.className}"`,
          `"${item.schedule}"`,
          `"${item.coach}"`,
          `"${item.location}"`,
          `"${item.sessionsSummary}"`,
          `"${item.level}"`,
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
    link.download = "classes.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

function bindCreateClass() {
  const btn = document.getElementById("openCreateClass");
  if (!btn) return;

  btn.addEventListener("click", () => {
    window.location.href = "./class-create.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindClassFilters();
  bindExportClasses();
  bindCreateClass();
  applyClassFilters();
});