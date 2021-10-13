module.exports.scrollTo = (index) => {
  const about = document.querySelector('#about');
  const openjob = document.querySelector('#openjob');
  const numbers = document.querySelector('#numbers');
  const departments = document.querySelector('#departments');

  const domArray = [about, about, numbers, departments, openjob];

  domArray[index].scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
};
