const participantsData = [
  {
    id: 1,
    name: "Max Lee",
    dob: "3/11/2026",
    realStage: "S03",
    lifecycle: "Active",
    classes: "CHD_D1_T0900_L1_Loce22db707",
    extraClasses: 0,
    level: "Level 1",
    status: "Confirmed",
    contact: "max",
    phone: "+971555342323",
    service: "test",
    location: "-",
    guardianName: "max",
    guardianEmail: "max.lee@gmail.com",
    guardianPhone: "+971555342323",
    scheduleHistory: [],
    attendanceRecords: []
  },
  {
    id: 2,
    name: "Elson Ee",
    dob: "1/16/1941",
    realStage: "-",
    lifecycle: "Active",
    classes: "CHD_D0_T1030_L1",
    extraClasses: 0,
    level: "Level 1",
    status: "Completed",
    contact: "Elson",
    phone: "+6597422147",
    service: "Children Weekly Swimming",
    location: "Victoria",
    guardianName: "Elson Ee",
    guardianEmail: "elson@gmail.com",
    guardianPhone: "+6597422147",
    scheduleHistory: [
      {
        title: "Schedule changed from Mon 9:00 AM to Wed 10:30 AM",
        date: "Mar 10, 2026",
        meta: "Updated by Admin after parent request."
      }
    ],
    attendanceRecords: [
      {
        date: "Mar 17, 2026",
        className: "CHD_D0_T1030_L1",
        reason: "Sick"
      }
    ]
  },
  {
    id: 3,
    name: "Anna Lee",
    dob: "5/10/2020",
    realStage: "S02",
    lifecycle: "Active",
    classes: "CHD_D1_T1545_L2",
    extraClasses: 0,
    level: "Level 2",
    status: "Confirmed",
    contact: "Anna",
    phone: "+971555123456",
    service: "Toddlers Weekly Swimming",
    location: "Coursetia",
    guardianName: "Anna Lee",
    guardianEmail: "anna@gmail.com",
    guardianPhone: "+971555123456",
    scheduleHistory: [],
    attendanceRecords: []
  },
  {
    id: 4,
    name: "David Tran",
    dob: "2/2/2019",
    realStage: "S01",
    lifecycle: "Active",
    classes: "CHD_D1_T0900_L1",
    extraClasses: 0,
    level: "Level 1",
    status: "Cancelled",
    contact: "David",
    phone: "+84901234567",
    service: "Private Lessons",
    location: "Marina Pool",
    guardianName: "David Tran",
    guardianEmail: "david@gmail.com",
    guardianPhone: "+84901234567",
    scheduleHistory: [
      {
        title: "Schedule changed from Tue 8:00 AM to Thu 8:30 AM",
        date: "Feb 28, 2026",
        meta: "Parent requested a time change."
      }
    ],
    attendanceRecords: [
      {
        date: "Mar 03, 2026",
        className: "CHD_D1_T0900_L1",
        reason: "Travel"
      },
      {
        date: "Mar 10, 2026",
        className: "CHD_D1_T0900_L1",
        reason: "Medical leave"
      }
    ]
  },
  {
    id: 5,
    name: "Sophia Nguyen",
    dob: "7/20/2020",
    realStage: "S03",
    lifecycle: "Active",
    classes: "CHD_D1_T1100_L3",
    extraClasses: 0,
    level: "Level 3",
    status: "Confirmed",
    contact: "Sophia",
    phone: "+971555987654",
    service: "Children Weekly Swimming",
    location: "Coursetia",
    guardianName: "Sophia Nguyen",
    guardianEmail: "sophia@gmail.com",
    guardianPhone: "+971555987654",
    scheduleHistory: [],
    attendanceRecords: []
  },
  {
    id: 6,
    name: "Noah Malik",
    dob: "1/1/2021",
    realStage: "-",
    lifecycle: "Active",
    classes: "-",
    extraClasses: 0,
    level: "-",
    status: "Confirmed",
    contact: "Noah",
    phone: "-",
    service: "-",
    location: "-",
    guardianName: "Noah Malik",
    guardianEmail: "-",
    guardianPhone: "-",
    scheduleHistory: [],
    attendanceRecords: []
  },
  {
    id: 7,
    name: "Emma Noor",
    dob: "3/3/2020",
    realStage: "S02",
    lifecycle: "Suspended",
    classes: "LAC_D0_T1000_L1",
    extraClasses: 0,
    level: "Level 1",
    status: "Completed",
    contact: "Emma",
    phone: "+6591234567",
    service: "Private Ladies Swimming",
    location: "Victoria",
    guardianName: "Emma Noor",
    guardianEmail: "emma@gmail.com",
    guardianPhone: "+6591234567",
    scheduleHistory: [
      {
        title: "Schedule changed from Fri 4:00 PM to Sat 9:00 AM",
        date: "Mar 01, 2026",
        meta: "Coach availability update."
      }
    ],
    attendanceRecords: [
      {
        date: "Mar 08, 2026",
        className: "LAC_D0_T1000_L1",
        reason: "Absent without notice"
      }
    ]
  },
  {
    id: 8,
    name: "Lucas Kim",
    dob: "9/9/2019",
    realStage: "S04",
    lifecycle: "Active",
    classes: "CHD_D1_T1600_L1",
    extraClasses: 1,
    level: "Level 1",
    status: "Confirmed",
    contact: "Lucas",
    phone: "+821012345678",
    service: "Children Weekly Swimming",
    location: "Coursetia",
    guardianName: "Lucas Kim",
    guardianEmail: "lucas@gmail.com",
    guardianPhone: "+821012345678",
    scheduleHistory: [],
    attendanceRecords: []
  },
  {
    id: 9,
    name: "Olivia Tan",
    dob: "6/6/2018",
    realStage: "S03",
    lifecycle: "Withdrawn",
    classes: "CHD_D0_T0815_L1",
    extraClasses: 0,
    level: "Level 1",
    status: "Cancelled",
    contact: "Olivia",
    phone: "+6598765432",
    service: "Toddlers Weekly Swimming",
    location: "Marina Pool",
    guardianName: "Olivia Tan",
    guardianEmail: "olivia@gmail.com",
    guardianPhone: "+6598765432",
    scheduleHistory: [],
    attendanceRecords: [
      {
        date: "Feb 20, 2026",
        className: "CHD_D0_T0815_L1",
        reason: "Overseas leave"
      }
    ]
  },
  {
    id: 10,
    name: "James Wong",
    dob: "8/8/2017",
    realStage: "S02",
    lifecycle: "Active",
    classes: "CHD_D0_T1030_L3",
    extraClasses: 1,
    level: "Level 3",
    status: "Confirmed",
    contact: "James",
    phone: "+6599998888",
    service: "Children Weekly Swimming",
    location: "Victoria",
    guardianName: "James Wong",
    guardianEmail: "james@gmail.com",
    guardianPhone: "+6599998888",
    scheduleHistory: [
      {
        title: "Schedule changed from Wed 3:30 PM to Thu 4:00 PM",
        date: "Mar 05, 2026",
        meta: "Updated due to class consolidation."
      }
    ],
    attendanceRecords: []
  }
];

