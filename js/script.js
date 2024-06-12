fetch('components/navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
})
.catch(error => console.error('Error loading navbar:', error));


fetch('components/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
})
.catch(error => console.error('Error loading footer:', error));

function goToMenu() {
    window.location.href = "menu.html";
}

function viewCoffeePdf() {
    window.open("../assets/pdf/menu_bbtea_price.pdf", "_blank");
}
