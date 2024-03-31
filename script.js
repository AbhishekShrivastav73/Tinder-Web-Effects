// Set data
let users = [
    {
        img : "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 18,
        location : 'Delhi, India',
        name : 'Shruti',
        age : 21,
        interests : [
            {
                icon : '<i class="ri-music-2-fill"></i>',
                title : 'Music'
            },
            {
                icon : '<i class="ri-sketching"></i>',
                title : 'Painting'
            },
        ],
        bio : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi debitis. Lorem ipsum dolor sit',
        isFriend : null
    },
    {
        img : "https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 10,
        location : 'Lucknow, India',
        name : 'Aarushi',
        age : 25,
        interests : [
            {
                icon : '<i class="ri-music-2-fill"></i>',
                title : 'Music'
            },
            {
                icon : '<i class="ri-sketching"></i>',
                title : 'Painting'
            },
        ],
        bio : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi debitis. Lorem ipsum dolor sit',
        isFriend : null
    },
    {
        img : "https://images.unsplash.com/photo-1514315384763-ba401779410f?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 5,
        location : 'Delhi, India',
        name : 'Anika',
        age : 23,
        interests : [
            {
                icon : '<i class="ri-music-2-fill"></i>',
                title : 'Music'
            },
            {
                icon : '<i class="ri-pencil-line"></i>',
                title : 'Writting'
            },
        ],
        bio : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi debitis. Lorem ipsum dolor sit',
        isFriend : null
    },
    {
        img : "https://images.unsplash.com/photo-1496440737103-cd596325d314?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: 5,
        location : 'Agra, India',
        name : 'Shradha',
        age : 20,
        interests : [
           
            {
                icon : '<i class="ri-pencil-line"></i>',
                title : 'Painting'
            },
        ],
        bio : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi debitis. Lorem ipsum dolor sit',
        isFriend : null
    },
];

// Selector Short-Cut 
function select(elem){
    return document.querySelector(elem)
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select('.noti h6').textContent = users[index].pendingMessage;
    select('#location h5').textContent = users[index].location;
    select('.mainDetail h1:nth-child(1)').textContent = users[index].name;

    let clutter = '';
    users[index].interests.forEach(function(elems){
        clutter += `<div class="flex items-center bg-white/40 w-fit px-4 gap-2 rounded-xl mt-4 py-1" >
        ${elems.icon}
        <h4 class="text-md">${elems.title}</h4>
    </div>`
    })
    select('.hobbies').innerHTML = clutter;
    select('.bio p').textContent = users[index].bio;
}

function setInitials(){

    select('.main img').src = users[curr].img;
    select('.incoming img').src = users[curr+1]?.img;
    
    setData(curr)
    curr = 2;
}
setInitials()

function changeImg(){
    if(!isAnimating){
        isAnimating = true;
        
    let mainCard = select('.main');
    let incomingCard = select('.incoming');

    let tl = gsap.timeline({
        onComplete : function(){
            // alert()
            isAnimating =false;
            incomingCard.classList.remove("z-[4]");
            incomingCard.classList.add("z-[5]");
            incomingCard.classList.remove("incoming");

            mainCard.classList.remove('z-[5]');  
            mainCard.classList.add('z-[4]');  
            gsap.set(mainCard,{
                scale : 1,
                opacity : 1
            })

            if(curr === users.length) curr=0;
            select('.main img').src = users[curr].img;
            curr++;

            incomingCard.classList.add("main");

            mainCard.classList.remove('main')
            mainCard.classList.add('incoming')
        }
    });
    tl.to('.main',{
        scale : 1.2,
        opacity : 0,
        ease : Circ,
        duration : .9
    },'start')
    .from('.incoming',{
        scale : 1.2,
        opacity : 0,
        ease : Circ,
        duration : 1.2
    },'start')
}
}

let deny = select('.deny');
let accept = select('.accept');

deny.addEventListener('click', function(){
    changeImg();
    setData(curr-1)
    gsap.from('.details .element',{
        y:'100%',
        opacity : 0,
        ease : Power4.easeInOut,
        duration : 1.3,
        stagger : 0.1
    })
})
accept.addEventListener('click', function(){
    changeImg();
    setData(curr-1)
    gsap.from('.details .element',{
        y:'100%',
        opacity : 0,
        ease : Power4.easeInOut,
        duration : 1.3,
        stagger : 0.1
    })
})


function createContainer(){
    document.querySelectorAll('.element').forEach(function(e){
        let div = document.createElement('div');
        div.classList.add(`${e.classList[1]}Container`,'overflow-hidden');
        div.appendChild(e);
        select('.details').appendChild(div);
    })
}
createContainer()

