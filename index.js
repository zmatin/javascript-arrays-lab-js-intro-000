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
  return [Arnold,...kittens]
  }

function removeLastKitten() {
  return kittens.slice(0, length -1)
  
}
  function removeFirstKitten() {
    return kittens.slice(1)
    
  }