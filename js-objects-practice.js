const snakewaterMontana = {
  paleontologist: 'Dr. Alan Grant',
  depth: '10 meters',
  specimen: 'Velociraptor',
};

const guestOfHonor = snakewaterMontana.paleontologist
// console.log(guestOfHonor)

const cleverGirl = snakewaterMontana.specimen
// console.log(cleverGirl)

// Part 2

const nicaragua = {
  depth: '200 meters',
  annualBudget: 1500000,
  specimens: [
    'Tyrannosaurus Rex',
    'Stegosaurous',
    'Triceratops',
    'Velociraptor',
  ],
};

const nicaraguanSpecimens = nicaragua.specimens
// console.log(nicaraguanSpecimens)

const favoriteSpecimen = nicaragua.specimens[1]
// console.log(favoriteSpecimen)

const newNicBudget = nicaragua.annualBudget += 250000
// console.log(newNicBudget)

// Part 3

const hammondsMines = {
  buenosAires: {
    depth: '400 meters',
    annualBudget: 1000000,
    specimens: ['Dilophosaurus', 'Brachiosaurus'],
  },
  mexico: {
    depth: '350 meters',
    annualBudget: 900000,
    specimens: ['Gallimimus', 'Parasaurolophus'],
  },
};

const mexicoDepth = hammondsMines.mexico.depth
// console.log(mexicoDepth)

const buenosAiresBudget = hammondsMines.buenosAires.annualBudget
// console.log(buenosAiresBudget)

const buenosAiresSpecimens = hammondsMines.buenosAires.specimens
// console.log(buenosAiresSpecimens)

hammondsMines.nicaragua = nicaragua
// console.log(hammondsMines)

const mexicoAnnualBudget = hammondsMines.mexico.annualBudget
const buenosAiresAnnualBudget = hammondsMines.buenosAires.annualBudget
const nicaraguaAnnualBudget = hammondsMines.nicaragua.annualBudget

// console.log(nicaraguaAnnualBudget)

const totalBudget = mexicoAnnualBudget + buenosAiresAnnualBudget + nicaraguaAnnualBudget
// console.log(totalBudget)

const parasaurolophus = hammondsMines.mexico.specimens[1]
// console.log(parasaurolophus)

const hasMineMexico = hammondsMines.hasOwnProperty('mexico')
// console.log(hasMineMexico)

const allDepths = function () {
  for (let key in hammondsMines) {
    console.log(hammondsMines[key].depth)
  }
}

// allDepths()

const addAllBudgets = function () {
  let total = 0
  for (let key in hammondsMines) {
    console.log(hammondsMines[key])
    total += hammondsMines[key].annualBudget
  }
  console.log(total)
  return total
}

addAllBudgets()