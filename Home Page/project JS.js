// Display a simple modal or alert when clicking on "Report an Issue"
function openReportModal() {
  const reportModal = document.createElement("div");
  reportModal.id = "report-modal";
  reportModal.innerHTML = `
      <div class="modal-content">
          <h3>Report an Issue</h3>
          <p>Please provide your details and describe the issue below:</p>
          
          <label for="fullName">Full Name:</label>
          <input type="text" id="fullName" placeholder="Enter your full name" required>
          
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" required>
          
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email address" required>
          
          <label for="address">Address:</label>
          <input type="text" id="address" placeholder="Enter your address" required>
          
          <label for="issueDescription">Issue Description:</label>
          <textarea id="issueDescription" placeholder="Describe the issue here..." rows="4" required></textarea>
          
          <div class="modal-buttons">
              <button class="submit-button" onclick="submitReport()">Submit Report</button>
              <button class="close-button" onclick="closeModal()">Close</button>
          </div>
      </div>
  `;

  // Base Modal Styles
  reportModal.style.position = "fixed";
  reportModal.style.top = "0";
  reportModal.style.left = "0";
  reportModal.style.width = "100%";
  reportModal.style.height = "100%";
  reportModal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  reportModal.style.display = "flex";
  reportModal.style.justifyContent = "center";
  reportModal.style.alignItems = "center";
  reportModal.style.zIndex = "1000";

  // Modal Content Styles
  const modalContent = reportModal.querySelector('.modal-content');
  modalContent.style.backgroundColor = "#fff";
  modalContent.style.padding = "30px 20px";
  modalContent.style.borderRadius = "12px";
  modalContent.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
  modalContent.style.width = "90%";
  modalContent.style.maxWidth = "500px";
  modalContent.style.fontFamily = "Arial, sans-serif";
  modalContent.style.color = "#333";

  // Headings
  const heading = modalContent.querySelector('h3');
  heading.style.fontSize = "1.5rem";
  heading.style.marginBottom = "10px";
  heading.style.color = "#007BFF";

  // Paragraph
  const paragraph = modalContent.querySelector('p');
  paragraph.style.fontSize = "1rem";
  paragraph.style.marginBottom = "20px";
  paragraph.style.color = "#666";

  // Labels
  const labels = modalContent.querySelectorAll('label');
  labels.forEach(label => {
    label.style.display = "block";
    label.style.marginBottom = "5px";
    label.style.fontWeight = "bold";
    label.style.fontSize = "0.9rem";
  });

  // Input Fields
  const inputs = modalContent.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.style.width = "100%";
    input.style.padding = "10px";
    input.style.marginBottom = "15px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "6px";
    input.style.fontSize = "1rem";
  });

  // Modal Buttons
  const modalButtons = modalContent.querySelector('.modal-buttons');
  modalButtons.style.display = "flex";
  modalButtons.style.justifyContent = "space-between";
  modalButtons.style.marginTop = "15px";

  // Button Styles
  const buttons = modalButtons.querySelectorAll('button');
  buttons.forEach(button => {
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "6px";
    button.style.fontSize = "1rem";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s ease";
  });

  const submitButton = modalButtons.querySelector('.submit-button');
  submitButton.style.backgroundColor = "#28a745";
  submitButton.style.color = "#fff";
  submitButton.onmouseover = () => submitButton.style.backgroundColor = "#218838";
  submitButton.onmouseout = () => submitButton.style.backgroundColor = "#28a745";

  const closeButton = modalButtons.querySelector('.close-button');
  closeButton.style.backgroundColor = "#dc3545";
  closeButton.style.color = "#fff";
  closeButton.onmouseover = () => closeButton.style.backgroundColor = "#c82333";
  closeButton.onmouseout = () => closeButton.style.backgroundColor = "#dc3545";

  document.body.appendChild(reportModal);
}

function closeModal() {
  const reportModal = document.getElementById("report-modal");
  if (reportModal) {
    document.body.removeChild(reportModal);
  }
}

function submitReport() {
  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const issueDescription = document.getElementById("issueDescription").value;

  if (!fullName || !phone || !email || !address || !issueDescription) {
    alert("Please fill in all the fields before submitting.");
    return;
  }

  alert(`Thank you for your report, ${fullName}!\n\nDetails:\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nIssue: ${issueDescription}`);
  closeModal();
}


function closeModal() {
  const reportModal = document.getElementById("report-modal");
  if (reportModal) {
      document.body.removeChild(reportModal);
  }
}

function submitReport() {
  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("address").value;
  const issueDescription = document.getElementById("issueDescription").value;

  if (!fullName || !phone || !email || !address || !issueDescription) {
    alert("Please fill in all the fields before submitting.");
    return;
  }

  alert(`Thank you for your report, ${fullName}!\n\nDetails:\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nIssue: ${issueDescription}`);
  closeModal();
}


function animateProgress(id, targetPercentage, speed) {
  let number = document.getElementById(`${id}-number`);
  let counter = 0;

  const interval = setInterval(() => {
    if (counter >= targetPercentage) {
      clearInterval(interval);
    } else {
      counter += 1;
      number.innerHTML = counter + "%";
    }
  }, speed);
}

// Call animateProgress with unique speeds for each progress bar
animateProgress("flood-risk", 70, 44);         // Flood Risk - 70%, speed of 50ms
animateProgress("disease-spread", 50,56.5);    // Disease Spread - 50%, speed of 100ms
animateProgress("waste-accumulation", 85, 35); // Waste Accumulation - 85%, speed of 30ms

