(function checkAuth() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    window.location.href = "./login.html";
  }
})();
function getSidebarHTML(activePage = "") {
  return `
    <aside class="sidebar">
      <div class="sidebar-top">
        <div class="sidebar-logo">
          <img src="../assets/logo.png" alt="Fitness Champs" />
        </div>

        <nav class="sidebar-menu">
          <a class="menu-item ${activePage === "programmes" ? "active" : ""}" href="./programmes.html">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 7h16M4 12h16M4 17h16"/>
              </svg>
            </span>
            <span>Programmes</span>
          </a>

          <a class="menu-item ${activePage === "locations" ? "active" : ""}" href="./locations.html">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z"/>
                <circle cx="12" cy="11" r="2.5"/>
              </svg>
            </span>
            <span>Locations</span>
          </a>

          <a class="menu-item ${activePage === "staff" ? "active" : ""}" href="./staff.html">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20a8 8 0 0 1 16 0"/>
              </svg>
            </span>
            <span>Staff</span>
          </a>

          <a class="menu-item ${activePage === "terms" ? "active" : ""}" href="./terms.html">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 7v5l3 2"/>
              </svg>
            </span>
            <span>Terms</span>
          </a>

          <a class="menu-item ${activePage === "bookings" ? "active" : ""}" href="./bookings.html">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="4" y="5" width="16" height="15" rx="2"/>
                <path d="M8 3v4M16 3v4M4 10h16"/>
              </svg>
            </span>
            <span>Bookings</span>
          </a>

         <a class="menu-item ${activePage === "classes" ? "active" : ""}" href="./classes.html">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="6" y="4" width="12" height="16" rx="2"/>
                <path d="M9 8h6M9 12h6M9 16h4"/>
              </svg>
            </span>
            <span>Classes</span>
          </a>

          <a class="menu-item ${activePage === "participants" ? "active" : ""}" href="./participants.html">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20a8 8 0 0 1 16 0"/>
              </svg>
            </span>
            <span>Participants</span>
          </a>
         
           
          <a class="menu-item ${activePage === "coupons" ? "active" : ""}" href="./coupons.html">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 12a2 2 0 0 1-2-2V7H6a2 2 0 0 0-2 2v3a2 2 0 0 1 0 4v3a2 2 0 0 0 2 2h12v-3a2 2 0 0 1 2-2"/>
                <path d="M8 7v10"/>
              </svg>
            </span>
            <span>Coupons</span>
          </a>


          <a class="menu-item ${activePage === "settings" ? "active" : ""}" href="./settings.html">
            <span class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0A1.65 1.65 0 0 0 20.91 10H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
            </span>
            <span>Settings</span>
          </a>
        </nav>
      </div>

      <div class="sidebar-bottom">
        <div class="bell-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 17h5l-1.4-1.4A2 2 0 0 1 18 14.2V11a6 6 0 1 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5"/>
            <path d="M10 17a2 2 0 0 0 4 0"/>
          </svg>
        </div>
        <div class="avatar">MI</div>
      </div>
    </aside>
  `;
}

function getTableFooterHTML(text = "Showing 1 - 20 of 379") {
  return `
    <div class="table-footer">
      <button class="rows-pill" type="button">20 rows</button>
      <div class="footer-right">
        <span class="count-text">${text}</span>
        <button class="pager-btn" type="button">‹</button>
        <button class="pager-btn" type="button">›</button>
      </div>
    </div>
  `;
}

function renderSidebar(activePage) {
  const sidebarRoot = document.getElementById("sidebarRoot");
  if (sidebarRoot) {
    sidebarRoot.innerHTML = getSidebarHTML(activePage);
  }
}

function renderTableFooter(text) {
  const footerRoot = document.getElementById("tableFooterRoot");
  if (footerRoot) {
    footerRoot.innerHTML = getTableFooterHTML(text);
  }
}