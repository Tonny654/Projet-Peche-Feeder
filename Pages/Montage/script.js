function showMontage() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Ferme la modale en cliquant à l'extérieur
window.onclick = function(e) {
  if (e.target.id === "modal") {
    closeModal();
  }
};
