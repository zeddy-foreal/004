let x = `<i class="fa-solid fa-x"></i>`;
let o = `<i class="fa-solid fa-o"></i>`;
let squares = document.querySelectorAll("section > div");
let starter = "";
let turn = ""
let hands = document.querySelectorAll(".fa-hand")
let clicks = 0;
let winners = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


function init(){
    document.querySelector(".container").style.cssText = "z-index: 1;";
    squares.forEach((square)=>{
        square.innerHTML = "";
    })
    starter = Math.round(Math.random());
    if (starter === 0){
        turn = "playerx";
        
    }else{
        turn = "playero";
    }

}


squares.forEach((square)=>{
    square.onclick = ()=>{
        if(square.innerHTML === ""){
            if (turn === "playerx"){
                square.innerHTML = x;
                turn = "playero";
            }else{
                square.innerHTML = o;
                turn = "playerx";
            }
            clicks++
            

            winners.forEach((array)=>{
                if(squares[array[0]].innerHTML === squares[array[1]].innerHTML && squares[array[0]].innerHTML === squares[array[2]].innerHTML && squares[array[0]].innerHTML != ""){
                    winner(squares[array[0]].innerHTML)
                }
            })
            if(clicks ===9){
                winner("draw")
            }
        }
    }
})

function winner(win){
    if(win === o){

        setTimeout(()=>{window.alert("player O wins")}, 500);
    }else if(win === "draw"){
        setTimeout(()=>{window.alert("No winner")}, 500);
    }else{

        setTimeout(()=>{window.alert("player X wins")}, 500);
    }
    clicks = 0;
    document.querySelector(".container").style.cssText = "z-index: -1;";
    setTimeout(()=>{init()},1000)
}