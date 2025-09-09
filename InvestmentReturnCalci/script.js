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
    Invested: \u20b9${invested.toFixed(0)}<br>
    Returns: \u20b9${returns.toFixed(0)}<br>
    Total: \u20b9${total.toFixed(0)}
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
    Invested: \u20b9${p}<br>
    Returns: \u20b9${returns.toFixed(0)}<br>
    Total: \u20b9${total.toFixed(0)}
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
    Invested: \u20b9${invested}<br>
    Returns: \u20b9${interest.toFixed(0)}<br>
    Total: \u20b9${total.toFixed(0)}
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
    Invested: \u20b9${p}<br>
    Returns: \u20b9${interest.toFixed(0)}<br>
    Total: \u20b9${total.toFixed(0)}
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
    Invested: \u20b9${p}<br>
    Returns: \u20b9${returns.toFixed(0)}<br>
    Total: \u20b9${total.toFixed(0)}
  `;
});

// FD bank ROI auto-fill (fetch local roi.json and set fd-rate)
(function attachFDBankListener(){
  const fdBankSelect = document.getElementById('fd-bank');
  if (!fdBankSelect) return;
  fdBankSelect.addEventListener('change', function() {
    const bank = this.value;
    if (!bank) return;
    fetch('roi.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load ROI data');
        return res.json();
      })
      .then(data => {
        if (data && data[bank] !== undefined) {
          const rateInput = document.getElementById('fd-rate');
          if (rateInput) rateInput.value = data[bank];
        }
      })
      .catch(err => console.error('Error fetching ROI:', err));
  });
})();
