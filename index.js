var kittens = ["Milo", "Otis", "Garfield"]

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}
function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}

function appendKitten(Broom){
  return [...kittens, Broom]
  
}
function prependKitten(Arnold) {
  return [kittens,...Arnold]
  }
  