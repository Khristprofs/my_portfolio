const express = require("express");
const router = express.Router();
const Message = require("../model/Message");

router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });

    let table = `
      <html>
        <head>
          <title>Messages Dashboard</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              padding: 20px;
              background-color: #111827; /* gray-900 */
              color: #f9fafb;
              margin: 0;
            }
            h1 {
              margin-bottom: 20px;
              text-align: center;
              font-size: 1.75rem;
              color: #e5e7eb;
            }

            /* Notification Bar */
            .notification {
              position: fixed;
              top: -60px;
              left: 50%;
              transform: translateX(-50%);
              background: #2563eb;
              color: white;
              padding: 12px 20px;
              border-radius: 6px;
              box-shadow: 0 4px 10px rgba(0,0,0,0.3);
              font-size: 0.95rem;
              transition: top 0.4s ease-in-out;
              z-index: 1000;
            }
            .notification.show {
              top: 20px;
            }
            .notification.error {
              background: #dc2626;
            }
            .notification.success {
              background: #16a34a;
            }

            /* Control Panel Styling */
            .controls {
              max-width: 1000px;
              margin: 0 auto 20px auto;
              display: flex;
              justify-content: center;
              gap: 12px;
              flex-wrap: wrap;
            }
            .controls input,
            .controls select {
              padding: 10px 14px;
              border-radius: 8px;
              border: 1px solid #d1d5db; /* gray-300 */
              outline: none;
              font-size: 1rem;
              background-color: #ffffff; /* white */
              color: #111827; /* gray-900 */
              transition: all 0.2s;
              min-width: 160px;
              flex: 1;
            }
            .controls input:focus,
            .controls select:focus {
              border-color: #2563eb; /* blue-600 */
              box-shadow: 0 0 0 2px rgba(37,99,235,0.3);
            }
            .controls button {
              padding: 10px 16px;
              border: none;
              border-radius: 8px;
              background: #ffffff;
              color: #111827;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.15s ease;
              white-space: nowrap;
            }
            .controls button:hover {
              background: #111827;
              color: #ffffff;
            }

            /* Table Styling */
            .table-container {
              max-width: 100%;
              border-radius: 12px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.4);
              overflow-x: auto;
            }
            table {
              width: 100%;
              border-collapse: separate;
              border-spacing: 0;
              background-color: white;
              border-radius: 12px;
              table-layout: auto;
              word-wrap: break-word;
              overflow-wrap: break-word;
            }
            thead {
              background-color: #e5e7eb; /* gray-200 */
              position: sticky;
              top: 0;
              z-index: 2;
            }
            th, td {
              padding: 12px 14px;
              text-align: left;
              font-size: 0.9rem;
              border-top: 1px solid #d1d5db; /* gray-300 */
            }
            th {
              font-size: 0.85rem;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: #374151; /* gray-700 */
            }
            td {
              background-color: white;
              color: #111827; /* gray-900 */
              vertical-align: top;
              word-break: break-word;
            }
            tr:hover td {
              background-color: #f3f4f6; /* gray-100 */
              transition: background-color 0.2s ease-in-out;
            }

            /* Actions */
            .actions {
              display: flex;
              flex-wrap: wrap;
              gap: 6px;
            }
            .btn {
              padding: 6px 12px;
              border-radius: 6px;
              font-size: 0.8rem;
              cursor: pointer;
              border: none;
              text-decoration: none;
              display: inline-block;
              text-align: center;
              white-space: nowrap;
            }
            .btn-reply {
              background-color: #2563eb;
              color: white;
            }
            .btn-reply:hover {
              background-color: #1d4ed8;
            }
            .btn-delete {
              background-color: #dc2626;
              color: white;
            }
            .btn-delete:hover {
              background-color: #b91c1c;
            }

            /* Pagination */
            .pagination {
              margin-top: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 12px;
              flex-wrap: wrap;
            }
            .pagination button {
              padding: 8px 14px;
              border-radius: 6px;
              border: none;
              background: #ffffff;
              color: #111827;
              font-weight: 500;
              cursor: pointer;
            }
            .pagination button:hover {
              background: #111827;
              color: #ffffff;
            }
            .pagination button:disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }

            /* 🔥 Mobile Card View */
            @media (max-width: 500px) {
              table, thead, tbody, th, td, tr {
                display: block;
              }
              thead {
                display: none;
              }
              tr {
                margin-bottom: 16px;
                background: white;
                border-radius: 10px;
                padding: 12px;
                box-shadow: 0 2px 6px rgba(0,0,0,0.2);
              }
              td {
                border: none;
                padding: 6px 0;
                font-size: 0.9rem;
                display: flex;
                justify-content: space-between;
                gap: 12px;
                color: #111827;
              }
              td::before {
                content: attr(data-label);
                font-weight: 600;
                color: #374151;
              }
              .actions {
                justify-content: flex-end;
                gap: 8px;
              }
            }
          </style>
        </head>
        <body>
          <h1>Contact Messages</h1>

          <!-- Notification -->
          <div id="notification" class="notification"></div>
          
          <!-- Control Panel -->
          <div class="controls">
            <input type="text" id="searchInput" placeholder="🔍 Search messages...">
            <select id="dateFilter">
              <option value="all">All time</option>
              <option value="today">Today</option>
              <option value="7">Last 7 days</option>
              <option value="30">Last 30 days</option>
            </select>
            <button onclick="applyFilters()">Apply Filter</button>
            <button onclick="exportCSV()">Export CSV</button>
          </div>

          <div class="table-container">
            <table id="messagesTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${messages.map(msg => `
                  <tr data-date="${new Date(msg.createdAt).toISOString()}">
                    <td data-label="Name">${msg.name}</td>
                    <td data-label="Email">${msg.email}</td>
                    <td data-label="Subject">${msg.subject}</td>
                    <td data-label="Message">${msg.message}</td>
                    <td data-label="Date">${new Date(msg.createdAt).toLocaleString()}</td>
                    <td data-label="Actions">
                      <div class="actions">
                        <a class="btn btn-reply" href="mailto:${msg.email}?subject=Re: ${msg.subject}">Reply</a>
                        <button class="btn btn-delete" onclick="deleteMessage('${msg._id}')">Delete</button>
                      </div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>

          <!-- Pagination Controls -->
          <div class="pagination">
            <button id="prevPage" onclick="changePage(-1)">Previous</button>
            <span id="pageInfo"></span>
            <button id="nextPage" onclick="changePage(1)">Next</button>
          </div>

          <script>
            const rowsPerPage = 25;
            let currentPage = 1;

            function paginate() {
              const rows = document.querySelectorAll("#messagesTable tbody tr");
              const totalPages = Math.ceil(rows.length / rowsPerPage);
              rows.forEach((row, i) => {
                row.style.display =
                  i >= (currentPage - 1) * rowsPerPage && i < currentPage * rowsPerPage
                    ? ""
                    : "none";
              });

              document.getElementById("pageInfo").textContent = "Page " + currentPage + " of " + totalPages;
              document.getElementById("prevPage").disabled = currentPage === 1;
              document.getElementById("nextPage").disabled = currentPage === totalPages;
            }

            function changePage(direction) {
              currentPage += direction;
              paginate();
            }

            paginate();

            function applyFilters() {
              const searchValue = document.getElementById('searchInput').value.toLowerCase();
              const dateFilter = document.getElementById('dateFilter').value;
              const rows = document.querySelectorAll('#messagesTable tbody tr');
              const now = new Date();

              rows.forEach(row => {
                const name = row.querySelector('td[data-label="Name"]').textContent.toLowerCase();
                const email = row.querySelector('td[data-label="Email"]').textContent.toLowerCase();
                const subject = row.querySelector('td[data-label="Subject"]').textContent.toLowerCase();
                const dateStr = row.getAttribute("data-date");
                const date = new Date(dateStr);

                let matchesSearch = name.includes(searchValue) || email.includes(searchValue) || subject.includes(searchValue);
                let matchesDate = true;

                if (dateFilter === "today") {
                  const today = new Date();
                  matchesDate = date.toDateString() === today.toDateString();
                } else if (dateFilter === "7") {
                  const last7 = new Date(now);
                  last7.setDate(now.getDate() - 7);
                  matchesDate = date >= last7;
                } else if (dateFilter === "30") {
                  const last30 = new Date(now);
                  last30.setDate(now.getDate() - 30);
                  matchesDate = date >= last30;
                }

                row.style.display = (matchesSearch && matchesDate) ? "" : "none";
              });

              currentPage = 1;
              paginate();
            }

            function showNotification(message, type = "success") {
              const notification = document.getElementById("notification");
              notification.textContent = message;
              notification.className = "notification show " + type;
              setTimeout(() => {
                notification.className = "notification " + type;
              }, 3000);
            }

            async function deleteMessage(id) {
              const res = await fetch('/admin/messages/' + id, { method: 'DELETE' });
              if (res.ok) {
                showNotification("Message deleted successfully", "success");
                setTimeout(() => location.reload(), 1200);
              } else {
                showNotification("Failed to delete message", "error");
              }
            }

            function exportCSV() {
              const rows = document.querySelectorAll("#messagesTable tr");
              let csv = [];
              rows.forEach(row => {
                if (row.style.display === "none") return;
                let cols = row.querySelectorAll("td, th");
                let rowData = [];
                cols.forEach(col => rowData.push('"' + col.innerText.replace(/"/g, '""') + '"'));
                csv.push(rowData.join(","));
              });

              const csvContent = "data:text/csv;charset=utf-8," + csv.join("\\n");
              const link = document.createElement("a");
              link.setAttribute("href", encodeURI(csvContent));
              link.setAttribute("download", "messages.csv");
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
          </script>
        </body>
      </html>
    `;

    res.send(table);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).send("Server Error");
  }
});

router.delete("/messages/:id", async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ msg: "Message not found" });
    }
    res.json({ msg: "Message deleted successfully" });
  } catch (err) {
    console.error("Error deleting message:", err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;