const fs = require('fs')

//Ova skripta broji fajlove svake sekunde i ispisuje ih u proizvoljni .txt fajl

const dir = '/path/to/directory/'
const sleep = (time) => {
  return new Promise((resolve)=> setTimeout(resolve, time))
}
//funkcija koja se treba ponavljati u odredjenom intervalu radi konstantnog update-a broja slika u folderu
const looper = async () =>{
for (let i = 0; i < dir.length; i++){
  await sleep(1000)//interval

  fs.readdir(dir, (err, files) => {

     console.log(files.length);
        data='numbers of images generated: ' + files.length;
        fs.writeFileSync('path/to/textfile/to/be/written',data.toString())
      });
}
}
looper()