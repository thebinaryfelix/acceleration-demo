window.onload = (() => {
  const container = document.getElementById('board-holder'); // 'container' is the section holding the <canvas></canvas> element
  const board = new Canvas(container, document.getElementById('board')); // 'board' is the Canvas id
  board.startAnimation();

  // receives an HTML id and a default value used for setting sphere radius, initial position X and initial position Y
  const getValueFromInput = (id, defaultValue) => {
    const value = parseInt(document.getElementById(id).value, 10);
    return (isNaN(value)) ? defaultValue : value;
  };

  const createSphere = () => {
    // if the value entered is not a number, sets 10 as radius
    const radius = getValueFromInput('sphere-radius', 10);

    // if the value entered is not a number, sets 10 as initial position X
    const posX = getValueFromInput('sphere-posX', 10);

    // if the value entered is not a number, sets o as initial position Y
    const posY = getValueFromInput('sphere-posY', 0);

    // 'isAccelerated' is either 'true' or 'false'
    board.createSphere(posX, posY, radius, document.getElementById('isAccelerated').checked);
  };

  // creates the Sphere only when button is clicked
  document.getElementById('create-sphere').addEventListener('click', () => createSphere());
});
