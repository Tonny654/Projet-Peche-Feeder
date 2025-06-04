// Contenus détaillés pour chaque poisson
const modalContents = {
  gardon: `
    <p><strong>Montage Gardon :</strong> Utiliser un feeder cage léger de 10-20g. Bas de ligne de 20cm en 10/100, hameçon n°18.</p>
    <p><strong>Conseil :</strong> Asticot ou pinkie comme appâts. Pêcher en bordure ou sur zones peu profondes.</p>
    <p><em>Astuce :</em> Rester discret et limiter les amorçages pour éviter de faire fuir le poisson.</p>
    <p><strong>Mélanger à sec :</strong> mélanger toutes les farines sauf la terre.</p>
    <p><strong>Premier mouillage :</strong> avec de l'eau légèrement aromatisée(scopex,brasem ou coriandre liquide).</p>
    <p><strong>Repos :</strong> laisser reposer 15 min.</p>
    <p><strong>Tamisage :</strong> passer au tamis fin pour homogéiser.</p>
    <p><strong>Ajouter la terre de somme :</strong> (si nécessaire pour ajuster la densité et limiter la diffusion en eau claire).</p>
    <p><strong>Ajuster la texture :</strong> Au besoin, re-humidifier légèrement pour obtenir une amorce qui se tient bien dans le feeder mais éclate au fond.</p>
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
