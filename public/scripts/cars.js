class Car {
  static list = []

  static init(cars) {
    this.list = cars.map((i) => new this(i))
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,

  }) {
    this.id = id
    this.plate = plate
    this.manufacture = manufacture
    this.model = model
    this.image = image
    this.rentPerDay = rentPerDay
    this.capacity = capacity
    this.description = description
    this.transmission = transmission
    this.available = available
    this.type = type
    this.year = year
    this.options = options
    this.specs = specs
    this.availableAt = availableAt
  }

  // render() {
  //   return ` 
  //   <div class="col-md-4">
  //     <div class="card" style="width: 20rem;">
  //       <div class="card-body">
  //         <img src="${this.image}" class="card-img-top mb-5" alt="${this.manufacture}">
  //         <h6 class="card-subtitle mb-4">${this.manufacture} / ${this.model} ${this.type}</h6>
  //         <h5 class="card-title">Rp ${this.rentPerDay} / Hari</h5>
  //         <p class="card-text">${this.description}</p>
  //         <div class="flex d-flex m-auto mb-2 gap-2">
  //           <img src="images/fi_users.png" alt="" width="25">
  //           <p class="mb-0">${this.capacity} orang</p>
  //         </div>
  //         <div class="flex d-flex m-auto mb-2 gap-2">
  //           <img src="images/fi_settings.png" alt="" width="25">
  //           <p class="mb-0">${this.transmission}</p>
  //         </div>
  //         <div class="flex d-flex m-auto mb-2 gap-2">
  //           <img src="images/fi_calendar.png" alt="" width="25">
  //           <p class="mb-0">Tahun ${this.year}</p>
  //         </div>
  //         <a href="#" class="btn btn-primary">Pilih Mobil</a>
  //       </div>
  //     </div>
  //   </div>`
  // }
}