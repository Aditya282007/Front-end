//Local reviews data
const reviews = [
    {
    id: 1,
    img: 'person-1.jpeg',
    name: 'sara jones',
    job: 'ux designer',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, officia?'
    },
    {
    id: 2,
    img: 'person-2.jpg',
    name: 'James',
    job: 'ux designer',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, officia?'
    },
    {
    id: 3,
    img: 'person-3.jpg',
    name: 'john',
    job: 'ux designer',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, officia?'
    },
    {
    id: 4,
    img: 'person-4.jpg',
    name: 'sera',
    job: 'ux designer',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, officia?'
    },
    {
    id: 5,
    img: 'person-5.jpg',
    name: 'sara jones',
    job: 'ux designer',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, officia?'
    }
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson();
});

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}

nextBtn.addEventListener("click", function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
