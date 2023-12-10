const tombol = document.querySelectorAll('#tombol');
const random = document.querySelectorAll('.random')
const cardContent = document.querySelectorAll('.card-content')


tombol.forEach(btn => {
    btn.addEventListener('click', () => {
        const tujuan = btn.getAttribute("popup")
        document.querySelector(tujuan).classList.toggle('active')
        btn.remove();
    })
})








