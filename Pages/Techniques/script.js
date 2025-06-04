function openModal(poisson) {
  const data = {
    gardon: "Étapes : amorçage léger, ligne fine, petits appâts. Plomb cage de 10-20g.",
    breme: "Étapes : amorce sucrée, feeder moyen, bas de ligne souple, hameçon 16.",
    carpe: "Étapes : method feeder, cheveu, amorce riche, pellets et mini bouillettes.",
    tanche: "Étapes : feeder moyen, appât à l’ail ou maïs, bas de ligne discret.",
    ablette: "Étapes : ligne très fine, pêche en surface, hameçon 22, amorce en nuage."
  };
  document.getElementById('modal-title').textContent = "Montage pour " + poisson.charAt(0).toUpperCase() + poisson.slice(1);
  document.getElementById('modal-text').textContent = data[poisson];
  document.getElementById('modal').style.display = "flex";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}
