let productCon = document.querySelector('#products');

let products = [
    {
    //manga item1//
items_image: 'https://i.postimg.cc/654HcrSV/Manga.webp',
items_name: 'Jujutsu Kaizen Manga',
item_description: 'This is the latest Jujutsu Kaizen Manga. Alert: Major spoilers. Half-price in-store.',
items_btnprimary: 'R175,00',
},{
//naruto cape//
items_image: 'https://i.postimg.cc/L8gLrRFG/naruto-cape.jpg',
items_name: 'Akatsuki  Cloak',
item_description: 'This is Narutos hoegka cape',
item_btnprimary: 'R400',
},
{
    //cat ear//
    items_image: 'https://i.postimg.cc/63sQy2qf/headsets.jpg',
    items_name: 'Cat Ear Headsets',
    item_description: 'Cute Glow up cat ear headsets',
    item_btnprimary: 'R500',
},
 {
 //demon slayer//
 items_image: 'https://i.postimg.cc/wjCVT2Xf/demon-slayer-figurine.jpg',
 items_name: 'Demon Slayer Figurines',
 item_description: 'Demon Slayer figurines, each character can glow in the dark.',
 item_btnprimary: 'R120.00 each',
 },   
{

 //demon slayer//
 items_image: 'https://i.postimg.cc/Vs9nj1jF/nezuko-cosplay.jpg',
 items_name: 'Nezuko costume',
 item_description: 'Play dress up.',
 item_btnprimary: 'R350',




}
];

 
    (function(){
        document.querySelector('#products').innerHTML=
        `
        <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${products[0].items_image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${products[0].items_name}</h5>
            <p class="card-text">${products[0].item_description}</p>
            <a href="#" class="btnprimary">${products[0].items_btnprimary}</a>
          </div>
        </div>
        </div>
        <!---------------->
        <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${products[1].items_image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${products[1].items_name}</h5>
            <p class="card-text">${products[1].item_description}</p>
            <a href="#" class="btnprimary">${products[1].item_btnprimary}</a>
          </div>
        </div>
        </div>
        <!---------------->
        <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${products[2].items_image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${products[2].items_name}</h5>
            <p class="card-text">${products[2].item_description}</p>
            <a href="#" class="btnprimary">${products[2].item_btnprimary}</a></a>
          </div>
        </div>
        </div>
        <!---------------->
        <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${products[3].items_image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${products[3].items_name}</h5>
            <p class="card-text">${products[3].item_description}</p>
            <a href="#" class="btnprimary">${products[3].item_btnprimary}</a>
          </div>
        </div>
        </div>
        <!---------------->
        <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${products[4].items_image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${products[4].items_name}</h5>
            <p class="card-text">${products[4].item_description}</p>
            <a href="#" class="btnprimary">${products[4].item_btnprimary}</a>
          </div>
        </div>
        </div>
        <!---------------->
        `
    })();
   
 



