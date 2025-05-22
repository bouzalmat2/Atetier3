const text = ` un programme fonctionnel qui divise le texte en lignes, convertit chaque ligne en majuscules,
filtre les lignes contenant la lettre "I", puis les imprime.`;


text.split('\n')  
  .map(ligne=> ligne.toUpperCase())       
  .filter(ligne => ligne.indexOf('I') !== -1) 
  .forEach(ligne  => console.log(ligne ));  
