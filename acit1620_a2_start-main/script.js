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
}

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
}

//creates all of the DOM nodes that are unique to the Index page
function renderIndex(contactList) {
  let newList = document.querySelector(".main");
  for (i = 0; i < contactList.length; i++) {
    let contactCard = createSingleIndex(contactList[i]);
    newList.appendChild(contactCard);
  }
};


// function cleanUpView() {
//   let removeUniqueView = document.querySelectorAll("")
// }