document.getElementById('button').addEventListener('click',compare)
let age = 0

function compare() {
  age = document.getElementById('input').value

  if (age > 17) {
    document.getElementById('answer').innerHTML = "You can see an R rated movie by yourself"
   } else if (age >= 13) {
    document.getElementById('answer').innerHTML = "You can see a PG-13 movie by yourself"
   } else if (age >= 5) {
      document.getElementById('answer').innerHTML = "You can see a G or PG movie alone"
   } else {
      document.getElementById('answer').innerHTML = "You are too young to see pretty much anything"
   }
}