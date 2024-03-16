const hiddenMenu = document.getElementById("hamburger-menu")
const menuItems = document.getElementById("menu-items")
const closeX = document.getElementById("close-x")

// efek gelap
const darkLayer = document.getElementById("bg-darkLayer")

hiddenMenu.addEventListener('click', () => {
  menuItems.classList.remove("d-none")
  menuItems.classList.add("d-flex")
  hiddenMenu.classList.add("d-none")
  darkLayer.style.display = "block";

  function hideMenuOnClickOutside() {
    document.body.addEventListener('click', (event) => {
      const clickedElement = event.target;
      if (!menuItems.contains(clickedElement) && clickedElement !== hiddenMenu) {
        menuItems.classList.add("d-none")
        menuItems.classList.remove("d-flex")
        hiddenMenu.classList.remove("d-none")
        darkLayer.style.display = "none";
        document.body.removeEventListener('click', hideMenuOnClickOutside)
      }
    })
  }

  hideMenuOnClickOutside()
})

closeX.addEventListener('click', () => {
  menuItems.classList.add("d-none")
  menuItems.classList.remove("d-flex")
  hiddenMenu.classList.remove("d-none")
  darkLayer.style.display = "none";
})

const menuLinks = menuItems.querySelectorAll('a')
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuItems.classList.add("d-none")
    menuItems.classList.remove("d-flex")
    hiddenMenu.classList.remove("d-none")
    darkLayer.style.display = "none";
  })
})

// function buat ke pages findCar
const toFindCar = () => window.location.href = "./pages/findCar.html"