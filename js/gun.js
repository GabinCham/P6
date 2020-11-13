class Gun {
    constructor(name, dammage, icon, className) {
        this.name = name;
        this.dammage = dammage;
        this.icon = icon;
        this.className = className;
    }
}

let gunDefault = new Gun('Gun One', 10, 'gun.svg', 'gunDefault');
let gunTwo = new Gun('Gun Two', 20, false, 'gunTwo');
let gunThree = new Gun('Gun three', 20, false);
let gunFour = new Gun('Gun four', 20, false);
