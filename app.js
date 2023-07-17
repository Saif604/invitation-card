
const card = document.querySelectorAll('.card');

const element = `<video autoplay>
<source src="./projVideo.mp4" type="video/mp4" />
</video>`;

card.forEach(function(cardItem){
    cardItem.addEventListener('click',function(event){
        event.currentTarget.innerHTML = element;
    })
})


