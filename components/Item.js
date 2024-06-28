export function Item(item){
    const li = document.createElement('li')
    const del = document.createElement('div')
    const bg = document.querySelector('.promo__bg')
    const genre = document.querySelector('.promo__genre')
    const title = document.querySelector('.promo__title')
    const descr = document.querySelector('.promo__descr')
    const imdb = document.querySelector('.rating_imdb')


    li.innerHTML = item.Title
    li.classList.add('promo__interactive-item')
    del.classList.add('delete')
    
    li.append(del)

    li.onclick = () => {
        bg.style.backgroundImage = `url(${item.Poster})`
        genre.innerHTML = item.Genre
        title.innerHTML = item.Title
        descr.innerHTML = item.Awards
        imdb.innerHTML = item.imdbRating
    }
    

    return li
}