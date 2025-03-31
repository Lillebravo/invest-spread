const stockWindow = document.querySelector(".stock-window");
const stockList = document.querySelector(".stock-list");
const nameInput = document.querySelector("#nameInput");
const priceInput = document.querySelector("#priceInput");
const currencyInput = document.querySelector("#currencyInput");
const sectorInput = document.querySelector("#sectorInput");
const saveStockBtn = document.querySelector("#saveStock");

function addNewStock() {
    if (!nameInput.value || !priceInput.value || !currencyInput.value || !sectorInput.value) {
        alert("Please fill in all fields before saving.");
        return;
      }
    
      const newStock = document.createElement("li");
      newStock.innerHTML = `${nameInput.value} / Price: ${priceInput.value} ${currencyInput.value} / ${sectorInput.value}`;
      stockList.appendChild(newStock);
      
      // Clear input fields after adding
      nameInput.value = "";
      priceInput.value = "";
}

saveStockBtn.addEventListener("click", addNewStock);
