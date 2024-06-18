// Import our custom CSS
import '../scss/style.scss';
import '../css/style.css';
import './component/header.js'
import './component/movieList.js'
import '../js/main.js'

document.addEventListener('DOMContentLoaded', main); 



function main() {
    const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
    const api_key = '72d2bb825d986ce11aeec182bf72d1cd';
    const tampilan = document.getElementById('listmovie');

    const getMovie = async() =>  {
        try {
            const response = await fetch(`${baseUrl}${api_key}`);
            const responseJson = await response.json();
            responseJson.results.forEach(film => {
            tampilan.innerHTML += `
            <div class="card col-md-12 mb-3 border-0" >
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-12">
                        <img src="https://image.tmdb.org/t/p/w500/${film.poster_path}" class="img-fluid rounded-start w-100">
                    </div>
                    <div class="col-lg-8 col-md-6 col-sm-12">
                        <div class="card-body">
                            <h3 class = "fw-bold">${film.title}</h3>
                            <p> ${film.release_date}</p>
                                <h5 class = "fw-bold">Overview</h5>
                                <p class="card-text ">${film.overview}</p>
                                <h5 class = "fw-bold">Rating</h5>
                                <p>${film.vote_average}%</p>
                                
                        </div>
                    </div>
                </div>
            </div>`
            });
        } catch (error) {
            console.log('Data Tidak Ditemukan');
        }
    }
    getMovie()
}

main()

