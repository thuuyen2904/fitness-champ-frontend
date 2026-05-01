document.addEventListener("DOMContentLoaded", () => {
  renderSidebar("settings");

  const saveBtn = document.getElementById("saveSettingsBtn");

  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      alert("Settings saved successfully.");
    });
  }
});