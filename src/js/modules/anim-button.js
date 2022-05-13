function animButton() {
  const buttons = document.querySelectorAll('.btn-posnaware');

  buttons.forEach((button) => {
    ['mouseenter', 'mouseout'].forEach((evt) => {
      button.addEventListener(evt, (e) => {
        const parentOffset = button.getBoundingClientRect();
        const relX = e.pageX - parentOffset.left;
        const relY = e.pageY - parentOffset.top;

        const span = button.getElementsByTagName('span');

        span[0].style.top = `${relY}px`;
        span[0].style.left = `${relX}px`;
      });
    });
  });
}

export default animButton;
