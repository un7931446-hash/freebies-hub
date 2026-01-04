// AUTH NAVIGATION
function showAuth(view) {
    document.querySelectorAll('.view-section').forEach(v => v.style.display = 'none');
    document.getElementById('mainSidebar').style.display = 'none';
    document.getElementById('mainContent').classList.remove('dashboard-active');
    document.getElementById('view-' + view).style.display = 'block';
}

function login() {
    document.querySelectorAll('.view-section').forEach(v => v.style.display = 'none');
    document.getElementById('mainSidebar').style.display = 'block';
    document.getElementById('mainContent').classList.add('dashboard-active');
    showSection('dashboard');
}

function logoutSequence() {
    showAuth('logout');
    document.getElementById('logout-loading').style.display = 'block';
    document.getElementById('logout-done').style.display = 'none';
    setTimeout(() => {
        document.getElementById('logout-loading').style.display = 'none';
        document.getElementById('logout-done').style.display = 'block';
    }, 2000);
}

// CONTENT NAVIGATION
function showSection(id) {
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');

    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const sideLink = document.querySelector(`a[onclick="showSection('${id}')"]`);
    if(sideLink) sideLink.classList.add('active');

    if(id === 'analytics') initChart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// SALES CHART
let salesChart;
function initChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    if(salesChart) salesChart.destroy();
    salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Sales Revenue (PKR)',
                data: [500, 1200, 800, 2000, 1500, 3000, 4500],
                borderColor: '#0066ff',
                backgroundColor: 'rgba(0, 102, 255, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#0066ff',
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: true } }
        }
    });
}

// Initialize
showAuth('login');