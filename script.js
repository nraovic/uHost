const backdrop = document.getElementById('backdrop');
const plans = document.querySelectorAll('.plan');
const modal = document.getElementById('modal');
const noButton = document.querySelector('.modal__action--negative');

const addModalAndBackdrop = () => {
  backdrop.style.display = 'block';
  modal.style.display = 'block';
};
for (let node of plans) {
  node.onclick = () => {
    addModalAndBackdrop();
  };
}

//Close modal and backdrop when No button in modal pressed
const closeModalandBackdrop = () => {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
};
noButton.onclick = () => {
  closeModalandBackdrop();
};
backdrop.onclick = () => {
  closeModalandBackdrop();
};
