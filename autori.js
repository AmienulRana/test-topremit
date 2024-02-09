function autori(name){
    let splitTheName = name?.split('-');

    let firstLetter = '';

    splitTheName.forEach((name) => firstLetter += name?.substring(0, 1)?.toUpperCase());
    return firstLetter;
}

console.log(autori('Knuth-Morris-Pratt')); // KMP
console.log(autori('Mirko-Slavako')); // MS
console.log(autori('Pasko-Patak')); // PP
console.log(autori('Amienul-Rana')); // AR