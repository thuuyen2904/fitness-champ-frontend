const bookingData = [
  {
    id: "ba1951a2",
    contact: "Max Lee",
    participants: [{ name: "Max Lee", dob: "3/1/2026" }],
    service: "Private Ladies Swimming",
    location: "Marina Pool",
    email: "max.lee@gmail.com",
    phone: "+971 55 534 2323",
    startDate: "Mar 16, 2026 5:00 AM",
    endDateFull: "Jun 15, 2026 5:00 AM",
    endDate: "6/15/2026",
    classSchedule: "Monday, 9:00 AM - 10:00 AM",
    schedule: "Mon 9:00 AM - 10:00 AM",
    totalSessions: 14,
    status: "Confirmed",
    totalAmount: "$420.00",
    bookingDate: "3/16/2026",
    createdAt: "Mar 13, 2026 11:37 AM",
    invoice: {
      code: "INV_260313_003",
      status: "Paid",
      amount: "$420.00",
      Subtotal: "420.00",
      Discount: "0.00",
      FinalAmount: "420.00",
      paidDate: "3/13/2026",
      dueDate: "3/13/2026",
      paidAt: "3/13/2026"
    },
    auditLogs: [
      {
        action: "Booking created",
        time: "Mar 13, 2026 11:37 AM",
        meta: "Created by Admin"
      }
    ],
    sessions: [
      { index: 1, date: "Mar 16, 2026", time: "5:00 AM · 60 min", status: "confirmed" },
      { index: 2, date: "Mar 23, 2026", time: "5:00 AM · 60 min", status: "confirmed" }
    ]
  },
  {
    id: "ba1951b3",
    contact: "Max Lee",
    participants: [{ name: "Max Lee 2", dob: "3/8/2026" }],
    service: "Private Ladies Swimming",
    location: "Victoria",
    email: "max.lee@gmail.com",
    phone: "+971 55 342 4212",
    startDate: "Mar 16, 2026 9:00 AM",
    endDateFull: "Jun 15, 2026 9:00 AM",
    endDate: "6/15/2026",
    classSchedule: "Monday, 9:00 AM - 10:00 AM",
    schedule: "Mon 9:00 AM - 10:00 AM",
    totalSessions: 14,
    status: "Pending",
    totalAmount: "$420.00",
    bookingDate: "3/16/2026",
    createdAt: "Mar 13, 2026 11:35 AM",
    invoice: {
      code: "INV_260313_004",
      status: "Pending",
      amount: "$420.00",
      Subtotal: "420.00",
      Discount: "0.00",
      FinalAmount: "420.00",
      paidDate: "-",
      dueDate: "3/16/2026",
      paidAt: "-"
    },
    auditLogs: [
      {
        action: "Booking created",
        time: "Mar 13, 2026 11:35 AM",
        meta: "Created by Admin"
      }
    ],
    sessions: [
      { index: 1, date: "Mar 16, 2026", time: "9:00 AM · 60 min", status: "pending" },
      { index: 2, date: "Mar 23, 2026", time: "9:00 AM · 60 min", status: "pending" }
    ]
  },
  {
    id: "ba1951c4",
    contact: "Ava Johnson",
    participants: [{ name: "Ava Johnson", dob: "10/2/2020" }],
    service: "Toddlers Weekly Swimming",
    location: "Coursetia",
    email: "ava.johnson@gmail.com",
    phone: "+971 55 342 3422",
    startDate: "Mar 16, 2026 4:15 PM",
    endDateFull: "Jun 15, 2026 4:15 PM",
    endDate: "6/15/2026",
    classSchedule: "Monday, 4:15 PM - 4:45 PM",
    schedule: "Mon 4:15 PM - 4:45 PM",
    totalSessions: 14,
    status: "Completed",
    totalAmount: "$390.00",
    bookingDate: "3/16/2026",
    createdAt: "Mar 13, 2026 8:20 AM",
    invoice: {
      code: "INV_260313_005",
      status: "Paid",
      amount: "$390.00",
      Subtotal: "420.00",
      Discount: "30.00",
      FinalAmount: "390.00",
      paidDate: "3/13/2026",
      dueDate: "3/13/2026",
      paidAt: "3/13/2026"
    },
    auditLogs: [
      {
        action: "Booking created",
        time: "Mar 13, 2026 8:20 AM",
        meta: "Created by Admin"
      },
      {
        action: "Booking updated",
        time: "Mar 13, 2026 8:23 AM",
        meta: "Status changed to Completed"
      }
    ],
    sessions: [
      { index: 1, date: "Mar 16, 2026", time: "4:15 PM · 30 min", status: "completed" },
      { index: 2, date: "Mar 23, 2026", time: "4:15 PM · 30 min", status: "completed" }
    ]
  },
  {
    id: "ba1951d5",
    contact: "Tez Wong",
    participants: [{ name: "Sophie Lee", dob: "7/14/2019" }],
    service: "Private Ladies Swimming",
    location: "Marina Pool",
    email: "tez@gmail.com",
    phone: "+971 55 342 3421",
    startDate: "Mar 17, 2026 9:00 AM",
    endDateFull: "Jun 9, 2026 9:00 AM",
    endDate: "6/9/2026",
    classSchedule: "Tuesday, 9:00 AM - 10:00 AM",
    schedule: "Tue 9:00 AM - 10:00 AM",
    totalSessions: 13,
    status: "Confirmed",
    totalAmount: "$600.00",
    bookingDate: "3/17/2026",
    createdAt: "Mar 13, 2026 8:16 AM",
    invoice: {
      code: "INV_260313_006",
      status: "Paid",
      amount: "$600.00",
      Subtotal: "600.00",
      Discount: "0.00",
      FinalAmount: "600.00",
      paidDate: "3/13/2026",
      dueDate: "3/13/2026",
      paidAt: "3/13/2026"
    },
    auditLogs: [
      {
        action: "Booking created",
        time: "Mar 13, 2026 8:16 AM",
        meta: "Created by Admin"
      }
    ],
    sessions: [
      { index: 1, date: "Mar 17, 2026", time: "9:00 AM · 60 min", status: "confirmed" }
    ]
  },
  {
    id: "ba1951e6",
    contact: "Elson Ee",
    participants: [
      { name: "Elson Ee", dob: "6/21/2018" },
      { name: "Chloe Ee", dob: "8/9/2020" }
    ],
    service: "Children Weekly Swimming",
    location: "Victoria",
    email: "elsone@gmail.com",
    phone: "-",
    startDate: "Mar 15, 2026 5:15 PM",
    endDateFull: "Jun 15, 2026 5:15 PM",
    endDate: "6/15/2026",
    classSchedule: "Monday, 5:15 PM - 6:00 PM",
    schedule: "Mon 5:15 PM - 6:00 PM",
    totalSessions: 28,
    status: "Confirmed",
    totalAmount: "$5,292.00",
    bookingDate: "3/15/2026",
    createdAt: "Mar 12, 2026 4:50 PM",
    invoice: {
      code: "INV_260312_007",
      status: "Paid",
      amount: "$5,292.00",
      Subtotal: "5292.00",
      Discount: "0.00",
      FinalAmount: "5292.00",
      paidDate: "3/12/2026",
      dueDate: "3/12/2026",
      paidAt: "3/12/2026"
    },
    auditLogs: [
      {
        action: "Booking created",
        time: "Mar 12, 2026 4:50 PM",
        meta: "Created by Admin"
      },
      {
        action: "Booking updated",
        time: "Mar 12, 2026 5:10 PM",
        meta: "Added 1 more participant"
      }
    ],
    sessions: [
      { index: 1, date: "Mar 15, 2026", time: "5:15 PM · 45 min", status: "confirmed" },
      { index: 2, date: "Mar 22, 2026", time: "5:15 PM · 45 min", status: "confirmed" }
    ]
  },
  {
    id: "ba1951f7",
    contact: "Emma Wilson",
    participants: [{ name: "Emma Wilson", dob: "4/11/2019" }],
    service: "Children Weekly Swimming",
    location: "Coursetia",
    email: "emma.wilson@gmail.com",
    phone: "+971 50 342 9871",
    startDate: "Mar 18, 2026 4:00 PM",
    endDateFull: "Jun 22, 2026 4:00 PM",
    endDate: "6/22/2026",
    classSchedule: "Wednesday, 4:00 PM - 4:45 PM",
    schedule: "Wed 4:00 PM - 4:45 PM",
    totalSessions: 16,
    status: "Cancelled",
    totalAmount: "$1,980.00",
    bookingDate: "3/18/2026",
    createdAt: "Mar 10, 2026 6:40 PM",
    invoice: {
      code: "INV_260310_008",
      status: "Paid",
      amount: "$1,980.00",
      Subtotal: "1980.00",
      Discount: "0.00",
      FinalAmount: "1980.00",
      paidDate: "3/10/2026",
      dueDate: "3/10/2026",
      paidAt: "3/10/2026"
    },
    auditLogs: [
      {
        action: "Booking created",
        time: "Mar 10, 2026 6:40 PM",
        meta: "Created by Admin"
      },
      {
        action: "Booking updated",
        time: "Mar 12, 2026 9:15 AM",
        meta: "Status changed to Cancelled"
      }
    ],
    sessions: [
      { index: 1, date: "Mar 18, 2026", time: "4:00 PM · 45 min", status: "cancelled" }
    ]
  },
  {
    id: "ba195208",
    contact: "Sarah Johnson",
    participants: [{ name: "Emma Johnson", dob: "2/14/2020" }],
    service: "Toddlers Weekly Swimming",
    location: "Coursetia",
    email: "sarah.johnson@gmail.com",
    phone: "+971 50 221 3344",
    startDate: "Mar 17, 2026 4:15 PM",
    endDateFull: "Jun 18, 2026 4:15 PM",
    endDate: "6/18/2026",
    classSchedule: "Tuesday, 4:15 PM - 4:45 PM",
    schedule: "Tue 4:15 PM - 4:45 PM",
    totalSessions: 12,
    status: "Completed",
    totalAmount: "$336.00",
    bookingDate: "3/17/2026",
    createdAt: "Mar 13, 2026 10:12 AM",
    invoice: {
      code: "INV_260313_009",
      status: "Paid",
      amount: "$336.00",
      Subtotal: "336.00",
      Discount: "0.00",
      FinalAmount: "336.00",
      paidDate: "3/13/2026",
      dueDate: "3/13/2026",
      paidAt: "3/13/2026"
    },
    auditLogs: [
      {
        action: "Booking created",
        time: "Mar 13, 2026 10:12 AM",
        meta: "Created by Admin"
      },
      {
        action: "Booking updated",
        time: "Mar 13, 2026 10:15 AM",
        meta: "Status changed to Completed"
      }
    ],
    sessions: [
      { index: 1, date: "Mar 17, 2026", time: "4:15 PM · 30 min", status: "completed" },
      { index: 2, date: "Mar 24, 2026", time: "4:15 PM · 30 min", status: "completed" }
    ]
  },
  {
    id: "ba195219",
    contact: "Ahmed Al Mansoori",
    participants: [{ name: "Ahmed Al Mansoori", dob: "11/8/2017" }],
    service: "Private Lessons",
    location: "Victoria",
    email: "ahmed.almansoori@gmail.com",
    phone: "+971 56 881 1200",
    startDate: "Mar 18, 2026 7:00 PM",
    endDateFull: "Jun 21, 2026 7:00 PM",
    endDate: "6/21/2026",
    classSchedule: "Wednesday, 7:00 PM - 8:00 PM",
    schedule: "Wed 7:00 PM - 8:00 PM",
    totalSessions: 10,
    status: "Pending",
    totalAmount: "$500.00",
    bookingDate: "3/18/2026",
    createdAt: "Mar 13, 2026 9:48 AM",
    invoice: {
      code: "INV_260313_010",
      status: "Pending",
      amount: "$500.00",
      Subtotal: "500.00",
      Discount: "0.00",
      FinalAmount: "500.00",
      paidDate: "-",
      dueDate: "3/18/2026",
      paidAt: "-"
    },
    auditLogs: [
      {
        action: "Booking created",
        time: "Mar 13, 2026 9:48 AM",
        meta: "Created by Admin"
      }
    ],
    sessions: [
      { index: 1, date: "Mar 18, 2026", time: "7:00 PM · 60 min", status: "pending" },
      { index: 2, date: "Mar 25, 2026", time: "7:00 PM · 60 min", status: "pending" }
    ]
  },
  {
    id: "ba19522a",
    contact: "Olivia Brown",
    participants: [{ name: "Olivia Brown", dob: "5/12/2018" }],
    service: "Private Ladies Swimming",
    location: "Marina Pool",
    email: "olivia.brown@gmail.com",
    phone: "+971 58 912 3344",
    startDate: "Mar 20, 2026 7:00 PM",
    endDateFull: "Jun 20, 2026 7:00 PM",
    endDate: "6/20/2026",
    classSchedule: "Friday, 7:00 PM - 8:00 PM",
    schedule: "Fri 7:00 PM - 8:00 PM",
    totalSessions: 10,
    status: "Rejected",
    totalAmount: "$1,250.00",
    bookingDate: "3/14/2026",
    createdAt: "Mar 12, 2026 4:16 PM",
    invoice: {
      code: "INV_260312_011",
      status: "Paid",
      amount: "$1,250.00",
      Subtotal: "1250.00",
      Discount: "0.00",
      FinalAmount: "1250.00",
      paidDate: "3/12/2026",
      dueDate: "3/12/2026",
      paidAt: "3/12/2026"
    },
    auditLogs: [
      {
        action: "Booking created",
        time: "Mar 12, 2026 4:16 PM",
        meta: "Created by Admin"
      },
      {
        action: "Booking updated",
        time: "Mar 12, 2026 5:10 PM",
        meta: "Status changed to Rejected"
      }
    ],
    sessions: [
      { index: 1, date: "Mar 20, 2026", time: "7:00 PM · 60 min", status: "rejected" },
      { index: 2, date: "Mar 27, 2026", time: "7:00 PM · 60 min", status: "rejected" }
    ]
  },
  {
    id: "ba19523b",
    contact: "Noah Carter",
    participants: [{ name: "Noah Carter", dob: "9/21/2020" }],
    service: "Toddlers Weekly Swimming",
    location: "Marina Pool",
    email: "noah.carter@gmail.com",
    phone: "+971 56 781 2201",
    startDate: "Mar 19, 2026 10:00 AM",
    endDateFull: "Jun 11, 2026 10:00 AM",
    endDate: "6/11/2026",
    classSchedule: "Thursday, 10:00 AM - 10:30 AM",
    schedule: "Thu 10:00 AM - 10:30 AM",
    totalSessions: 12,
    status: "Pending",
    totalAmount: "$336.00",
    bookingDate: "3/19/2026",
    createdAt: "Mar 12, 2026 2:32 PM",
    invoice: {
      code: "INV_260312_012",
      status: "Pending",
      amount: "$336.00",
      Subtotal: "336.00",
      Discount: "0.00",
      FinalAmount: "336.00",
      paidDate: "-",
      dueDate: "3/19/2026",
      paidAt: "-"
    },
    auditLogs: [
      {
        action: "Booking created",
        time: "Mar 12, 2026 2:32 PM",
        meta: "Created by Admin"
      }
    ],
    sessions: [
      { index: 1, date: "Mar 19, 2026", time: "10:00 AM · 30 min", status: "pending" },
      { index: 2, date: "Mar 26, 2026", time: "10:00 AM · 30 min", status: "pending" }
    ]
  }
];

