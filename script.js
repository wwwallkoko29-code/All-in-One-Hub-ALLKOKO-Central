
/==================== FILE 3: script.js ====================/

function filterCards(type){ const cards=document.querySelectorAll('.card');

cards.forEach(card=>{ if(type==='all' || card.dataset.category===type){ card.style.display='block'; } else { card.style.display='none'; } }); }

function searchCards(){ const value=document.getElementById('search').value.toLowerCase(); const cards=document.querySelectorAll('.card');

cards.forEach(card=>{ card.style.display=card.innerText.toLowerCase().includes(value) ? 'block' : 'none'; }); }.toLowerCase().includes(value) ? 'block'