const participantFilters = {
  search: "",
  classKeyword: "",
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

function getParticipantStatusClass(status) {
  const normalized = String(status).toLowerCase();

  if (normalized === "confirmed") return "status-confirmed";
  if (normalized === "completed") return "status-completed";
  if (normalized === "cancelled") return "status-cancelled";

  return "";
}

function getLifecycleText(value) {
  return String(value || "").toUpperCase();
}

function renderParticipantsTable(data) {
  const tableBody = document.getElementById("participantsTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  if (!data.length) {
    const emptyRow = document.createElement("div");
    emptyRow.className = "participants-row participants-row-empty";
    emptyRow.innerHTML = `<div class="col" style="grid-column: 1 / -1;">No participants found.</div>`;
    tableBody.appendChild(emptyRow);
    return;
  }

  data.forEach((item) => {
    const row = document.createElement("div");
    row.className = "participants-row";

    const classCell =
      item.extraClasses > 0
        ? `${escapeHtml(item.classes)} <span class="status-plus">+${item.extraClasses}</span>`
        : escapeHtml(item.classes);

    row.innerHTML = `
      <div class="col">${escapeHtml(item.name)}</div>
      <div class="col">${escapeHtml(item.dob)}</div>
      <div class="col">${escapeHtml(item.realStage)}</div>
      <div class="col">${escapeHtml(item.lifecycle)}</div>
      <div class="col">${classCell}</div>
      <div class="col">${escapeHtml(item.level)}</div>
      <div class="col status ${getParticipantStatusClass(item.status)}">${escapeHtml(item.status)}</div>
      <div class="col">${escapeHtml(item.contact)}</div>
      <div class="col">${escapeHtml(item.phone)}</div>
    `;

    row.addEventListener("click", () => openParticipantModal(item));
    tableBody.appendChild(row);
  });
}

function updateParticipantsFooter(total) {
  if (typeof renderTableFooter !== "function") return;

  const footerText =
    total === 0
      ? "Showing 0 - 0 of 0"
      : `Showing 1 - ${Math.min(20, total)} of ${total}`;

  renderTableFooter(footerText);
}

function applyParticipantFilters() {
  const searchKeyword = participantFilters.search.trim().toLowerCase();
  const classKeyword = participantFilters.classKeyword.trim().toLowerCase();

  const filtered = participantsData.filter((item) => {
    const matchesSearch =
      !searchKeyword ||
      item.name.toLowerCase().includes(searchKeyword) ||
      item.contact.toLowerCase().includes(searchKeyword) ||
      item.phone.toLowerCase().includes(searchKeyword);

    const matchesClass =
      !classKeyword ||
      item.classes.toLowerCase().includes(classKeyword);

    const matchesStatus =
      participantFilters.status === "All" ||
      item.status === participantFilters.status;

    return matchesSearch && matchesClass && matchesStatus;
  });

  renderParticipantsTable(filtered);
  updateParticipantsFooter(filtered.length);
}

function bindParticipantSearch() {
  const input = document.getElementById("filterParticipantSearch");
  if (!input) return;

  input.addEventListener("input", (event) => {
    participantFilters.search = event.target.value || "";
    applyParticipantFilters();
  });
}

function bindParticipantClassFilter() {
  const input = document.getElementById("filterParticipantClass");
  if (!input) return;

  input.addEventListener("input", (event) => {
    participantFilters.classKeyword = event.target.value || "";
    applyParticipantFilters();
  });
}

function bindParticipantStatusFilters() {
  const chips = document.querySelectorAll("#participantsStatusChipRow .participants-chip");
  if (!chips.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      participantFilters.status = chip.dataset.status || "All";
      applyParticipantFilters();
    });
  });
}

