// Event listener for opening the navigation bar
document.querySelectorAll('.lines').forEach(item => {
    item.addEventListener('click', event => {
      document.querySelector('nav').style.display = 'flex';
    });
  });
  
  // Event listener for closing the navigation bar
  document.querySelectorAll('.line').forEach(item => {
    item.addEventListener('click', event => {
      document.querySelector('nav').style.display = 'none';
    });
  });
  