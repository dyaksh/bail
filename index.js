function switchTab(tab) {
    const content = document.getElementById('content');
  
    if (tab === 'home') {
      content.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Home</h2>
        <div class="card">
          <h3 class="text-xl font-semibold">Welcome back, John Doe!</h3>
          <p>Here's the latest status of your case:</p>
          <div class="progress-bar">
            <div class="progress" style="width: 75%;"></div>
          </div>
          <p>Case Progress: 75%</p>
        </div>
        <div class="card">
          <h3 class="text-xl font-semibold">Upcoming Appointments</h3>
          <p>You have a court hearing scheduled for <strong>October 15, 2024</strong>.</p>
          <p>You also have a meeting with your attorney on <strong>October 5, 2024</strong>.</p>
        </div>
        <div class="card">
          <h3 class="text-xl font-semibold">Recent Updates</h3>
          <ul>
            <li>Your case documents have been reviewed.</li>
            <li>New evidence has been submitted by the prosecutor.</li>
          </ul>
        </div>
      `;
    } else if (tab === 'notifications') {
      content.innerHTML = `
        <h2 class="text-2xl font-bold mb-4">Notifications</h2>
        <div class="card">
          <div class="notification-item">
            <i class="fas fa-info-circle notification-icon"></i>
            <div class="notification-content">
              <strong>October 1, 2024:</strong> Your case status has been updated. Next hearing scheduled for October 15, 2024.
            </div>
          </div>
          <div class="notification-item">
            <i class="fas fa-exclamation-circle notification-icon"></i>
            <div class="notification-content">
              <strong>September 28, 2024:</strong> Missing documents need to be submitted by October 5, 2024.
            </div>
          </div>
          <div class="notification-item">
            <i class="fas fa-check-circle notification-icon"></i>
            <div class="notification-content">
              <strong>September 25, 2024:</strong> Your legal aid application has been approved.
            </div>
          </div>
          <div class="notification-item">
            <i class="fas fa-info-circle notification-icon"></i>
            <div class="notification-content">
              <strong>September 22, 2024:</strong> You have a new message from your attorney.
            </div>
          </div>
        </div>
      `;
    } 
    else if (tab === 'profile') {
      content.innerHTML = `
        <div class="profile-container">
          <div class="profile-header">
            <h1 class="client-name">Rohan Kumar</h1>
          </div>
          <div class="client-details">
            <p><strong>Email:</strong> rohan_kumar@gmail.com</p>
            <p><strong>Phone number:</strong> +91 72045759555</p>
            <p><strong>Date of birth:</strong> 12/03/1996</p>
            <p><strong>Home address:</strong> 6301 Elgin St. Celina, Delaware</p>
          </div>
          <div class="documents-section">
            <h2>Documents </h2>
            <ul>
              <p href="#">Surety Agreement </p>
              <p href="#">Affidavit of Support </p>
              <p href="#">Criminal Record Check </p>
            </ul>
          </div>
          <div class="charges-section">
            <h2>Charges</h2>
            <table class="charges-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Bail estimated</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Forgery</td>
                  <td>2023-08-12</td>
                  <td class="status pending">Pending</td>
                  <td>2023-10-15</td>
                </tr>
                <tr>
                  <td>Fraud</td>
                  <td>2023-07-30</td>
                  <td class="status in-progress">In Progress</td>
                  <td>2023- 09-30</td>
                </tr>
                <tr>
                  <td>Embezzlement</td>
                  <td>2023-09-02</td>
                  <td class="status resolved">Resolved</td>
                  <td>2023-09-15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    } 
    else if (tab === 'caseDetails') {
        content.innerHTML = `
          <div class="profile-container">
            <div class="profile-header">
              <h1 class="client-name">John Doe</h1>
            </div>
            <div class="client-details">
              <p><strong>Case Number:</strong> 123456</p>
              <p><strong>Date of Arrest:</strong> January 10, 2023</p>
              <p><strong>Charges:</strong> Theft</p>
              <p><strong>Court:</strong> Springfield District Court</p>
              <p><strong>Bail Status:</strong> Pending</p>
            </div>
            <div class="documents-section">
              <h2>Documents</h2>
              <ul>
                <p href="#">Criminal Record</p>
                <p href="#">Court Transcript</p>
                <p href="#">Bail Application</p>
              </ul>
            </div>
            <div class="charges-section">
              <h2>Additional Details</h2>
              <table class="charges-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Date of Birth</td>
                    <td>January 1, 1990</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>Male</td>
                  </tr>
                  <tr>
                    <td>Nationality</td>
                    <td>American</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>123 Main St, Springfield, IL</td>
                  </tr>
                  <tr>
                    <td>Education</td>
                    <td>Bachelor's Degree in Computer Science</td>
                  </tr>
                  <tr>
                    <td>Employment</td>
                    <td>Software Developer</td>
                  </tr>
                  <tr>
                    <td>Family</td>
                    <td>2 Dependents</td>
                  </tr>
                  <tr>
                    <td>Previous Record</td>
                    <td>None</td>
                  </tr>
                  <tr>
                    <td>Health Status</td>
                    <td>Good</td>
                  </tr>
                  <tr>
                    <td>Psychological Evaluation</td>
                    <td>Stable</td>
                  </tr>
                  <tr>
                    <td>Last Hearing Date</td>
                    <td>February 15, 2023</td>
                  </tr>
                  <tr>
                    <td>Trial Status</td>
                    <td>Ongoing</td>
                  </tr>
                  <tr>
                    <td>Educational Programs</td>
                    <td>Computer Literacy</td>
                  </tr>
                  <tr>
                    <td>Family Support</td>
                    <td>Regular Visits</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `;
      }
      
      else if (tab === 'legalAid') {
        content.innerHTML = `
          <h2 class="text-2xl font-bold mb-4">Legal Aid Providers</h2>
    
          <!-- Search Bar -->
          <div class="mb-4">
            <input type="text" id="lawyerSearch" placeholder="Search for a lawyer..." class="p-3 border border-gray-300 rounded w-full" onkeyup="filterLawyers()">
          </div>
    
          <!-- Cards Grid -->
          <div id="lawyerList" class="grid grid-cols-1 gap-4">
    
            <!-- Lawyer 1 -->
            <div class="card flex p-4 bg-white shadow-lg rounded-lg">
              <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Jane Doe" class="w-24 h-24 object-cover rounded-full mr-4">
              <div class="flex-1">
                <h4 class="font-bold text-lg mb-2">Jane Doe</h4>
                <p><strong>Specialization:</strong> Criminal Law</p>
                <p><strong>Experience:</strong> 15 years</p>
                <p><strong>Contact:</strong> <a href="mailto:jane@example.com" class="text-blue-500 hover:underline">jane@example.com</a></p>
                <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Contact</button>
              </div>
            </div>
    
            <!-- Lawyer 2 -->
            <div class="card flex p-4 bg-white shadow-lg rounded-lg">
              <img src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="John Smith" class="w-24 h-24 object-cover rounded-full mr-4">
              <div class="flex-1">
                <h4 class="font-bold text-lg mb-2">John Smith</h4>
                <p><strong>Specialization:</strong> Human Rights</p>
                <p><strong>Experience:</strong> 10 years</p>
                <p><strong>Contact:</strong> <a href="mailto:john@example.com" class="text-blue-500 hover:underline">john@example.com</a></p>
                <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Contact</button>
              </div>
            </div>
    
            <!-- Lawyer 3 -->
            <div class="card flex p-4 bg-white shadow-lg rounded-lg">
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Alice Johnson" class="w-24 h-24 object-cover rounded-full mr-4">
              <div class="flex-1">
                <h4 class="font-bold text-lg mb-2">Alice Johnson</h4>
                <p><strong>Specialization:</strong> Cybercrime</p>
                <p><strong>Experience:</strong> 8 years</p>
                <p><strong>Contact:</strong> <a href="mailto:alice@example.com" class="text-blue-500 hover:underline">alice@example.com</a></p>
                <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Contact</button>
              </div>
            </div>
    
            <!-- Lawyer 4 -->
            <div class="card flex p-4 bg-white shadow-lg rounded-lg">
              <img src="https://images.contentstack.io/v3/assets/blt36c2e63521272fdc/blt2e5f7f145e6f737c/5e9d17c4cb84e463e2ebd703/370x370_Chris-Dale.jpg" alt="Chris Dale" class="w-24 h-24 object-cover rounded-full mr-4">
              <div class="flex-1">
                <h4 class="font-bold text-lg mb-2">Chris Dale</h4>
                <p><strong>Specialization:</strong> Corporate Law</p>
                <p><strong>Experience:</strong> 12 years</p>
                <p><strong>Contact:</strong> <a href="mailto:chris@example.com" class="text-blue-500 hover:underline">chris@example.com</a></p>
                <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Contact</button>
              </div>
            </div>
    
            <!-- Lawyer 5 -->
            <div class="card flex p-4 bg-white shadow-lg rounded-lg">
              <img src="https://img.freepik.com/premium-photo/portrait-boy-with-brown-hair-white-skin-young-man-avatar_1313853-167844.jpg" alt="Alex Johnson" class="w-24 h-24 object-cover rounded-full mr-4">
              <div class="flex-1">
                <h4 class="font-bold text-lg mb-2">Alex Johnson</h4>
                <p><strong>Specialization:</strong> Family Law</p>
                <p><strong>Experience:</strong> 5 years</p>
                <p><strong>Contact:</strong> <a href="mailto:alex@example.com" class="text-blue-500 hover:underline">alex@example.com</a></p>
                <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Contact</button>
              </div>
            </div>
    
            <!-- Lawyer 6 -->
            <div class="card flex p-4 bg-white shadow-lg rounded-lg">
              <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Michael Brown" class="w-24 h-24 object-cover rounded-full mr-4">
              <div class="flex-1">
                <h4 class="font-bold text-lg mb-2">Michael Brown</h4>
                <p><strong>Specialization:</strong> Employment Law</p>
                <p><strong>Experience:</strong> 7 years</p>
                <p><strong>Contact:</strong> <a href="mailto:michael@example.com" class="text-blue-500 hover:underline">michael@example.com</a></p>
                <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">Contact</button>
              </div>
            </div>
    
          </div>
        `;
    
        // Function to filter lawyers based on search input
        function filterLawyers() {
            const searchInput = document.getElementById('lawyerSearch').value.toLowerCase();
            const lawyers = document.getElementById('lawyerList').getElementsByClassName('card');
            for (let i = 0; i < lawyers.length; i++) {
                const lawyer = lawyers[i];
                const lawyerName = lawyer.getElementsByTagName('h4')[0].textContent.toLowerCase();
                if (lawyerName.includes(searchInput)) {
                    lawyer.style.display = "";
                } else {
                    lawyer.style.display = "none";
                }
            }
        }
    }
    
  // Chat Tab Functionality
  else if (tab === 'chat'){
    content.innerHTML = `
      <div class="chat-container">
        <div class="chat-body">
          <div class="chat-list">
            <div class="chat-item active">
              <div class="chat-avatar">R</div>
              <div class="chat-details">
                <div class="chat-name">Rohan Kumar</div>
                <div class="chat-message">That’s a relief to hear.</div>
              </div>
            </div>
            <div class="chat-item">
              <div class="chat-avatar">P</div>
              <div class="chat-details">
                <div class="chat-name">Priya Shah</div>
                <div class="chat-message">Let’s meet tomorrow.</div>
              </div>
            </div>
            <!-- Additional chat items here -->
          </div>
          <div class="chat-view">
            <div class="chat-header">
              <div class="chat-name">Rohan Kumar</div>
             
            </div>
            <div class="chat-messages">
              <div class="message other">
                <div class="message-text">Just bring any additional documents I mentioned in my email...</div>
                <div class="message-time">8:36 PM</div>
              </div>
              <div class="message user">
                <div class="message-text">Got it. Is it likely that the bail will be granted in the first hearing?</div>
                <div class="message-time">8:37 PM</div>
              </div>
              <div class="message other">
                <div class="message-text">It's hard to say, but we have a strong case. What do you know about the new bail reform laws?</div>
                <div class="message-time">8:38 PM</div>
              </div>
              <div class="message user">
                <div class="message-text">Not much, can you explain it to me?</div>
                <div class="message-time">8:39 PM</div>
              </div>
              <div class="message other">
                <div class="message-text">The new laws aim to reduce pretrial detention and promote fairness in the bail system. But it's still unclear how it will be implemented.</div>
                <div class="message-time">8:40 PM</div>
              </div>
              <div class="message user">
                <div class="message-text">That sounds promising. What are the chances of the prosecution offering a plea deal?</div>
                <div class="message-time">8:41 PM</div>
              </div>
              <div class="message other">
                <div class="message-text">It's possible, but we need to review the evidence and case files before making any decisions.</div>
                <div class="message-time">8:42 PM</div>
              </div>
              <div class="message user">
                <div class="message-text">Have you handled similar cases in the past?</div>
                <div class="message-time">8:43 PM</div>
              </div>
              <div class="message other">
                <div class="message-text">Yes, I've worked on several cases involving similar charges. We've had success in the past, but each case is unique.</div>
                <div class="message-time">8:44 PM</div>
              </div>
              <div class="message user">
                <div class="message-text">What are the potential consequences if we lose the case?</div>
                <div class="message-time">8:45 PM</div>
              </div>
              <div class="message other">
                <div class="message-text">If we lose, the defendant could face up to 5 years in prison and a fine of up to $10,000.</div>
                <div class="message-time">8:46 PM</div>
              </div>
              <div class="message user">
                <div class="message-text">That's a lot to consider. What's the next step in the process?</div>
                <div class="message-time">8:47 PM</div>
              </div>
              <div class="message other">
                <div class="message-text">We need to review the discovery and start preparing our defense strategy. I'll send over some documents for you to review.</div>
                <div class="message-time">8:48 PM</div>
              </div>
              <div class="message user">
                <div class="message-text">Sounds good. What's the deadline for submitting our defense?</div>
                <div class="message-time">8:49 PM</div>
              </div>
              <div class="message other">
                <div class="message-text">We have 2 weeks to submit our defense. I'll make sure to keep you updated on the progress.</div>
                <div class="message-time">8:50 PM</div>
              </div>
              <div class="message user">
                <div class="message-text">Okay, got it. Thanks for explaining everything to me.</div>
                <div class="message-time">8:51 PM</div>
              </div>
              <div class="message other">
                <div class="message-text">You're welcome. I'll be in touch soon to discuss the case further.</div>
                <div class="message-time">8:52 PM</div>
              </div>
            </div>
            <div class="chat-input">
              <input type="text" placeholder="Type something here..." class="chat-input-field" />
              <button class="send-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}  