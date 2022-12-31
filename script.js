// la liste de tous les mangas
let mangas_array = 
['Bleach',
'Bluelock',
'Chainsawman',
'Death note',
'Demon slayer',
'Fire force',
'Jujutsu kaisen',
'Naruto',
'One piece',
'One punch man'];

// le block qui contiendra les images 
let block_img = document.querySelector('.block_img');


//function qui affiche les couvertures des mangas
function show_img_mangas(){

    block_img.innerHTML= "";
    for(let i = 0; i< mangas_array.length ; i++){
        let name_low = mangas_array[i].toLowerCase();//le nom en miniscule
        let name = mangas_array[i];

        let block = document.createElement('div');
        block.classList.add('card');
        block.style.width = '18rem';
        block.innerHTML = `<img src="/Images/couverture/${name_low}.jpg" class="card-img-top" alt="${name}">`
      
        block_img.appendChild(block)
 
    }
}

show_img_mangas() //appel de la fonction


//function qui affiche les tomes selon le mangas
function show_tomes_ByName(nameMangas){

    block_img.innerHTML = "";
    for(let i = 1; i <=10; i++){

        let block = document.createElement('div');
        block.classList.add('card');
        block.style.width = '18rem';
        block.innerHTML = `<img src="/Images/${nameMangas}/${i}.jpeg" class="card-img-top" alt="${nameMangas}_${i}">`
      
        block_img.appendChild(block)

    }
}