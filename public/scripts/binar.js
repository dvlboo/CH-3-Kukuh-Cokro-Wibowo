const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

class Binar {
  static populateCars = (cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1
      const timeAt = new Date()
      const mutator = getRandomInt(1000000, 100000000)
      const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))

      return {
        ...car,
        availableAt,
      }
    })
  }

  static async listCars(filterer) {
    const response = await fetch(
      "https://raw.githubusercontent.com/dvlboo/CH-3-Kukuh-Cokro-Wibowo/develop/data/cars.json"
    )
    const body = await response.json()
    const cars = this.populateCars(body)

    if (filterer instanceof Function) return cars.filter(filterer)

    return cars
  }
}
