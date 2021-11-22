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