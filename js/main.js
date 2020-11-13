let map = new Map();
map.initMap();

//let game = new Game();
//game.start()

//document.getElementById('case_12').addEventListener('click', (event) => {
 //   console.log(this);
//})

//document.getElementById('case_12').addEventListener('click', function(event){
  //  console.log(this)
//})

class Test {
    constructor() {
        document.getElementById('case_12').addEventListener('click', (event) => {
            console.log(this);
        })
    }
}

let test = new Test();
