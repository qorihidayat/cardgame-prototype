const cardPanel = document.querySelectorAll('.card-panel');
const cardAttr = document.querySelectorAll('.card-attribute');
const animate = document.querySelector('.animate');
const animateCardP = Array.from(document.querySelectorAll('.animate .card-panel'));
const animateImg = animate.querySelector('.animate img');

class Karakter {
  constructor(nama, energy, power) {
    this.nama = nama,
    this.energy = energy,
    this.power = power

  }
  attack(karakterName){
    if (karakterName == alucard.nama) {
      alucard.energy-=this.power;
      funAttr();
      console.log(`kamu berhasil attack ${karakterName}`);
      console.log(`Energy ${karakterName} sekarang ${alucard.energy}`);
      if (alucard.energy <= 0) {
        console.log('Karakter Dead');
      }else if (karakterName == miya.nama) {
        miya.energy-=this.power;
        funAttr();
        console.log(`kamu berhasil attack ${karakterName}`);
        console.log(`Energy ${karakterName} sekarang ${miya.energy}`);
        if (miya.energy <= 0) {
          console.log('Karakter Dead');
        }
      }
    }
  }
}

const alucard = new Karakter('alucard', 60, 25);
const miya = new Karakter('miya', 30, 40);
const zilong = new Karakter('zilong', 80, 10);
const ling = new Karakter('ling', 50, 30);





const cardPLoop = cardPanel.forEach((char, i) => {
  char.addEventListener('click', function charfirst(e) {
    const cardProperti = char.querySelector('.card-properti');
    const cardPList = cardProperti.querySelectorAll('ul li');
    cardProperti.classList.toggle('propertiList');
    const cardPListLoop = cardPList.forEach((prop, j) => {
      prop.addEventListener('click', function propfirst(b) {
        if (char.classList.contains('zilong') && prop.innerHTML.includes('Attack')) {
          animateCardP[0].classList.toggle('zilong');
          prop.style.color = 'white';
          prop.style.backgroundColor = '#a6362b';
          console.log(`zilong attack`);
          b.stopImmediatePropagation();
          this.removeEventListener('click', propfirst);
          document.onclick = function(k) {
              if (k.target.classList.contains('alucard')) {
                  animateCardP[1].classList.toggle('alucard');
                  animate.classList.add('show');
                  setTimeout(function () {
                      animateImg.classList.add('show');
                      k.target.style.filter = 'invert(100%)';
                      zilong.attack(alucard.nama);
                  }, 1500);
              }else if (k.target.classList.contains('miya')) {
                animateCardP[1].classList.toggle('miya');
                animate.classList.add('show');
                setTimeout(function () {
                    animateImg.classList.add('show');
                    k.target.style.filter = 'invert(100%)';
                    zilong.attack(alucard.nama);
                }, 1500);
              }
          };
        }else if (char.classList.contains('zilong') && prop.innerHTML.includes('Defend')) {

        }else if (char.classList.contains('zilong') && prop.innerHTML.includes('Makan')) {

        }


      });
    });


  })
});


document.getElementById("test").addEventListener('click', function first(e) {
  e.stopImmediatePropagation();
  this.removeEventListener('click', first);
  document.onclick = second;
});

function second(){
    zilong.attack(alucard.nama);
}

function propsecond() {
const cardPLoop2 = cardPanel.forEach((char2, c) => {
  console.log(char2);
  char2.addEventListener('click', function(k) {
    console.log(char2);
  });
});

zilong.attack(alucard.nama);
}











function funAttr() {
  cardAttr.forEach((atr, p) => {
  const attrEnergy = atr.querySelectorAll('span')[1];
  const attrPower = atr.querySelectorAll('span')[3];
  const parentAttr = atr.parentElement;

  if (parentAttr.classList.contains('zilong')) {
  attrEnergy.innerHTML = zilong.energy;
  attrPower.innerHTML = zilong.power;
  }

  if (parentAttr.classList.contains('alucard')) {
    attrEnergy.innerHTML = alucard.energy;
    attrPower.innerHTML = alucard.power;
  }

  if (parentAttr.classList.contains('miya')) {
    attrEnergy.innerHTML = miya.energy;
    attrPower.innerHTML = miya.power;
  }

  if (parentAttr.classList.contains('ling')) {
    attrEnergy.innerHTML = ling.energy;
    attrPower.innerHTML = ling.power;
  }
  });
}
cardAttr.forEach((atr, p) => {
const attrEnergy = atr.querySelectorAll('span')[1];
const attrPower = atr.querySelectorAll('span')[3];
const parentAttr = atr.parentElement;

if (parentAttr.classList.contains('zilong')) {
attrEnergy.innerHTML = zilong.energy;
attrPower.innerHTML = zilong.power;
}

if (parentAttr.classList.contains('alucard')) {
  attrEnergy.innerHTML = alucard.energy;
  attrPower.innerHTML = alucard.power;
}

if (parentAttr.classList.contains('miya')) {
  attrEnergy.innerHTML = miya.energy;
  attrPower.innerHTML = miya.power;
}

if (parentAttr.classList.contains('ling')) {
  attrEnergy.innerHTML = ling.energy;
  attrPower.innerHTML = ling.power;
}
});
