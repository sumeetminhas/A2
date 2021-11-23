let contactList = [
    {
      name: "Roberta Dobbs",
      phone: "778-555-1234",
      address: "101 Main St, Anytown, USA",
      email: "subgenius@slack.example.com",
    }, 
    {
      name: "Bugs Bunny",
      phone: "123-867-5309",
      address: "Warner Brothers Animation Lot",
      email: "whatsup@doc.example.com",
    },
  ]

// removes all of the DOM nodes that are unique to the Index page
function cleanUpIndex() {
    let removeUniqueIndex = document.querySelectorAll(".contact");
    for (i = 0; i < removeUniqueIndex.length; i++) {
        removeUniqueIndex[i].remove()
    }
};

// creates a single index card for the Index page
function createSingleIndex(newContact) {
    const newLink = document.createElement("a");
    newLink.setAttribute('href', 'page3.html');

    const newDiv = document.createElement("div");
    newDiv.classList.add("contact");

    const newP = document.createElement("p");
    newP.textContent = newContact["name"];
    newDiv.appendChild(newP);

    newLink.appendChild(newDiv);

    return newLink;
};

// creates all of the DOM nodes that are unique to the Index page
function renderIndex(contactList) {
  let newList = document.querySelector(".main");
  for (i = 0; i < contactList.length; i++) {
    let contactCard = createSingleIndex(contactList[i]);
    newList.appendChild(contactCard);
  }
};

// removes all of the DOM nodes that are unique to the View page
function cleanUpView() {
  let removeUniqueView = document.querySelectorAll(".contactinfo");
  for (i = 0; i < removeUniqueView.length; i++) {
    removeUniqueView[i].remove()
  }
};

// creates all of the DOM nodes that are unique to the View page
function renderView(contactList) {
  let viewPage = document.querySelector(".main");

  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contactinfo");
  viewPage.appendChild(contactInfo);

  const contactName = document.createElement("div");
  contactName.classList.add("contactname");
  contactName.textContent = contactList["name"];
  contactInfo.appendChild(contactName);

  const contactImg = document.createElement("img");
  contactImg.setAttribute("src", "./img/profile.jpg");
  contactImg.classList.add("profilepic");
  contactImg.setAttribute("alt", "Profile picture");
  contactName.appendChild(contactImg);

  const contactEmail = document.createElement("div");
  contactEmail.classList.add("contactemail");
  contactEmail.textContent = `email: ${contactList["email"]}`;
  contactInfo.appendChild(contactEmail);

  const contactPhone = document.createElement("div");
  contactPhone.classList.add("contactphone");
  contactPhone.textContent = `cell: ${contactList["phone"]}`;
  contactInfo.appendChild(contactPhone);

  const contactAddress = document.createElement("div");
  contactAddress.classList.add("contactaddress");
  contactAddress.textContent = `address: ${contactList["address"]}`;
  contactInfo.appendChild(contactAddress);

  const button = document.createElement("div")
  button.classList.add("buttons");
  contactInfo.appendChild(button);

  const editButton = document.createElement("button");
  editButton.classList.add("button", "edit");
  editButton.setAttribute("value", "Edit");
  editButton.textContent = "Edit";
  button.appendChild(editButton);

  const closeButton = document.createElement("button");
  closeButton.classList.add("button", "close");
  closeButton.setAttribute("value", "Close");
  closeButton.textContent = "Close";
  button.appendChild(closeButton);

};

// removes all of the DOM nodes that are unique to the Create page
function cleanUpCreate() {
  let removeCreatePage = document.querySelectorAll(".contactedit")
  for (i = 0; i < removeCreatePage.length; i++) {
    removeCreatePage[i].remove()
  }
};

