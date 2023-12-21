const main_container = document.getElementById('list_container')
const list_container = document.getElementById('list_container')

// const url = 'https://pexelsdimasv1.p.rapidapi.com/v1/curated?per_page=80&page=5';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'Authorization': '563492ad6f91700001000001ec96d7f413d2409eadbd8e2f1b246385',
// 		'X-RapidAPI-Key': '5af2a46001msh3ae325382bba499p1023a2jsnf5e64ad455e3',
// 		'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
// 	}
// };

const url = `https://fakestoreapi.com/products`
function fetchProducts(){
    fetch(url)
    .then(response =>  response.json())
    .then(data => {
        console.log(data)
        data.forEach((product)=> {
            const titleWords = product.title.split(' ')
            const descWords = product.description.split(' ')
            if(titleWords.length >= 8){
                product.title = `${titleWords.splice(0, 4).join(" ")}`
            }

            if(descWords.length >= 8){
                product.description = `${descWords.splice(0, 4).join(" ")}...`
            }
            const cardContainer = document.createElement('div')
            cardContainer.className = 'card_container'
            cardContainer.innerHTML = `
            <img src="${product.image}" alt="${product.description}"/>
            <div class='description_container'>
                <h5 class="product_name">${product.title}</h5>
                <p class="product_desc">${product.description} 
                <a href='/' class='read_more'>Read more.</a></p>
                <h4 class='product_price'>
            ₹ ${product.price * 85}
            <span>Ratings ${product.rating.rate} rating and ${product.rating.count} Reviews</span>
            </h4>
            </div>
            `
            main_container.append(cardContainer)
        })
    })
    .catch(error => console.log(error))
}
fetchProducts();

function createImageBox(source){
        const main = document.querySelector('.main_container')
        const imageBox = document.createElement('div')
        imageBox.className = 'img_box'
        const image = document.createElement('img')
        image.id = "box_image"
        image.setAttribute('src',source )
        imageBox.appendChild(image)
        main.appendChild(imageBox)
}


