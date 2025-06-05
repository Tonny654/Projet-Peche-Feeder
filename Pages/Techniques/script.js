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

// Contenus détaillés pour chaque poisson
const modalContents = {
  gardon: `
    <p><strong>Montage Gardon :</strong> Utiliser un feeder cage léger de 10-20g. Bas de ligne de 20cm en 10/100, hameçon n°18.</p>
    <p><strong>Conseil :</strong> Asticot ou pinkie comme appâts. Pêcher en bordure ou sur zones peu profondes.</p>
   
  `,
  breme: `
    <p><strong>Montage Brème :</strong> Feeder ouvert de 30-40g. Bas de ligne de 30cm en 12/100, hameçon n°16.</p>
    <p><strong>Conseil :</strong> Utiliser des appâts sucrés comme maïs doux ou vers de vase en bouquet.</p>
  `,
  carpe: `
    <p><strong>Montage Carpe :</strong> Méthode feeder, hameçon n°10 avec cheveu, bas de ligne 15cm en 20/100.</p>
    <p><strong>Conseil :</strong> Pellets, mini bouillettes, ou maïs sur cheveu.</p>
  `,
  tanche: `
    <p><strong>Montage Tanche :</strong> Feeder cage moyen. Hameçon n°14, bas de ligne 25cm en 14/100.</p>
    <p><strong>Conseil :</strong> Appâts odorants tels que maïs, asticot ou pâte à l’ail.</p>
  `,
  ablette: `
    <p><strong>Montage Ablette :</strong> Ligne très fine, mini feeder 5g, hameçon n°22, bas de ligne 8/100.</p>
    <p><strong>Conseil :</strong> Amorçage en surface, appâts vivants très petits (asticot coupé).</p>
  `
};

// Ouvre la modale et injecte le contenu
function openModal(poisson) {
  const modal = document.getElementById('modal');
  document.getElementById('modal-title').textContent = `Montage ${poisson.charAt(0).toUpperCase() + poisson.slice(1)}`;
  document.getElementById('modal-body').innerHTML = modalContents[poisson] || '<p>Contenu non disponible.</p>';
  modal.style.display = 'flex';
}

// Ferme la modale
function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Fermer la modale si clic hors contenu
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if(event.target === modal) {
    closeModal();
  }
};

