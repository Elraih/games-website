

export class Display {
    constructor() {
        this.games = document.querySelector('.games');
        this.spic = document.querySelector('.game-detail');
        this.item = document.querySelectorAll('.item')

    }

    /////////////////// display games on home page
    display(data) {
        let box = ``;
        for (let i = 0; i < data.length; i++) {
            box += `
                    <div class="item col-md-6 col-lg-4 col-xl-3" data-set="${data[i].id}">
                    <div class="inner">
                        <div class="img">
                            <img src=${data[i].thumbnail} alt="bg">
                        </div>
                        <div class="content">
                            <header>
                                <h4>${data[i].title}</h4>
                                <span>free</span>
                            </header>
                            <p>${data[i].short_description}</p>
                        </div>
                        <div class="footer">
                            <p>${data[i].genre}</p>
                            <p>${data[i].platform}</p>
                        </div>
                    </div>
                </div>`
        }
        this.games.innerHTML = box;
    }

    ////////////////// display game detail 
    dp(data) {
        this.spic.innerHTML = `
       <div class="container">
            <h2>${data.title}</h2>
            <button class="detail-btn">X</button>
        <div class="row">
            <div class="col-4">
                <div class="detail-inner" >
                    <img src=${data.thumbnail} alt="">
                </div>
            </div>

            <div class="col-8">
                <div class="detail-inner">
                    <p>developer: ${data.developer}</p>
                    <p>Category: ${data.genre}</p>
                    <p>Platform: ${data.platform}</p>
                    <p>Status: ${data.status}</p>
                    <p>${data.description}</p>

                    <a href=${data.game_url} target="_blank">game website</a>
                </div>
            </div>
        </div>
       </div>`
        this.spic.classList.toggle('d-none')
    }
}


