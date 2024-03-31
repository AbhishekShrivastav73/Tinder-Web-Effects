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

(function setInitials(){
    select('.noti h6').textContent = users[curr].pendingMessage;
    select('.main img').src = users[curr].img;
    select('.incoming img').src = users[curr+1]?.img;
    select('#location h5').textContent = users[curr].location;
    select('.mainDetail h1:nth-child(1)').textContent = users[curr].name;

    let clutter = '';
    users[curr].interests.forEach(function(elems){
        clutter += `<div class="flex items-center bg-white/40 w-fit px-4 gap-2 rounded-xl mt-4 py-1" >
        ${elems.icon}
        <h4 class="text-md">${elems.title}</h4>
    </div>`
    })
    select('.hobbies').innerHTML = clutter;
    select('.bio p').textContent = users[curr].bio;

})()