// const urlSearchParams = new urlSearchParams(window.location.search)
// const params = Object.fromEntries(urlSearchParams.entries())

// console.log(params)

const app = new App()
app.init().then(app.run)