const filters = {
  search: "",
  service: "",
  location: "",
  status: "All"
};

let currentBookingId = null;
let bookingToastTimer = null;

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getStatusClass(status) {
  const normalized = String(status).toLowerCase();

  if (normalized === "pending") return "status-pending";
  if (normalized === "confirmed") return "status-confirmed";
  if (normalized === "rejected") return "status-rejected";
  if (normalized === "cancelled") return "status-cancelled";
  if (normalized === "completed") return "status-completed";

  return "";
}

function getSummaryStatusClass(status) {
  const normalized = String(status).toLowerCase();

  if (normalized === "pending") return "booking-summary-status pending";
  if (normalized === "confirmed") return "booking-summary-status confirmed";
  if (normalized === "rejected") return "booking-summary-status rejected";
  if (normalized === "cancelled") return "booking-summary-status cancelled";
  if (normalized === "completed") return "booking-summary-status completed";

  return "booking-summary-status";
}

function getInvoiceBadgeText(invoiceStatus) {
  const normalized = String(invoiceStatus).toLowerCase();
  if (normalized === "paid") return "PAID";
  if (normalized === "pending") return "PENDING";
  return String(invoiceStatus).toUpperCase();
}

function getNormalizedInvoice(invoice = {}) {
  return {
    code: invoice.code || "-",
    status: invoice.status || "-",
    amount: invoice.amount || "-",
    subtotal: invoice.tong_tien_goc || invoice.Subtotal || "0.00",
    discount: invoice.tong_giam || invoice.Discount || "0.00",
    finalAmount: invoice.tong_tien_thanh_toan || invoice.FinalAmount || "0.00",
    paidDate: invoice.paidDate || "-",
    dueDate: invoice.dueDate || "-",
    paidAt: invoice.paidAt || "-"
  };
}

