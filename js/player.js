class Player {
    constructor(name, pv, icon, gun, className) {
        this.name = name;
        this.pv = pv;
        this.icon = icon;
        if (!(gun instanceof Gun)) throw new Error('pas le bon object')
        this.gun = gun;
        this.className = className;

    }
}

let firstPlayer = new Player('JoueurUn', 100,  false, gunDefault, 'firstPlayer');
let secondPlayer = new Player('JoueurDeux', 100, false, gunDefault, 'secondPlayer');
