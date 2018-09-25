const backdrop = document.getElementById('backdrop');
const plans = document.querySelectorAll('.plan');
const modal = document.getElementById('modal');
const noButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const addModalAndBackdrop = () => {
  backdrop.classList.add('open');
  modal.classList.add('open');
};
for (let plan of plans) {
  plan.onclick = () => {
    addModalAndBackdrop();
  };
}

//Close modal and backdrop when No button in modal pressed
const closeModalandBackdrop = () => {
  backdrop.classList.remove('open');
  modal.classList.remove('open');
  mobileNav.classList.remove('open');
};
noButton.onclick = () => {
  closeModalandBackdrop();
};
backdrop.onclick = () => {
  closeModalandBackdrop();
};

//Toggle Navigation

toggleButton.onclick = () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
};
