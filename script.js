function resquest(){
    // Effectuer une requête HTTP GET
    fetch('https://google.com')
    .then(response => response.json())
    .then(data => {
    // Mettre à jour le contenu de l'élément "response"
    document.getElementById("response").textContent = JSON.stringify(data);
  })
  .catch(error => console.error('Erreur:', error));
}