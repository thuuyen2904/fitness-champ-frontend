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
    status: "Active",
    students: [
      {
        name: "Olivia Rahman",
        dob: "Apr 1, 2026",
        contact: "Michael",
        status: "Active",
        attendanceRate: "75%"
      },
      {
        name: "Emma Noor",
        dob: "Mar 1, 2026",
        contact: "Emma",
        status: "Active",
        attendanceRate: "82%"
      },
      {
        name: "Noah Malik",
        dob: "Feb 10, 2026",
        contact: "Noah",
        status: "Trial",
        attendanceRate: "50%"
      }
    ],
    sessions: [
      {
        id: 101,
        date: "Jun 15, 2026",
        time: "3:45 PM",
        duration: "30 min",
        coach: "John",
        location: "Coursetia",
        className: "Toddlers Weekly Swimming",
        status: "Confirmed",
        attendanceTitleDate: "Monday, Jun 15, 2026",
        attendanceParticipants: [
          {
            name: "Olivia Rahman",
            dob: "Apr 1, 2026",
            attended: false,
            reason: ""
          }
        ]
      },
      {
        id: 102,
        date: "Jun 8, 2026",
        time: "3:45 PM",
        duration: "30 min",
        coach: "John",
        location: "Coursetia",
        className: "Toddlers Weekly Swimming",
        status: "Confirmed",
        attendanceTitleDate: "Monday, Jun 8, 2026",
        attendanceParticipants: [
          {
            name: "Emma Noor",
            dob: "Mar 1, 2026",
            attended: false,
            reason: ""
          }
        ]
      }
    ]
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
    status: "Upcoming",
    students: [
      {
        name: "Liam Chen",
        dob: "Mar 16, 2026",
        contact: "Liam",
        status: "Active",
        attendanceRate: "100%"
      },
      {
        name: "Sophia Lee",
        dob: "Mar 5, 2026",
        contact: "Sophia",
        status: "Active",
        attendanceRate: "90%"
      }
    ],
    sessions: [
      {
        id: 201,
        date: "Jun 15, 2026",
        time: "1:15 PM",
        duration: "45 min",
        coach: "Michael",
        location: "Victoria",
        className: "Children Weekly Swimming",
        status: "Confirmed",
        attendanceTitleDate: "Monday, Jun 15, 2026",
        attendanceParticipants: [
          {
            name: "Liam Chen",
            dob: "Mar 16, 2026",
            attended: true,
            reason: "Present"
          },
          {
            name: "Sophia Lee",
            dob: "Mar 5, 2026",
            attended: false,
            reason: "Sick"
          }
        ]
      }
    ]
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
    status: "Completed",
    students: [
      {
        name: "Ava Karim",
        dob: "Feb 8, 2026",
        contact: "Ava",
        status: "Completed",
        attendanceRate: "95%"
      }
    ],
    sessions: [
      {
        id: 301,
        date: "Jun 9, 2026",
        time: "9:00 AM",
        duration: "60 min",
        coach: "Sarah",
        location: "Marina Pool",
        className: "Private Ladies Swimming",
        status: "Confirmed",
        attendanceTitleDate: "Tuesday, Jun 9, 2026",
        attendanceParticipants: [
          {
            name: "Ava Karim",
            dob: "Feb 8, 2026",
            attended: true,
            reason: "Present"
          }
        ]
      }
    ]
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
    status: "Active",
    students: [
      {
        name: "Mia Hassan",
        dob: "Jan 18, 2026",
        contact: "Mia",
        status: "Active",
        attendanceRate: "88%"
      }
    ],
    sessions: [
      {
        id: 401,
        date: "Jun 15, 2026",
        time: "9:00 AM",
        duration: "60 min",
        coach: "Emma",
        location: "Coursetia",
        className: "Toddlers Weekly Swimming",
        status: "Rescheduled",
        attendanceTitleDate: "Monday, Jun 15, 2026",
        attendanceParticipants: [
          {
            name: "Mia Hassan",
            dob: "Jan 18, 2026",
            attended: false,
            reason: ""
          }
        ]
      }
    ]
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
    status: "Cancelled",
    students: [
      {
        name: "James Wong",
        dob: "Aug 8, 2026",
        contact: "James",
        status: "Active",
        attendanceRate: "40%"
      }
    ],
    sessions: [
      {
        id: 501,
        date: "Jun 14, 2026",
        time: "5:00 AM",
        duration: "45 min",
        coach: "Emma",
        location: "Victoria",
        className: "Children Weekly Swimming",
        status: "Cancelled",
        attendanceTitleDate: "Sunday, Jun 14, 2026",
        attendanceParticipants: [
          {
            name: "James Wong",
            dob: "Aug 8, 2026",
            attended: false,
            reason: ""
          }
        ]
      }
    ]
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
    status: "Active",
    students: [
      {
        name: "Lucas Kim",
        dob: "Sep 9, 2026",
        contact: "Lucas",
        status: "Active",
        attendanceRate: "67%"
      }
    ],
    sessions: [
      {
        id: 601,
        date: "Jun 14, 2026",
        time: "12:30 PM",
        duration: "45 min",
        coach: "Michael",
        location: "Coursetia",
        className: "Children Weekly Swimming",
        status: "Confirmed",
        attendanceTitleDate: "Sunday, Jun 14, 2026",
        attendanceParticipants: [
          {
            name: "Lucas Kim",
            dob: "Sep 9, 2026",
            attended: true,
            reason: "Present"
          }
        ]
      }
    ]
  }
];

