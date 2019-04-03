function harmlessRansomNote(noteText, magazineText) {   // Dva parametra funkcije
    let noteArr = noteText.split(' ');                  // U parametru noteText razdvoji svaku riječ
    let magazineArr = magazineText.split(' ');          // U parametru magazineText razdvoji svaku riječ
    let magazineObj = {};                               // wordcounter [] is an array, {} is an object

magazineArr.forEach(word => {
   if (!magazineObj[word]) magazineObj[word] = 0;       // ako riječi nema u magObj onda je nula
    magazineObj[word]++;                                // povećaj
});

    let  noteIsPossible = true;
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) noteIsPossible = false; // ako je brojač riječi manji od nule = false
        }
        else  noteIsPossible = false;
  });

    return console.log(noteIsPossible);                     // console.log ?????
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of' +
    ' great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite ' +
    'a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have' +
    ' for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this ' +
    'is one of the best places i have ever visited');