//creates all of the DOM nodes that are unique to the Create page
function renderCreate(contactList) {
  let page = document.querySelector(".main");

  let createContact = document.createElement("div");
  createContact.classList.add("contactedit");
  page.appendChild(createContact);

  let image = document.createElement("div");
  image.classList.add("contactimg");
  createContact.appendChild(image);

  const contactImg = document.createElement("img");
  contactImg.setAttribute("src", "./img/profile.jpg");
  contactImg.setAttribute("class", "profilepic");
  contactImg.setAttribute("alt", "Profile picture");
  image.appendChild(contactImg);

  const contactForm = document.createElement("div");
  contactForm.classList.add("form");
  createContact.appendChild(contactForm);

  //Contact Name Field
  let container = document.createElement("div");
  container.classList.add("inputcontainer");
  contactForm.appendChild(container);


  const name = document.createElement("input");
  name.setAttribute("type", "text");
  name.setAttribute("id", "contactname");
  name.setAttribute("name", "contactname");
  name.setAttribute("placeholder", "Contact Name");
  container.appendChild(name);

  let nameButton = document.createElement("button");
  nameButton.classList.add("extrafield");
  nameButton.setAttribute("id", "extranamefield");
  nameButton.setAttribute("name", "extranamefield")
  nameButton.textContent = "+";
  container.appendChild(nameButton);

  //Phone Number Field
  let container2 = document.createElement("div");
  container2.classList.add("inputcontainer");
  contactForm.appendChild(container2);


  const phone = document.createElement("input");
  phone.classList.add("inputcontainer");
  phone.setAttribute("type", "tel");
  phone.setAttribute("id", "contactphone");
  phone.setAttribute("name", "contactphone");
  phone.setAttribute("placeholder", "Contact Phone");
  container2.appendChild(phone);

  let phoneButton = document.createElement("button");
  phoneButton.classList.add("extrafield");
  phoneButton.setAttribute("id", "extraphonefield");
  phoneButton.setAttribute("name", "extraphonefield")
  phoneButton.textContent = "+";
  container2.appendChild(phoneButton);

  //Address Field
  let container3 = document.createElement("div");
  container3.classList.add("inputcontainer");
  contactForm.appendChild(container3);

  const address = document.createElement("input");
  address.classList.add("inputcontainer");
  address.setAttribute("type", "text");
  address.setAttribute("id", "contactaddress");
  address.setAttribute("name", "contactaddress");
  address.setAttribute("placeholder", "Contact Address");
  container3.appendChild(address);

  let addressButton = document.createElement("button");
  addressButton.classList.add("extrafield");
  addressButton.setAttribute("id", "extraaddressfield");
  addressButton.setAttribute("name", "extraaddressfield")
  addressButton.textContent = "+";
  container3.appendChild(addressButton);

  //Email Field
  let container4 = document.createElement("div");
  container4.classList.add("inputcontainer");
  contactForm.appendChild(container4);

  const email = document.createElement("input");
  email.classList.add("inputcontainer");
  email.setAttribute("type", "email");
  email.setAttribute("id", "contactemail");
  email.setAttribute("name", "contactemail");
  email.setAttribute("placeholder", "Contact Email");
  container4.appendChild(email);

  let emailButton = document.createElement("button");
  emailButton.classList.add("extrafield");
  emailButton.setAttribute("id", "extraemailfield");
  emailButton.setAttribute("name", "extraemailfield")
  emailButton.textContent = "+";
  container4.appendChild(emailButton);

  const button = document.createElement("div")
  button.classList.add("buttons");
  contactForm.appendChild(button);

  //Submit and Cancel Button

  const submitButton = document.createElement("button");
  submitButton.classList.add("button", "save");
  submitButton.setAttribute("value", "Edit");
  submitButton.textContent = "Save Contact";
  button.appendChild(submitButton);

  const resetButton = document.createElement("button");
  resetButton.classList.add("button", "cancel");
  resetButton.setAttribute("id", "cancel");
  resetButton.setAttribute("name", "cancel");
  resetButton.textContent = "Cancel";
  button.appendChild(resetButton);

  console.log(page)
}