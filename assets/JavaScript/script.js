const description = document.querySelector(".description");
const news = document.querySelector(".new-texts");
const cards = document.querySelector(".cards");

const BASE_URL = "https://akademiprojeler.online/data/MertOzturk/news.json";




async function getNews(){
    const response = await fetch(BASE_URL);
    const data = await response.json();
    return data;
}


async function ekranaYazdir(){
    const data = await getNews();
    console.log(data);
    description.innerHTML = 
        `
        <div>
            <img src="${data.mainNew.photo}" alt="" class="vasilis">
            <div class="text">
                <h1 class="header-h1">${data.mainNew.title}</h1>
                <div class="paragraph">
                    <p class="p-text">${data.mainNew.description}</p>
                    <a href="#" class="btn">${data.mainNew.button}</a>
                </div>
            </div>
        </div>
        `



    for (const newss of data.sideNews) {
        console.log(newss);
        news.innerHTML += 
        `
            
                <div class="new-text">
                    <h3 class="new-header-h3">${newss.title}</h3>
                    <p class="new-paragraph">${newss.description}</p>
                </div>
                <hr>
            
        `
        console.log(newss);
    }


    
    for (const card of data.bottomNews) {
        cards.innerHTML += 
        `
        <div class="card">
            <img src="${card.photo}" alt="">
            <div class="card-text">
                <h2 class="header-h2">${card.order}</h2>
                <a href="" class="card-text1">${card.title}</a>
                <p class="card-text2">${card.description}</p>
            </div>
        </div>
        `
    }
}
ekranaYazdir();