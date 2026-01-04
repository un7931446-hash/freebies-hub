// Login
function checkLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === 'admin123' && password === '12345') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('dashboardMain').style.display = 'block';
        toast('Login successful! Welcome, Admin.');
    } else {
        toast('Invalid credentials. Hint: admin123 / 12345');
    }
}

/* NAV */
function show(id, el) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    document.querySelectorAll('.sidebar a').forEach(a => a.classList.remove('active'));
    el.classList.add('active');
}

/* MODAL */
function openModal(t, b) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modalTitle').innerText = t;
    document.getElementById('modalBody').innerText = b;
}
function closeModal() { document.getElementById('modal').style.display = 'none'; }

/* TOAST */
function toast(msg) {
    const toastBox = document.getElementById('toast');
    toastBox.innerText = msg;
    toastBox.style.display = 'block';
    setTimeout(() => toastBox.style.display = 'none', 3500);
}

/* ACTIONS */
function toggleUser(btn) {
    const badge = btn.closest("tr").querySelector(".badge");
    if (badge.innerText === "Active") {
        badge.innerText = "Suspended";
        badge.className = "badge warning";
        btn.innerText = "Activate";
        toast("User status updated");
    } else {
        badge.innerText = "Active";
        badge.className = "badge success";
        btn.innerText = "Suspend";
        toast("User status updated");
    }
}

function approveProduct(btn) {
    const badge = btn.closest("tr").querySelector(".badge");
    badge.innerText = "Approved";
    badge.className = "badge success";
    toast("Product approved");
}

function rejectProduct(btn) {
    const badge = btn.closest("tr").querySelector(".badge");
    badge.innerText = "Rejected";
    badge.className = "badge danger";
    toast("Product rejected");
}

function markCompleted(btn) {
    const badge = btn.closest("tr").querySelector(".badge");
    badge.innerText = "Completed";
    badge.className = "badge success";
    toast("Order marked as completed");
}

function reviewCase() {
    openModal("Review Complaint", "Detailed issue description. Recommend resolution steps.");
    toast("Complaint opened for review");
}

/* CHARTS */
new Chart(document.getElementById('revenueChart'), {
    type: 'line',
    data: {
        labels: ['Aug','Sep','Oct','Nov','Dec','Jan'],
        datasets: [{data:[22000,26000,30000,35000,40000,45820],borderColor:'#2563eb',fill:true,tension:.4}]
    }
});
new Chart(document.getElementById('orderChart'), {
    type: 'bar',
    data: {labels:['Mon','Tue','Wed','Thu','Fri','Sat'],datasets:[{data:[45,60,75,50,90,120],backgroundColor:'#2563eb'}]}
});
new Chart(document.getElementById('categoryChart'), {
    type: 'doughnut',
    data: {labels:['Digital','Electronics','Home','Auto'],datasets:[{data:[45,25,20,10],backgroundColor:['#2563eb','#1e40af','#60a5fa','#93c5fd']}]}
});