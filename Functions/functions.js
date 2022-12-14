// função construtora para criação de vários objetos dentro de um método universal
function champs() {
  return `${this.power} ${this.money}`;
}

const lissandra = {
  power: 'Tûmulo congelado',
  money: 7900,
};

const nami = {
  power: 'Maré Violenta',
  money: 6500,
};

const missFortune = {
  power: 'Chuva de Disparos',
  money: 7900,
};

const callChamp = champs.call(nami);
const callChamp2 = champs.call(lissandra);
const callChamp3 = champs.call(missFortune);

//criação de método através de prototipo e função construtora para utilizar métodos de arrays dentro de arrays-like com o call();

const frutas1 = ['Uva', 'Maçã', 'Banana'];

Array.prototype.moreThis = function () {
  console.log(this);
};

Array.prototype.pop.call(frutas1);
Array.prototype.push.call(frutas1, 'Banana');

// Utilizando filter dentro de uma Nodelist através do prototype

const li1 = document.querySelectorAll('li');

const filter = Array.prototype.filter.call(li1, (item) => {
  return item.classList.contains('active');
});

// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const p = document.querySelectorAll('p');

const reduceP = Array.prototype.reduce.call(
  p,
  (acumulator, item) => {
    return item.innerText.length + acumulator;
  },
  0,
);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function eleMents(tag, classe, conteudo) {
  const element = document.createElement(tag);
  element.classList.add(classe);
  element.innerText = conteudo;

  return element;
}

console.log(eleMents('div', 'active', 'This is content'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = eleMents.bind(null, 'h1', 'titulo');
const cursosJS = h1Titulo('Cursos de Javascript');
const cursosHTML = h1Titulo('Cursos de HTML');