function renderBookingTable(data) {
  const tableBody = document.getElementById("bookingTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = "";

  if (!data.length) {
    const emptyRow = document.createElement("div");
    emptyRow.className = "booking-row booking-row-empty";
    emptyRow.innerHTML = `<div class="col" style="grid-column: 1 / -1;">No bookings found.</div>`;
    tableBody.appendChild(emptyRow);
    return;
  }

  data.forEach((item) => {
    const row = document.createElement("div");
    row.className = "booking-row";
    row.dataset.bookingId = item.id;

    row.innerHTML = `
      <div class="col">${escapeHtml(item.id)}</div>
      <div class="col">${escapeHtml(item.contact)}</div>
      <div class="col">${escapeHtml(item.participants.map((p) => p.name).join(", "))}</div>
      <div class="col">${escapeHtml(item.service)}</div>
      <div class="col">${escapeHtml(item.email)}</div>
      <div class="col">${escapeHtml(item.phone)}</div>
      <div class="col">${escapeHtml(item.endDate)}</div>
      <div class="col">${escapeHtml(item.schedule)}</div>
      <div class="col">${escapeHtml(item.totalSessions)}</div>
      <div class="col status ${getStatusClass(item.status)}">${escapeHtml(item.status)}</div>
      <div class="col">${escapeHtml(item.totalAmount)}</div>
      <div class="col">${escapeHtml(item.bookingDate)}</div>
      <div class="col">${escapeHtml(item.createdAt)}</div>
    `;

    row.addEventListener("click", () => openBookingModal(item.id));
    tableBody.appendChild(row);
  });
}

function updateFooter(total) {
  if (typeof renderTableFooter !== "function") return;

  const footerText =
    total === 0
      ? "Showing 0 - 0 of 0"
      : `Showing 1 - ${Math.min(20, total)} of ${total}`;

  renderTableFooter(footerText);
}

function applyFilters() {
  const keyword = filters.search.trim().toLowerCase();

  const filtered = bookingData.filter((item) => {
    const participantNames = item.participants.map((p) => p.name).join(" ").toLowerCase();

    const matchesSearch =
      !keyword ||
      item.id.toLowerCase().includes(keyword) ||
      item.contact.toLowerCase().includes(keyword) ||
      participantNames.includes(keyword) ||
      item.service.toLowerCase().includes(keyword) ||
      item.location.toLowerCase().includes(keyword) ||
      item.email.toLowerCase().includes(keyword) ||
      item.phone.toLowerCase().includes(keyword) ||
      item.status.toLowerCase().includes(keyword);

    const matchesService = !filters.service || item.service === filters.service;
    const matchesLocation = !filters.location || item.location === filters.location;
    const matchesStatus = filters.status === "All" || item.status === filters.status;

    return matchesSearch && matchesService && matchesLocation && matchesStatus;
  });

  renderBookingTable(filtered);
  updateFooter(filtered.length);
}

function bindStatusFilters() {
  const chips = document.querySelectorAll("#bookingStatusChipRow .booking-chip");
  if (!chips.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((item) => item.classList.remove("active"));
      chip.classList.add("active");
      filters.status = chip.dataset.status || "All";
      applyFilters();
    });
  });
}

