function computerPlay(){
    let options=[
        "Rock",
        "Paper",
        "Scissors"
    ]
    return options[Math.floor(Math.random()*options.length)];
}

console.log(computerPlay());