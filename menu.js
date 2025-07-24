// Показывать нужный раздел
function showSection(section) {
  ['roulette','collection','transfer'].forEach(id => {
    document.getElementById(id).style.display = 'none';
  });
  document.getElementById(section).style.display = 'block';
}