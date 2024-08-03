const row = document.querySelector('.row')
const btn = document.querySelector('.Btn')

btn.addEventListener('click', () => {
    fetch('https://randomuser.me/api/', {
        method: 'GET',
        body: JSON.stringify(),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(response => response.json())
        .then(data => Posts(data.results))
        .catch(err => console.log(err))
})
function Posts(arr) {
    let person = arr[0]
    const img = document.createElement('img')
    const card = document.createElement('div')
    const title = document.createElement('p')
    title.textContent =
        person.name.title + ' ' + person.name.first + '' + person.name.last
    img.src = person.picture.large
    card.classList.add('card')
    card.appendChild(img)
    card.appendChild(title)
    row.appendChild(card)
    console.log(arr[0])
}