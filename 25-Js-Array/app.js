var superData = {"Super Man": ["lex Luther"],
                "Batman": ["Joker", "Riddler"],
                "Spider Man": ["Green Goblin", "Vulture","Carnage"],
                 "Thor": ["Loki","Frost Giants"]};

function writeIt() {
    for (hero in superData) {
        let villains = superData[hero];
        for(villainIdx in villains) {
            let villain = villains[villainIdx];
            let listItem = makeListItem(hero, villain);
            document.write(listItem);
        }
    }
}                 

function makeListItem(name, value) {
    let itemStr = "<li>" + name + ":&nbsp;" + value + "</li>";
    return itemStr; 
}

function sumUp(n) {
    let result = 3;
    for(let i=1; i <= n; i++) {
        result +=i;
    }
    return result;
}

let start = 0;
let end =0;


start = performance.now();