let currentClass = null;
let currentAttendanceSession = null;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getInitials(name) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
}

function getAttendanceStatusClass(status) {
  const value = String(status || "").toLowerCase();
  if (value === "confirmed") return "class-status-active";
  if (value === "rescheduled") return "class-status-upcoming";
  if (value === "cancelled") return "class-status-cancelled";
  return "";
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value ?? "-";
}

function populateClassSummary(item) {
  setText("classSummaryCode", item.classCode);
  setText("classSummaryName", item.className);
  setText("classSummaryService", item.service);
  setText("classSummaryStatus", String(item.status || "").toUpperCase());
  setText("classSummaryLevel", item.level);
  setText("classSummaryCoach", item.coach);
  setText("classSummaryLocation", item.location);
  setText("classSummarySchedule", item.schedule);
  setText("classSummaryCapacity", item.capacityText);
}

function renderClassStudents(item) {
  const title = document.getElementById("classStudentsTitle");
  const body = document.getElementById("classStudentsBody");
  if (!title || !body) return;

  const students = item.students || [];
  title.textContent = `Students (${students.length})`;
  body.innerHTML = "";

  students.forEach((student) => {
    const row = document.createElement("div");
    row.className = "class-students-row";
    row.innerHTML = `
      <div class="col">
        <div class="class-student-name-wrap">
          <span class="class-student-avatar">${getInitials(student.name)}</span>
          <div class="class-student-name-block">
            <span class="class-student-name">${escapeHtml(student.name)}</span>
            <span class="class-student-sub">DOB: ${escapeHtml(student.dob)}</span>
          </div>
        </div>
      </div>
      <div class="col">${escapeHtml(student.contact)}</div>
      <div class="col status">${escapeHtml(student.status)}</div>
      <div class="col">${escapeHtml(student.attendanceRate)}</div>
    `;
    body.appendChild(row);
  });
}

function getSessionAttendanceText(session) {
  const total = (session.attendanceParticipants || []).length;
  const present = (session.attendanceParticipants || []).filter((item) => item.attended).length;
  return `${present} / ${total}`;
}

function renderClassSessions(item) {
  const title = document.getElementById("classSessionsTitle");
  const body = document.getElementById("classSessionsBody");
  if (!title || !body) return;

  const sessions = item.sessions || [];
  title.textContent = `Sessions (${sessions.length})`;
  body.innerHTML = "";

  sessions.forEach((session) => {
    const row = document.createElement("div");
    row.className = "class-sessions-row class-session-row-clickable";
    row.innerHTML = `
      <div class="col">${escapeHtml(session.date)}</div>
      <div class="col">${escapeHtml(session.time)}</div>
      <div class="col">${escapeHtml(session.coach)}</div>
      <div class="col status ${getAttendanceStatusClass(session.status)}">${escapeHtml(session.status)}</div>
      <div class="col">${escapeHtml(getSessionAttendanceText(session))}</div>
    `;

    row.addEventListener("click", () => {
      openSessionAttendance(session);
    });

    body.appendChild(row);
  });
}

function getAttendanceCounts(session) {
  const participants = session.attendanceParticipants || [];
  const total = participants.length;
  const present = participants.filter((item) => item.attended).length;
  return { total, present };
}

function updateAttendanceSummary(session) {
  const pill = document.getElementById("attendanceSummaryPill");
  if (!pill) return;

  const { total, present } = getAttendanceCounts(session);
  pill.textContent = `${present} / ${total} Attended`;
}

function buildReasonOptions(selectedReason, attended) {
  const currentReason =
    attended ? "" : (selectedReason === "Present" ? "" : selectedReason || "");

  return `
    <option value="" ${currentReason === "" ? "selected" : ""}>Select reason...</option>
    <option value="Makeup" ${currentReason === "Makeup" ? "selected" : ""}>Makeup</option>
    <option value="MC" ${currentReason === "MC" ? "selected" : ""}>MC</option>
    <option value="Overseas leave" ${currentReason === "Overseas leave" ? "selected" : ""}>Overseas leave</option>
    <option value="Sick" ${currentReason === "Sick" ? "selected" : ""}>Sick</option>
    <option value="Other" ${currentReason === "Other" ? "selected" : ""}>Other</option>
  `;
}

