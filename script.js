function mostrar(pantalla) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
  });

  document.getElementById(pantalla).classList.add('active');
}