function bindSearchFilter() {
  const searchInput = document.getElementById("filterBookingSearch");
  if (!searchInput) return;

  searchInput.addEventListener("input", (event) => {
    filters.search = event.target.value || "";
    applyFilters();
  });
}

function bindServiceFilter() {
  const serviceSelect = document.getElementById("filterBookingService");
  if (!serviceSelect) return;

  serviceSelect.addEventListener("change", (event) => {
    filters.service = event.target.value || "";
    applyFilters();
  });
}

function bindLocationFilter() {
  const locationSelect = document.getElementById("filterBookingLocation");
  if (!locationSelect) return;

  locationSelect.addEventListener("change", (event) => {
    filters.location = event.target.value || "";
    applyFilters();
  });
}

function bindExportCSV() {
  const exportBtn = document.getElementById("exportBookingBtn");
  if (!exportBtn) return;

  exportBtn.addEventListener("click", () => {
    const headers = [
      "ID",
      "Contact",
      "Participants",
      "Service",
      "Email",
      "Phone",
      "End Date",
      "Schedule",
      "Total Sessions",
      "Status",
      "Total Amount",
      "Booking Date",
      "Created At"
    ];

    const csvRows = [
      headers.join(","),
      ...bookingData.map((item) =>
        [
          `"${item.id}"`,
          `"${item.contact}"`,
          `"${item.participants.map((p) => p.name).join(", ")}"`,
          `"${item.service}"`,
          `"${item.email}"`,
          `"${item.phone}"`,
          `"${item.endDate}"`,
          `"${item.schedule}"`,
          `"${item.totalSessions}"`,
          `"${item.status}"`,
          `"${item.totalAmount}"`,
          `"${item.bookingDate}"`,
          `"${item.createdAt}"`
        ].join(",")
      )
    ];

    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv;charset=utf-8;"
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "bookings.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
}

function renderSessionsTab(booking) {
  const title = document.getElementById("bookingSessionsTitle");
  const list = document.getElementById("bookingSessionList");
  if (!title || !list) return;

  title.textContent = `Sessions (${booking.sessions.length})`;
  list.innerHTML = "";

  booking.sessions.forEach((session) => {
    const item = document.createElement("div");
    item.className = "booking-session-item";

    item.innerHTML = `
      <div class="booking-session-left">
        <div class="booking-session-index">${escapeHtml(session.index)}</div>
        <div class="booking-session-info">
          <div class="booking-session-date">${escapeHtml(session.date)}</div>
          <div class="booking-session-time">${escapeHtml(session.time)}</div>
        </div>
      </div>
      <div class="booking-session-status">${escapeHtml(session.status)}</div>
    `;

    list.appendChild(item);
  });
}

function renderParticipantsTab(booking) {
  const title = document.getElementById("bookingParticipantsTitle");
  const list = document.getElementById("bookingParticipantList");
  if (!title || !list) return;

  title.textContent = `Participants (${booking.participants.length})`;
  list.innerHTML = "";

  booking.participants.forEach((participant, index) => {
    const item = document.createElement("div");
    item.className = "booking-participant-item";

    item.innerHTML = `
      <div class="booking-participant-index">${index + 1}</div>
      <div class="booking-participant-info">
        <div class="booking-participant-name">${escapeHtml(participant.name)}</div>
        <div class="booking-participant-dob">DOB: ${escapeHtml(participant.dob)}</div>
      </div>
    `;

    list.appendChild(item);
  });
}

function populateInvoiceTab(booking) {
  const invoice = getNormalizedInvoice(booking.invoice);

  const invoiceCode = document.getElementById("bookingInvoiceCode");
  const invoiceAmount = document.getElementById("bookingInvoiceAmount");
  const invoicePaidDateText = document.getElementById("bookingInvoicePaidDateText");
  const invoiceBadge = document.getElementById("bookingInvoiceBadge");
  const invoiceDetailCode = document.getElementById("bookingInvoiceDetailCode");
  const invoiceDetailStatus = document.getElementById("bookingInvoiceDetailStatus");
  const invoiceDetailDueDate = document.getElementById("bookingInvoiceDetailDueDate");
  const invoiceDetailPaidAt = document.getElementById("bookingInvoiceDetailPaidAt");
  const bookingInvoiceOriginalAmount = document.getElementById("bookingInvoiceOriginalAmount");
  const bookingInvoiceDiscountAmount = document.getElementById("bookingInvoiceDiscountAmount");
  const bookingInvoiceFinalAmount = document.getElementById("bookingInvoiceFinalAmount");

  if (invoiceCode) invoiceCode.textContent = invoice.code;
  if (invoiceAmount) invoiceAmount.textContent = `$${invoice.finalAmount}`;
  if (invoicePaidDateText) invoicePaidDateText.textContent = invoice.paidDate;
  if (invoiceBadge) invoiceBadge.textContent = getInvoiceBadgeText(invoice.status);
  if (invoiceDetailCode) invoiceDetailCode.textContent = invoice.code;
  if (invoiceDetailStatus) invoiceDetailStatus.textContent = invoice.status;
  if (bookingInvoiceOriginalAmount) bookingInvoiceOriginalAmount.textContent = invoice.subtotal;
  if (bookingInvoiceDiscountAmount) bookingInvoiceDiscountAmount.textContent = invoice.discount;
  if (bookingInvoiceFinalAmount) bookingInvoiceFinalAmount.textContent = invoice.finalAmount;
  if (invoiceDetailDueDate) invoiceDetailDueDate.textContent = invoice.dueDate;
  if (invoiceDetailPaidAt) invoiceDetailPaidAt.textContent = invoice.paidAt;
}

function populateAuditTab(booking) {
  const empty = document.getElementById("bookingAuditEmpty");
  const list = document.getElementById("bookingAuditList");
  if (!empty || !list) return;

  const logs = booking.auditLogs || [];
  list.innerHTML = "";

  if (!logs.length) {
    empty.style.display = "block";
    list.style.display = "none";
    return;
  }

  empty.style.display = "none";
  list.style.display = "flex";

  logs.forEach((log) => {
    const item = document.createElement("div");
    item.className = "booking-audit-item";

    item.innerHTML = `
      <div class="booking-audit-top">
        <div class="booking-audit-action">${escapeHtml(log.action)}</div>
        <div class="booking-audit-time">${escapeHtml(log.time)}</div>
      </div>
      <div class="booking-audit-meta">${escapeHtml(log.meta)}</div>
    `;

    list.appendChild(item);
  });
}

function setActiveBookingTab(tabName) {
  const tabs = document.querySelectorAll(".booking-tab");
  const panels = document.querySelectorAll(".booking-tab-panel");

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });

  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === tabName);
  });
}

