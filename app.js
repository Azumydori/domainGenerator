
window.onload = () => {
    document.querySelector("#button").addEventListener("click", () => {
      document.querySelector("#generator").innerHTML = domainGenerator();
    });
  };

let domainGenerator = () => {

let pronoun = ["a", "the"];
let adj = ["great","big", "small", "thin", "fat", "stinky", "loud", "tiny", "annoying", "fluffy"];
let noun = ["knife", "toy", "cat", "juice", "pen","stingray","raccoon", "flamingo", "hamster", "dragon"];
let domainExt = [".com", ".es", ".io", ".org", ".net"];

let proIndex = Math.floor(Math.random() * pronoun.length);
let adjIndex = Math.floor(Math.random() * adj.length);
let nounIndex = Math.floor(Math.random() * noun.length);
let domainIndex = Math.floor(Math.random() * domainExt.length);

return (
    pronoun[proIndex] + adj[adjIndex] + noun[nounIndex] + domainExt[domainIndex]

    );

};