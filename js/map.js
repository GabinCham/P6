class Map {
    constructor(maxBoxes) {
        this.maxBoxes = 0;
    }

    initMap() {
        this.initBox(10, 10);
        this.initWalls(15);
        this.initGuns([gunDefault, gunTwo]);
        this.initPlayers([firstPlayer, secondPlayer]);
    }

    initBox(hauteur, longueur) {
        this.maxBoxes = hauteur * longueur;
        let count = 0;
        for (let h = 0; h < hauteur; h++) {
            let tr = document.createElement('tr');
            for (let l = 0; l < longueur; l++) {
                count++;
                let td = document.createElement('td');
                td.id = 'case_' + count;
                tr.appendChild(td);
            }
            document.getElementById('tbody').appendChild(tr);
        }
    }

    initWalls(numberOfWalls) {
        let boxArray = []; //creer un tableau pour le remplir des id que j'aurais sorti
        for (let i = 0; i < numberOfWalls; i++) { //boucle jusqu'au nombre de walls demandé
            let id = Math.floor(Math.random() * (this.maxBoxes - 1)) + 1; // dans un var, choisi un nombre aléatoire entre toutes les cases
            while (boxArray.includes(id)) { //tant que c'est pas déjà sortie (le nombre) on continu la boucle
                id = Math.floor(Math.random() * (this.maxBoxes - 1)) + 1; //on refait donc
            }
            boxArray.push(id); //quand on sort un chiffre, on l'ajoute au tableau pour pouvoir le comparé
            let box = document.getElementById(`case_${id}`); //on chope  une case dans le tableau
            box.classList.add('wall'); //et on y a ajoute un wall physique avec la class .wall
        }
    }

    initGuns(arrayOfGuns) {
        let boxGuns = [];
        for (let i = 0; i < arrayOfGuns.length; i++) {
            let id = Math.floor(Math.random() * (this.maxBoxes - 1)) + 1;
            let box = document.getElementById(`case_${id}`);
            while (boxGuns.includes(id) || box.classList.contains('wall')) {
                id = Math.floor(Math.random() * (this.maxBoxes - 1)) + 1;
                box = document.getElementById(`case_${id}`);
              //  console.log('ID', `case_${id}`)
            }
            boxGuns.push(id);
            box.setAttribute('data-gun', arrayOfGuns[i].name);
            box.classList.add(arrayOfGuns[i].className);
            box.classList.add('gun');
        }
    }

    initPlayers(arrayOfPlayer) {
        let boxPlayers = [];
        for (let i = 0; i < arrayOfPlayer.length; i++) {
            let id = Math.floor(Math.random() * (this.maxBoxes - 1)) + 1;
            let box = document.getElementById(`case_${id}`);
            while (boxPlayers.includes(id) || box.classList.contains('wall') || box.classList.contains('gun')) {
                id = Math.floor(Math.random() * (this.maxBoxes - 1)) + 1;
                box = document.getElementById(`case_${id}`);
            }
            boxPlayers.push(id);
            box.setAttribute('data-player', arrayOfPlayer[i].name);
            box.classList.add(arrayOfPlayer[i].className);
        }
    }
}


// isNextTo()