function populateBookingModal(booking) {
  const summaryStatus = document.querySelector(".booking-summary-status");
  const summaryId = document.getElementById("bookingSummaryId");
  const summaryName = document.getElementById("bookingSummaryName");
  const summaryService = document.getElementById("bookingSummaryService");
  const summaryAmount = document.getElementById("bookingSummaryAmount");

  const detailContact = document.getElementById("bookingDetailContact");
  const detailEmail = document.getElementById("bookingDetailEmail");
  const detailPhone = document.getElementById("bookingDetailPhone");
  const detailCreated = document.getElementById("bookingDetailCreated");
  const detailStartDate = document.getElementById("bookingDetailStartDate");
  const detailEndDate = document.getElementById("bookingDetailEndDate");
  const detailLocation = document.getElementById("bookingDetailLocation");
  const detailSchedule = document.getElementById("bookingDetailSchedule");
  const statusSelect = document.getElementById("bookingStatusSelect");

  if (summaryStatus) {
    summaryStatus.className = getSummaryStatusClass(booking.status);
    summaryStatus.textContent = booking.status.toUpperCase();
  }

  if (summaryId) summaryId.textContent = booking.id;
  if (summaryName) summaryName.textContent = booking.contact;
  if (summaryService) summaryService.textContent = booking.service;
  if (summaryAmount) summaryAmount.textContent = booking.totalAmount;

  if (detailContact) detailContact.textContent = booking.contact;
  if (detailEmail) detailEmail.textContent = booking.email;
  if (detailPhone) detailPhone.textContent = booking.phone;
  if (detailCreated) detailCreated.textContent = booking.createdAt;
  if (detailStartDate) detailStartDate.textContent = booking.startDate;
  if (detailEndDate) detailEndDate.textContent = booking.endDateFull;
  if (detailLocation) detailLocation.textContent = booking.location;
  if (detailSchedule) detailSchedule.textContent = booking.classSchedule;
  if (statusSelect) statusSelect.value = booking.status;

  renderParticipantsTab(booking);
  renderSessionsTab(booking);
  populateInvoiceTab(booking);
  populateAuditTab(booking);
}