document.addEventListener("DOMContentLoaded", function(event) {
  let circles = document.querySelectorAll('.circle');
  circles.forEach(function(progress) {
    let degree = 0;
    var targetDegree = parseInt(progress.getAttribute('data-degree'));
    let color = progress.getAttribute('data-color');
    let number = progress.querySelector('.number'); // Added quotes around .number

    var interval = setInterval(function() {
      degree += 1;
      if (degree >= targetDegree) {  // Fixed condition
        clearInterval(interval);
        return; // Added return inside if condition
      }
      // Set the conic gradient background
      progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
      number.textContent = `${degree}%`; // Update the number text with the degree
      number.innerHTML = degree + '<span>%</span>';
      number.style.color = color;
    }, 130);
  });
});

function toggleMenu() {
  const menu = document.querySelector('.menu-bar ul');
  menu.classList.toggle('show');
}

(function () {
  // Create the modal
  const modalHTML = `
    <div class="modal" id="volunteerModal" style="display: none;">
      <div class="modal-content">
        <h1>Volunteer Form</h1>
        <form id="volunteerForm" action="#" method="POST" onsubmit="return handleSubmit(event)">
          <!-- Personal Information -->
          <label for="name">Full Name *</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required>

          <label for="email">Email Address *</label>
          <input type="email" id="email" name="email" placeholder="example@domain.com" required>

          <label for="phone">Phone Number *</label>
          <input type="tel" id="phone" name="phone" placeholder="e.g., 08012345678" pattern="\\d{10,15}" title="Please enter a valid phone number (10-15 digits)" required>

          <label for="address">Address/Location *</label>
          <input type="text" id="address" name="address" placeholder="Enter your address" required>

          <!-- Volunteer Preferences -->
          <label for="role">Preferred Volunteer Role *</label>
          <select id="role" name="role" required>
            <option value="">-- Select a role --</option>
            <option value="event-coordinator">Event Coordinator</option>
            <option value="data-collector">Data Collector</option>
            <option value="waste-collector">Waste Collector</option>
            <option value="community-outreach">Community Outreach</option>
          </select>

          <label for="skills">Skills or Expertise</label>
          <textarea id="skills" name="skills" rows="3" placeholder="Mention any relevant skills"></textarea>

          <label for="motivation">Why Do You Want to Volunteer?</label>
          <textarea id="motivation" name="motivation" rows="3" placeholder="Explain your motivation for volunteering"></textarea>

          <!-- Consent -->
          <div style="display: flex; align-items: center; gap: 10px; margin-top: 15px;">
            <input type="checkbox" id="media-consent" name="media-consent" required style="width: 20px; height: 20px;">
            <label for="media-consent" style="margin: 0;">I consent to the use of my photos/videos for promotional purposes</label>
          </div>

          <div style="display: flex; align-items: center; gap: 10px; margin-top: 15px;">
            <input type="checkbox" id="terms" name="terms" required style="width: 20px; height: 20px;">
            <label for="terms" style="margin: 0;">I agree to the terms and conditions</label>
          </div>

          <!-- Buttons -->
          <div style="display: flex; justify-content: space-evenly; margin-top: 30px;">
            <button type="submit" style="padding: 10px 20px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; width: 120px;">Submit</button>
            <button type="button" class="close-btn" onclick="closeVolunteerForm()" style="padding:  5px 10px; background-color: red; color: white; border: none; border-radius: 50%; cursor: pointer; width:30px;">X</button>
          </div>
        </form>
        <!-- Confirmation Message -->
        <div id="confirmationMessage" style="display: none; text-align: center; color: green; margin-top: 20px;">
          Thank you for volunteering! You will receive a confirmation email shortly.
        </div>
      </div>
    </div>
  `;

  // Append modal style to the document
  const modalStyle = `
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-content {
      background: white;
      padding: 20px;
      width: 90%;
      max-width: 600px;
      border-radius: 8px;
      position: relative;
    }

    .modal-content h1 {
      text-align: center;
      color: #333;
    }

    .modal-content label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
      color: #555;
    }

    .modal-content input, 
    .modal-content textarea, 
    .modal-content select {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 1rem;
    }

    button {
      background-color: #4CAF50;
      color: white;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    button:hover {
      background-color: #45a049;
    }

    .close-btn {
      background-color: red;
    }

    .close-btn:hover {
      background-color: #8a0303;
    }

    .modal-content form {
      display: flex;
      flex-direction: column;
    }
  `;

  // Append modal HTML and CSS to the document
  const style = document.createElement("style");
  style.innerHTML = modalStyle;
  document.head.appendChild(style);

  const modal = document.createElement("div");
  modal.innerHTML = modalHTML;
  document.body.appendChild(modal);
})();

// Show the modal
function showVolunteerForm() {
  document.getElementById("volunteerModal").style.display = "flex";
}

// Close the modal
function closeVolunteerForm() {
  document.getElementById("volunteerModal").style.display = "none";
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Hide the form and show the confirmation message
  document.getElementById("volunteerForm").style.display = "none";
  const confirmationMessage = document.getElementById("confirmationMessage");
  confirmationMessage.style.display = "block";

  // Set a timeout to hide the confirmation message and close the modal after 3 seconds
  setTimeout(() => {
    confirmationMessage.style.display = "none"; // Hide the confirmation message
    closeVolunteerForm(); // Close the modal
  }, 3000); // 3000 milliseconds = 3 seconds
}