function bindParticipantExport() {
  const exportBtn = document.getElementById("exportParticipantsBtn");
  if (!exportBtn) return;

  exportBtn.addEventListener("click", () => {
    const filtered = participantsData.filter((item) => {
      const searchKeyword = participantFilters.search.trim().toLowerCase();
      const classKeyword = participantFilters.classKeyword.trim().toLowerCase();

      const matchesSearch =
        !searchKeyword ||
        item.name.toLowerCase().includes(searchKeyword) ||
        item.contact.toLowerCase().includes(searchKeyword) ||
        item.phone.toLowerCase().includes(searchKeyword);

      const matchesClass =
        !classKeyword ||
        item.classes.toLowerCase().includes(classKeyword);

      const matchesStatus =
        participantFilters.status === "All" ||
        item.status === participantFilters.status;

      return matchesSearch && matchesClass && matchesStatus;
    });

    const headers = [
      "Name",
      "Date of Birth",
      "Real Stage",
      "Lifecycle",
      "Classes",
      "Level",
      "Status",
      "Contact",
      "Phone"
    ];

    const csvRows = [
      headers.join(","),
      ...filtered.map((item) =>
        [
          `"${item.name}"`,
          `"${item.dob}"`,
          `"${item.realStage}"`,
          `"${item.lifecycle}"`,
          `"${item.extraClasses > 0 ? `${item.classes} +${item.extraClasses}` : item.classes}"`,
          `"${item.level}"`,
          `"${item.status}"`,
          `"${item.contact}"`,
          `"${item.phone}"`
        ].join(",")
      )
    ];

    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv;charset=utf-8;"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "participants.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

function populateParticipantHistoryTab(item) {
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value ?? "-";
  };

  setText("participantHistoryEnrollmentCode", item.classes || "-");
  setText("participantHistoryEnrollmentService", item.service || "-");
  setText("participantHistoryEnrollmentLevel", item.level || "-");
  setText("participantHistoryEnrollmentStatus", String(item.status || "").toUpperCase());

  const title = document.getElementById("participantScheduleHistoryTitle");
  const empty = document.getElementById("participantScheduleHistoryEmpty");
  const list = document.getElementById("participantScheduleHistoryList");

  if (!title || !empty || !list) return;

  const history = item.scheduleHistory || [];
  title.textContent = `SCHEDULE CHANGE HISTORY (${history.length})`;
  list.innerHTML = "";

  if (!history.length) {
    empty.style.display = "flex";
    list.style.display = "none";
    return;
  }

  empty.style.display = "none";
  list.style.display = "flex";

  history.forEach((record) => {
    const historyItem = document.createElement("div");
    historyItem.className = "participant-history-item";
    historyItem.innerHTML = `
      <div class="participant-history-item-top">
        <div class="participant-history-item-title">${escapeHtml(record.title)}</div>
        <div class="participant-history-item-date">${escapeHtml(record.date)}</div>
      </div>
      <div class="participant-history-item-meta">${escapeHtml(record.meta)}</div>
    `;
    list.appendChild(historyItem);
  });
}

function populateParticipantAttendanceTab(item) {
  const title = document.getElementById("participantAttendanceTitle");
  const empty = document.getElementById("participantAttendanceEmpty");
  const list = document.getElementById("participantAttendanceList");

  if (!title || !empty || !list) return;

  const records = item.attendanceRecords || [];
  title.textContent = `ATTENDANCE (${records.length} ABSENCE${records.length === 1 ? "" : "S"})`;
  list.innerHTML = "";

  if (!records.length) {
    empty.style.display = "flex";
    list.style.display = "none";
    return;
  }

  empty.style.display = "none";
  list.style.display = "flex";

  records.forEach((record) => {
    const attendanceItem = document.createElement("div");
    attendanceItem.className = "participant-attendance-item";
    attendanceItem.innerHTML = `
      <div class="participant-attendance-item-left">
        <div class="participant-attendance-item-date">${escapeHtml(record.date)}</div>
        <div class="participant-attendance-item-class">${escapeHtml(record.className)}</div>
        <div class="participant-attendance-item-reason">Reason: ${escapeHtml(record.reason)}</div>
      </div>
      <div class="participant-attendance-item-right">
        <span class="participant-attendance-badge">ABSENT</span>
      </div>
    `;
    list.appendChild(attendanceItem);
  });
}

function populateParticipantModal(item) {
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value ?? "-";
  };

  setText("participantProfileStage", item.realStage || "-");
  setText("participantProfileLifecycle", getLifecycleText(item.lifecycle));
  setText("participantProfileName", item.name);
  setText("participantProfileContact", item.contact);

  setText("participantInfoName", item.name);
  setText("participantInfoDob", item.dob);
  setText("participantInfoStage", item.realStage || "-");

  setText("participantEnrollmentTitle", "ENROLLMENTS (1)");
  setText("participantEnrollmentCode", item.classes || "-");
  setText("participantEnrollmentLifecycle", getLifecycleText(item.lifecycle));
  setText("participantEnrollmentStatus", String(item.status || "").toUpperCase());
  setText("participantEnrollmentService", item.service || "-");
  setText("participantEnrollmentLevel", item.level || "-");
  setText("participantEnrollmentLocation", item.location || "-");

  setText("participantGuardianName", item.guardianName || item.contact || "-");
  setText("participantGuardianPhone", item.guardianPhone || item.phone || "-");
  setText("participantGuardianEmail", item.guardianEmail || "-");

  populateParticipantHistoryTab(item);
  populateParticipantAttendanceTab(item);
}

function setActiveParticipantTab(tabName) {
  const tabs = document.querySelectorAll(".participant-profile-tab");
  const panels = document.querySelectorAll(".participant-profile-panel");

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === tabName);
  });
}

function openParticipantModal(item) {
  const overlay = document.getElementById("participantModalOverlay");
  if (!overlay) return;

  populateParticipantModal(item);
  setActiveParticipantTab("details");
  overlay.classList.add("active");
}

function closeParticipantModal() {
  const overlay = document.getElementById("participantModalOverlay");
  if (!overlay) return;
  overlay.classList.remove("active");
}

function bindParticipantModal() {
  const closeBtn = document.getElementById("participantModalClose");
  const footerCloseBtn = document.getElementById("participantFooterClose");
  const overlay = document.getElementById("participantModalOverlay");
  const tabs = document.querySelectorAll(".participant-profile-tab");

  if (closeBtn) closeBtn.addEventListener("click", closeParticipantModal);
  if (footerCloseBtn) footerCloseBtn.addEventListener("click", closeParticipantModal);

  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeParticipantModal();
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveParticipantTab(tab.dataset.tab);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  bindParticipantSearch();
  bindParticipantClassFilter();
  bindParticipantStatusFilters();
  bindParticipantExport();
  bindParticipantModal();
  applyParticipantFilters();
});