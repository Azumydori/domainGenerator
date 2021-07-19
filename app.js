const pronouns = ["a", "the"];
const adjs = ["great", "stinky", "loud", "tiny", "annoying", "fluffy", "just"];
const nouns = ["knife","hamster", "breathcode", "italia", "malcom", "doit"];
const extensions = ["com", "es", "io", "org", "net", "it", "de"];


window.onload = () => {
  let result = document.querySelector('#domain');
  let listDomain = generateDomain();
  for (const domain of listDomain) {
    console.log(domain);
    result.innerHTML = result.innerHTML.concat('<li>', domain, '</li>');
  }
};

function generateDomain() {
  let domain = [];

  for (const pronoun of pronouns) {
    for (const adj of adjs) {
      for (const noun of nouns) {
        for (const extension of extensions) {
          let firstPart = pronoun + noun;

          if (checkExtension(firstPart, extension)) {

            let auxList = [...firstPart];
            auxList.splice(firstPart.length - extension.length, 0, '.');
            domain.push(auxList.join(''));
          } else {
            domain.push(firstPart + '.' + extension);
          }
        }
      }
    }
  }

  return domain;
}

const checkExtension = (domainFirstPart, extension) => {
  return domainFirstPart.includes(extension, domainFirstPart.length - extension.length);
};
