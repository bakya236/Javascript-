let div_col;
let div_card;
let img_card;
let div_card_body;
let h5_card_title;
let p_card_text;

const name_list = [
    {
        "name": "Arun",
        "image": "https://ui-avatars.com/api/?name=Arun",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
    },

    {
        "name": "Ajith",
        "image": "https://ui-avatars.com/api/?name=Ajith",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
    },
    {
        "name": "Bala",
        "image": "https://ui-avatars.com/api/?name=Bala",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
    },
    
    {
        "name": "Deva",
        "image": "https://ui-avatars.com/api/?name=Deva",
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate."
    }

]

for (let i = 0; i < 8; i++) {

    //  <div class="col"> </div>
    div_col = document.createElement("div");
    div_col.setAttribute("class", "col");
    console.log(div_col);

    //  <div class="card"> </div>
    div_card = document.createElement("div");
    div_card.setAttribute("class", "card");
    div_col.append(div_card);

    //  <img src="" class="card-img-top" alt=""/>
    img_card = document.createElement("img");
    img_card.setAttribute("src", name_list[i]["image"]);
    img_card.setAttribute("alt", "image_placeholder");
    img_card.setAttribute("class", "card-img-top");
    div_card.append(img_card);

    //  <div class="card-body"> </div>
    div_card_body = document.createElement("div");
    div_card_body.setAttribute("class", "card-body");
    div_card.append(div_card_body);


    //  <h5 class="card-title"> </h5>
    h5_card_title = document.createElement("h5");
    h5_card_title.setAttribute("class", "card-title");
    h5_card_title.innerText = name_list[i]["name"];
    div_card_body.append(h5_card_title);

    //  <p class="card-text"> </p>
    p_card_text = document.createElement("p");
    p_card_text.setAttribute("class", "card-text");
    p_card_text.innerText = "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.";
    div_card_body.append(p_card_text);


    document.querySelector("div.row.row-cols-1").append(div_col);

}


// using clone method 

// for (let i = 0; i < 8; i++) {
//     let element = document.querySelector("main div.col")
//     let clone = element.cloneNode(true);
//     element.after(clone);
// }

