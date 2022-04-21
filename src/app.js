// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]
const allContactsList = document.querySelector("#display_all_contacts")
const displaySingleContact = document.querySelector("#display_single_contact")


function loadContacts(contacts) {
  for (contact of contacts) {
    const html = `
    <div class="contact" data-index=${contact.ID}>
      <img src="img/${contact.image}" alt="Image of ${contact.image}">
      <p>${contact.name}</p>
    </div>
    `
    allContactsList.insertAdjacentHTML("afterbegin", html)
  }
}

loadContacts(contactsList)

function toggleAllContacts(showall) {
  allContactsList.setAttribute("style", `display: ${showall ? 'block' : 'none'};`)
  displaySingleContact.setAttribute("style", `display: ${showall ? 'none' : 'block'};`)
  if (showall) {
    document.querySelector(".single-contact-view")?.remove()
  }
}

function showSingleContact(contact) {
  toggleAllContacts(false)
  const html = `
  <div class="single-contact-view">
    <img src="img/${contact.image}" alt="Image of ${contact.image}">
    <div>
      <h1>${contact.name}</h1>
      <p>${contact.phone}</p>
      <p>${contact.email}</p>
    </div>
    <span class="icons"><i class="fa-solid fa-circle-xmark"></i></span>
  </div>
  `
  displaySingleContact.insertAdjacentHTML("afterbegin", html)

  document.querySelector(".icons > .fa-solid.fa-circle-xmark").addEventListener("click", function() {
    toggleAllContacts(true)
  })
}

allContactsList.addEventListener("click", function(event) {
  const targetArticle = event.target.closest("article")
  const contactId = targetArticle.dataset.index
  showSingleContact(contactsList[contactId])
})