function openBookingModal(bookingId) {
  const overlay = document.getElementById("bookingModalOverlay");
  const booking = bookingData.find((item) => item.id === bookingId);
  if (!overlay || !booking) return;

  currentBookingId = bookingId;
  populateBookingModal(booking);
  setActiveBookingTab("details");
  overlay.classList.add("active");
}

function closeBookingModal() {
  const overlay = document.getElementById("bookingModalOverlay");
  if (!overlay) return;
  overlay.classList.remove("active");
}

function updateCurrentBookingStatus() {
  const statusSelect = document.getElementById("bookingStatusSelect");
  if (!currentBookingId || !statusSelect) return;

  const booking = bookingData.find((item) => item.id === currentBookingId);
  if (!booking) return;

  const newStatus = statusSelect.value;
  if (booking.status === newStatus) return;

  booking.status = newStatus;

  if (!Array.isArray(booking.auditLogs)) {
    booking.auditLogs = [];
  }

  booking.auditLogs.unshift({
    action: "Booking updated",
    time: new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    }),
    meta: `Status changed to ${newStatus}`
  });

  populateBookingModal(booking);
  applyFilters();
  showBookingToast("Booking updated successfully");
}

function bindBookingModal() {
  const overlay = document.getElementById("bookingModalOverlay");
  const closeBtn = document.getElementById("bookingModalClose");
  const cancelBtn = document.getElementById("bookingModalCancel");
  const updateBtn = document.getElementById("bookingUpdateBtn");
  const tabs = document.querySelectorAll(".booking-tab");

  if (closeBtn) closeBtn.addEventListener("click", closeBookingModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeBookingModal);
  if (updateBtn) updateBtn.addEventListener("click", updateCurrentBookingStatus);

  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeBookingModal();
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActiveBookingTab(tab.dataset.tab);
    });
  });
}

