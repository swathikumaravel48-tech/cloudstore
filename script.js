(function () {
  "use strict";

  // Demo plans. Change the names, storage and prices to match your report.
  var PLANS = [
    { name: "Free",     maxGB: 5,    monthly: 0,    note: "Trying CloudStore or saving a few documents" },
    { name: "Plus",     maxGB: 100,  monthly: 149,  note: "Students and personal photos or files" },
    { name: "Pro",      maxGB: 1000, monthly: 499,  note: "Freelancers and large project folders" },
    { name: "Business", maxGB: 5000, monthly: 1499, note: "Small teams sharing files" }
  ];
  var YEARLY_DISCOUNT = 0.2;
  var yearly = false;

  var slider = document.getElementById("gb");
  var gbOut = document.getElementById("gb-out");
  var recPlan = document.getElementById("rec-plan");
  var recPrice = document.getElementById("rec-price");
  var rows = document.getElementById("plan-rows");
  var btnM = document.getElementById("monthly");
  var btnY = document.getElementById("yearly");

  function priceOf(plan) {
    return Math.round(plan.monthly * (yearly ? 1 - YEARLY_DISCOUNT : 1));
  }

  function formatGB(gb) {
    return gb >= 1000 ? (gb / 1000) + " TB" : gb + " GB";
  }

  function recommended(gb) {
    for (var i = 0; i < PLANS.length; i++) {
      if (gb <= PLANS[i].maxGB) return PLANS[i];
    }
    return PLANS[PLANS.length - 1];
  }

  function renderRows(activeName) {
    rows.innerHTML = "";
    PLANS.forEach(function (p) {
      var tr = document.createElement("tr");
      if (p.name === activeName) tr.className = "rec";

      var th = document.createElement("th");
      th.scope = "row";
      th.textContent = p.name;

      var tdStore = document.createElement("td");
      tdStore.textContent = formatGB(p.maxGB);

      var tdPrice = document.createElement("td");
      tdPrice.className = "price";
      var price = priceOf(p);
      tdPrice.textContent = price === 0 ? "Free" : "₹" + price;
      if (price !== 0) {
        var small = document.createElement("small");
        small.textContent = " / month";
        tdPrice.appendChild(small);
      }

      var tdNote = document.createElement("td");
      tdNote.textContent = p.note;

      tr.appendChild(th);
      tr.appendChild(tdStore);
      tr.appendChild(tdPrice);
      tr.appendChild(tdNote);
      rows.appendChild(tr);
    });
  }

  function update() {
    var gb = Number(slider.value);
    var plan = recommended(gb);
    var price = priceOf(plan);
    gbOut.textContent = gb;
    recPlan.textContent = plan.name;
    recPrice.textContent = price === 0 ? "Free" : "₹" + price + " / month";
    renderRows(plan.name);
  }

  function setBilling(isYearly) {
    yearly = isYearly;
    btnM.setAttribute("aria-pressed", String(!isYearly));
    btnY.setAttribute("aria-pressed", String(isYearly));
    update();
  }

  slider.addEventListener("input", update);
  btnM.addEventListener("click", function () { setBilling(false); });
  btnY.addEventListener("click", function () { setBilling(true); });
  update();
})();
