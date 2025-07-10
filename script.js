function openTab(evt, tabId) {
  const tabs = document.querySelectorAll('.section');
  const buttons = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.add('hidden'));
  buttons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.remove('hidden');
  evt.target.classList.add('active');
}

// SIP
document.getElementById('sipForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const m = +document.getElementById('sip-monthly').value;
  const r = +document.getElementById('sip-rate').value / 100 / 12;
  const n = +document.getElementById('sip-years').value * 12;

  const invested = m * n;
  const total = m * ((Math.pow(1 + r, n) - 1) * (1 + r)) / r;
  const returns = total - invested;

  document.getElementById('sipResult').innerHTML = `
    Invested: ₹${invested.toFixed(0)}<br>
    Returns: ₹${returns.toFixed(0)}<br>
    Total: ₹${total.toFixed(0)}
  `;
});

// FD
document.getElementById('fdForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const p = +document.getElementById('fd-amount').value;
  const r = +document.getElementById('fd-rate').value / 100;
  const t = +document.getElementById('fd-years').value;
  const total = p * Math.pow(1 + r, t);
  const returns = total - p;

  document.getElementById('fdResult').innerHTML = `
    Invested: ₹${p}<br>
    Returns: ₹${returns.toFixed(0)}<br>
    Total: ₹${total.toFixed(0)}
  `;
});

// RD
document.getElementById('rdForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const m = +document.getElementById('rd-monthly').value;
  const r = +document.getElementById('rd-rate').value / 100 / 4;
  const n = +document.getElementById('rd-years').value * 12;

  const invested = m * n;
  const interest = m * n * (n + 1) * r / (2 * 12);
  const total = invested + interest;

  document.getElementById('rdResult').innerHTML = `
    Invested: ₹${invested}<br>
    Returns: ₹${interest.toFixed(0)}<br>
    Total: ₹${total.toFixed(0)}
  `;
});

// Gold
document.getElementById('goldForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const p = +document.getElementById('gold-amount').value;
  const r = +document.getElementById('gold-rate').value / 100;
  const t = +document.getElementById('gold-years').value;

  const interest = p * r * t;
  const total = p + interest;

  document.getElementById('goldResult').innerHTML = `
    Invested: ₹${p}<br>
    Returns: ₹${interest.toFixed(0)}<br>
    Total: ₹${total.toFixed(0)}
  `;
});

// Mutual Fund
document.getElementById('mutualForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const p = +document.getElementById('mutual-amount').value;
  const r = +document.getElementById('mutual-rate').value / 100;
  const t = +document.getElementById('mutual-years').value;

  const total = p * Math.pow(1 + r, t);
  const returns = total - p;

  document.getElementById('mutualResult').innerHTML = `
    Invested: ₹${p}<br>
    Returns: ₹${returns.toFixed(0)}<br>
    Total: ₹${total.toFixed(0)}
  `;
});
