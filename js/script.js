const vpsButton = document.getElementById('vpsButton');
const vpsContent = document.getElementById('vpsContent');
vpsButton.addEventListener('click', () => {
    vpsContent.classList.toggle('d-none');
});