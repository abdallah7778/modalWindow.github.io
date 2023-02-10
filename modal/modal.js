const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.closeModal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function openModal(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModel(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click',openModal);
}

btnCloseModal.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);

document.addEventListener('keydown',function(e){
    if(e.key=== 'Escape' && !modal.classList.contains('hidden')){
        closeModel();
    }
})