function renderAttendanceRows(session) {
  const tableBody = document.getElementById("attendanceTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  (session.attendanceParticipants || []).forEach((participant, index) => {
    const row = document.createElement("div");
    row.className = "attendance-row";

    row.innerHTML = `
      <div class="col participant">
        <div class="attendance-participant-wrap">
          <span class="attendance-avatar">${getInitials(participant.name)}</span>
          <div class="attendance-name-block">
            <span class="attendance-name">${escapeHtml(participant.name)}</span>
            <span class="attendance-dob">DOB: ${escapeHtml(participant.dob)}</span>
          </div>
        </div>
      </div>

      <div class="col attended">
        <div class="attendance-check-wrap">
          <input
            class="attendance-check-input"
            type="checkbox"
            data-index="${index}"
            ${participant.attended ? "checked" : ""}
          />
        </div>
      </div>

      <div class="col reason">
        <select class="attendance-reason-select" data-reason-index="${index}" ${participant.attended ? "disabled" : ""}>
          ${buildReasonOptions(participant.reason, participant.attended)}
        </select>
      </div>
    `;

    tableBody.appendChild(row);
  });

  tableBody.querySelectorAll(".attendance-check-input").forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const idx = Number(event.target.dataset.index);
      const item = session.attendanceParticipants[idx];
      if (!item) return;

      item.attended = event.target.checked;

      if (item.attended) {
        item.reason = "Present";
      } else if (item.reason === "Present") {
        item.reason = "";
      }

      updateAttendanceSummary(session);
      renderAttendanceRows(session);
      renderClassSessions(currentClass);
    });
  });

  tableBody.querySelectorAll(".attendance-reason-select").forEach((select) => {
    select.addEventListener("change", (event) => {
      const idx = Number(event.target.dataset.reasonIndex);
      const item = session.attendanceParticipants[idx];
      if (!item) return;

      item.reason = event.target.value;
      if (event.target.value) {
        item.attended = false;
      }

      updateAttendanceSummary(session);
      renderAttendanceRows(session);
      renderClassSessions(currentClass);
    });
  });
}

function populateSessionAttendanceHeader(session) {
  setText("attendanceSessionDate", session.attendanceTitleDate || session.date);
  setText("attendanceSessionTime", session.time);
  setText("attendanceSessionLocation", session.location);
  setText("attendanceSessionClassName", session.className);

  const coachSelect = document.getElementById("attendanceCoachSelect");
  if (coachSelect) coachSelect.value = session.coach || "John";
}

function openSessionAttendance(session) {
  const overlay = document.getElementById("sessionAttendanceOverlay");
  if (!overlay || !session) return;

  currentAttendanceSession = session;
  populateSessionAttendanceHeader(session);
  updateAttendanceSummary(session);
  renderAttendanceRows(session);
  overlay.classList.add("active");
}

function closeSessionAttendance() {
  const overlay = document.getElementById("sessionAttendanceOverlay");
  if (!overlay) return;
  overlay.classList.remove("active");
  currentAttendanceSession = null;
}

function bindSessionAttendance() {
  const overlay = document.getElementById("sessionAttendanceOverlay");
  const closeBtn = document.getElementById("closeSessionAttendance");
  const footerCloseBtn = document.getElementById("footerCloseSessionAttendance");
  const markAllBtn = document.getElementById("markAllPresentBtn");
  const saveBtn = document.getElementById("saveAttendanceBtn");
  const coachSelect = document.getElementById("attendanceCoachSelect");

  if (closeBtn) closeBtn.addEventListener("click", closeSessionAttendance);
  if (footerCloseBtn) footerCloseBtn.addEventListener("click", closeSessionAttendance);

  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeSessionAttendance();
    });
  }

  if (coachSelect) {
    coachSelect.addEventListener("change", () => {
      if (currentAttendanceSession) {
        currentAttendanceSession.coach = coachSelect.value;
        renderClassSessions(currentClass);
      }
    });
  }

  if (markAllBtn) {
    markAllBtn.addEventListener("click", () => {
      if (!currentAttendanceSession) return;

      (currentAttendanceSession.attendanceParticipants || []).forEach((participant) => {
        participant.attended = true;
        participant.reason = "Present";
      });

      updateAttendanceSummary(currentAttendanceSession);
      renderAttendanceRows(currentAttendanceSession);
      renderClassSessions(currentClass);
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      closeSessionAttendance();
    });
  }
}

function getClassIdFromQuery() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id")) || 1;
}

function bindBackButton() {
  const backBtn = document.getElementById("backToClassesBtn");
  if (!backBtn) return;

  backBtn.addEventListener("click", () => {
    window.location.href = "./classes.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const classId = getClassIdFromQuery();
  currentClass = classesData.find((item) => item.id === classId) || classesData[0];

  populateClassSummary(currentClass);
  renderClassStudents(currentClass);
  renderClassSessions(currentClass);

  bindBackButton();
  bindSessionAttendance();
});