// Login functions
function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('user-username').value;
    const password = document.getElementById('user-password').value;
    if (username === "user" && password === "1234") {
      window.location.href = "dashboard-user.html";
    } else {
      alert("Invalid user credentials.");
    }
  }
  
  function loginAdmin(event) {
    event.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    if (username === "admin" && password === "admin123") {
      window.location.href = "dashboard-admin.html";
    } else {
      alert("Invalid admin credentials.");
    }
  }
  
  // Submit complaint function
  function submitComplaint(event) {
    event.preventDefault();
    const title = document.getElementById('complaint-title').value;
    const desc = document.getElementById('complaint-desc').value;
  
    const complaint = {
      title,
      description: desc,
      timestamp: new Date().toLocaleString()
    };
  
    // Retrieve existing complaints or create empty array
    const complaints = JSON.parse(localStorage.getItem("complaints") || "[]");
    complaints.push(complaint);
  
    localStorage.setItem("complaints", JSON.stringify(complaints));
  
    document.getElementById('complaint-title').value = "";
    document.getElementById('complaint-desc').value = "";
  
    loadUserComplaints(); // Refresh list
  }
  
  // Show complaints on user dashboard
  function loadUserComplaints() {
    const complaints = JSON.parse(localStorage.getItem("complaints") || "[]");
    const list = document.getElementById("complaint-list");
    if (!list) return;
  
    list.innerHTML = "";
    complaints.forEach((comp, index) => {
      const item = document.createElement("li");
      item.innerHTML = `<strong>${comp.title}</strong><br>${comp.description}<br><em>${comp.timestamp}</em><hr>`;
      list.appendChild(item);
    });
  }
  
  // Show complaints on admin dashboard
  function loadAllComplaintsForAdmin() {
    const complaints = JSON.parse(localStorage.getItem("complaints") || "[]");
    const list = document.getElementById("all-complaints");
    if (!list) return;
  
    list.innerHTML = "";
    complaints.forEach((comp, index) => {
      const item = document.createElement("li");
      item.innerHTML = `<strong>${comp.title}</strong><br>${comp.description}<br><em>${comp.timestamp}</em><hr>`;
      list.appendChild(item);
    });
  }
  
  // Call loaders if on respective dashboards
  window.onload = () => {
    loadUserComplaints();
    loadAllComplaintsForAdmin();
  };