function openDeletePopup() {
  const overlay = document.getElementById("bookingDeleteOverlay");
  if (!overlay) return;
  overlay.classList.add("active");
}

function closeDeletePopup() {
  const overlay = document.getElementById("bookingDeleteOverlay");
  if (!overlay) return;
  overlay.classList.remove("active");
}

function deleteCurrentBooking() {
  if (!currentBookingId) return;

  const index = bookingData.findIndex((item) => item.id === currentBookingId);
  if (index === -1) return;

  bookingData.splice(index, 1);
  currentBookingId = null;

  closeDeletePopup();
  closeBookingModal();
  applyFilters();
  showBookingToast("Booking deleted successfully");
}

function bindDeletePopup() {
  const openBtn = document.getElementById("openBookingDeleteBtn");
  const overlay = document.getElementById("bookingDeleteOverlay");
  const cancelBtn = document.getElementById("bookingDeleteCancelBtn");
  const confirmBtn = document.getElementById("bookingDeleteConfirmBtn");

  if (openBtn) {
    openBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      openDeletePopup();
    });
  }

  if (cancelBtn) cancelBtn.addEventListener("click", closeDeletePopup);
  if (confirmBtn) confirmBtn.addEventListener("click", deleteCurrentBooking);

  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) closeDeletePopup();
    });
  }
}

function hideBookingToast() {
  const toast = document.getElementById("bookingSuccessToast");
  if (!toast) return;

  toast.classList.remove("show");

  if (bookingToastTimer) {
    clearTimeout(bookingToastTimer);
    bookingToastTimer = null;
  }
}

function showBookingToast(message = "Booking deleted successfully") {
  const toast = document.getElementById("bookingSuccessToast");
  const text = toast?.querySelector(".booking-toast-text");
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.add("show");

  if (bookingToastTimer) {
    clearTimeout(bookingToastTimer);
  }

  bookingToastTimer = setTimeout(() => {
    toast.classList.remove("show");
    bookingToastTimer = null;
  }, 2500);
}

function bindBookingToast() {
  const closeBtn = document.getElementById("closeBookingSuccessToast");
  if (!closeBtn) return;
  closeBtn.addEventListener("click", hideBookingToast);
}

document.addEventListener("DOMContentLoaded", () => {
  bindSearchFilter();
  bindServiceFilter();
  bindLocationFilter();
  bindStatusFilters();
  bindBookingModal();
  bindDeletePopup();
  bindBookingToast();
  bindExportCSV();
  applyFilters();
});