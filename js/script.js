let grogu = document.querySelector('.grogu');
document.addEventListener('click', (event) => {
   if (event.target.closest('.grogu-img')) {
      grogu.classList.remove('duble_jump');
      grogu.classList.add('jump');
   }
   if (event.target.closest('.cradle')) {
      grogu.classList.remove('jump');
      grogu.classList.add('duble_jump');
   }
})