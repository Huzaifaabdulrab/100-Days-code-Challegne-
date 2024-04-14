// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

function showMagicianName(show_magicians:string[]):void {
        show_magicians.forEach(magician =>{
                console.log(magician);
                
        })
}
showMagicianName(magicianNames)
