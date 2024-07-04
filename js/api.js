

export class Category {
    constructor() {

    }

    /////////////// get game api by genere 
    async gameByGener(category) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '5721f20bd0msha804dcf5cad7bc1p1d4b47jsn75d8faa91fdd',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result;

        } catch (error) {
            console.error(error);
        }
    }

    ////////////get game api by id 
    async gameById(id) {
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '5721f20bd0msha804dcf5cad7bc1p1d4b47jsn75d8faa91fdd',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            return result;

        } catch (error) {
            console.error(error);
        }
    }

}







