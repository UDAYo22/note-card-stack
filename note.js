// // ALL VARIABLES AND DOC SELECTIONS

// let addNote = document.querySelector("#add-note");
// let formContainer = document.querySelector(".form-container");
// let closeForm = document.querySelector(".closeForm");

// const stack = document.querySelector(".stack");
// const upBtn = document.querySelector("#upBtn");
// const downBtn = document.querySelector("#downBtn");

// const form = document.querySelector("form");

// const imageUrlInput = form.querySelector(
//   "input[placeholder='https://example.com/photo.jpg']"
// );
// const fullNameInput = form.querySelector(
//   "input[placeholder='Enter full name']"
// );
// const homeTownInput = form.querySelector(
//   "input[placeholder='Enter home town']"
// );
// const purposeInput = form.querySelector(
//   "input[placeholder='e.g., Quick appointment note']"
// );

// const categoryRadios = form.querySelectorAll("input[name='category']");

// const submitButton = form.querySelector(".submit-btn");

// // CODE STARTS HERE

// function saveToLocalStorage(obj) {
//   if (localStorage.getItem("tasks") === null) {
//     let oldTasks = [];
//     oldTasks.push(obj);
//     localStorage.setItem("tasks", JSON.stringify(oldTasks));
//   } else {
//     let oldTasks = localStorage.getItem("tasks");
//     oldTasks = JSON.parse(oldTasks);
//     oldTasks.push(obj);
//     localStorage.setItem("tasks", JSON.stringify(oldTasks));
//   }
// }

// addNote.addEventListener("click", function () {
//   formContainer.style.display = "initial";
// });

// closeForm.addEventListener("click", function () {
//   formContainer.style.display = "none";
// });

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   const imageUrl = imageUrlInput.value.trim();
//   const fullName = fullNameInput.value.trim();
//   const homeTown = homeTownInput.value.trim();
//   const purpose = purposeInput.value.trim();

//   let selected = false;
//   categoryRadios.forEach(function (cat) {
//     if (cat.checked) {
//       selected = cat.value;
//     }
//   });

//   if (imageUrl === "") {
//     alert("Please enter an Image URL.");
//     return;
//   }

//   if (fullName === "") {
//     alert("Please enter your Full Name.");
//     return;
//   }

//   if (homeTown === "") {
//     alert("Please enter your Home Town.");
//     return;
//   }

//   if (purpose === "") {
//     alert("Please enter the Purpose.");
//     return;
//   }

//   if (!selected) {
//     alert("Please select a category");
//     return;
//   }

//   saveToLocalStorage({
//     imageUrl,
//     fullName,
//     purpose,
//     homeTown,
//     selected,
//   });

//   form.reset();
//   formContainer.style.display = "none";
//   showCards();
// });

// function showCards() {
//   stack.innerHTML = "";

//   let allTasks = JSON.parse(localStorage.getItem("tasks")); //array

//   allTasks.forEach(function (task) {
//     // Create card container
//     const card = document.createElement("div");
//     card.classList.add("card");

//     // Avatar image
//     const avatar = document.createElement("img");
//     avatar.src = task.imageUrl;
//     avatar.alt = "profile";
//     avatar.classList.add("avatar");
//     card.appendChild(avatar);

//     // Name
//     const name = document.createElement("h2");
//     name.textContent = task.fullName;
//     card.appendChild(name);

//     // Info: Home town
//     const hometownInfo = document.createElement("div");
//     hometownInfo.classList.add("info");

//     const hometownLabel = document.createElement("span");
//     hometownLabel.textContent = "Home town";
//     const hometownValue = document.createElement("span");
//     hometownValue.textContent = task.homeTown;

//     hometownInfo.appendChild(hometownLabel);
//     hometownInfo.appendChild(hometownValue);
//     card.appendChild(hometownInfo);

//     // Info: Bookings
//     const bookingsInfo = document.createElement("div");
//     bookingsInfo.classList.add("info");

//     const bookingsLabel = document.createElement("span");
//     bookingsLabel.textContent = "Purpose";
//     const bookingsValue = document.createElement("span");
//     bookingsValue.textContent = task.purpose;

//     bookingsInfo.appendChild(bookingsLabel);
//     bookingsInfo.appendChild(bookingsValue);
//     card.appendChild(bookingsInfo);

//     // Buttons container
//     const buttonsDiv = document.createElement("div");
//     buttonsDiv.classList.add("buttons");

//     // Call button
//     const callBtn = document.createElement("button");
//     callBtn.classList.add("call");
//     callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

//     // Message button
//     const msgBtn = document.createElement("button");
//     msgBtn.classList.add("msg");
//     msgBtn.textContent = "Message";

//     // Append buttons
//     buttonsDiv.appendChild(callBtn);
//     buttonsDiv.appendChild(msgBtn);

//     // Append buttonsDiv to card
//     card.appendChild(buttonsDiv);

//     // Finally, add the card to the DOM (for example, inside a container)
//     document.querySelector(".stack").appendChild(card); // or any container of your choice
//   });
// }
// showCards();

// function updateStack() {
//   const cards = document.querySelectorAll(".stack .card");

//   for (let i = 0; i < 3; i++) {
//     card.style.zIndex = 3 - i;
//     card.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
//     card.style.opacity = `${1 - i * 0.02}`;
//   }
// }

// upBtn.addEventListener("click", function () {
//   let lastChild = stack.lastElementChild;
//   if (lastChild) {
//     stack.insertBefore(lastChild, stack.firstElementChild);
//     // update
//     updateStack();
//   }
// });
// downBtn.addEventListener("click", function () {
//   const firstChild = stack.firstElementChild;
//   if (firstChild) {
//     stack.appendChild(firstChild);
//     // update
//     updateStack();
//   }
// });

// ALL DOC AND VARIABLE SELCTED

let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

const form = document.querySelector("form");

const imageUrlInput = form.querySelector('input[placeholder="https://example.com/photo.jpg"]');
const fullNameInput = form.querySelector('input[placeholder="Enter full name"]');
const homeTownInput = form.querySelector('input[placeholder="Enter home town"]');
const purposeInput = form.querySelector('input[placeholder="e.g., Quick appointment note"]');

const categoriesRadios = form.querySelectorAll('input[name="category"]');

const submitButton = form.querySelector(".submit-btn");

const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const stack = document.querySelector(".stack");



// CODE START FROM HERE

function saveToLocalStorage(obj) {
  if (localStorage.getItem("tasks") === null) {
    let oldTasks = [];
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  } else {
    let oldTasks = localStorage.getItem("tasks");
    oldTasks = JSON.parse(oldTasks);
    oldTasks.push(obj);
    localStorage.setItem("tasks", JSON.stringify(oldTasks));
  }
}

// function saveToLocalStorage(obj) {
//   if (localStorage.getItem("tasks") === null) {
//     let oldTasks = [];
//     oldTasks.push(obj);
//     localStorage.setItem("tasks", JSON.stringify(oldTasks));
//   } else {
//     let oldTasks = localStorage.getItem("tasks"); //jitna bhi phle se store item tha use fetch kiya
//     oldTasks = JSON.parse(oldTasks); // covert string -- js obj
//     oldTasks.push(obj); // oldtask obj me ek naya obj daal diya 
//     localStorage.setItem("tasks", JSON.stringify(oldTasks));
    
//     //   👉 What happens:
// // Create an empty ar
// // aaray → []
// // Add the new object → [obj]
// // Convert array to string using JSON.stringify
// // Save it in localStorage

// // 💡 Important:
// // localStorage can only store strings, so we convert array → string  
//   }
// }

addNote.addEventListener("click", function () {
  formContainer.style.display = "initial";
})

closeForm.addEventListener("click", function () {
  formContainer.style.display = "none";
})

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  //  trim()== se apn  input me space dalkar submit nhi kr skte
  const imageUrl = imageUrlInput.value.trim();
  const fullName = fullNameInput.value.trim();
  const homeTown = homeTownInput.value.trim();
  const purpose = purposeInput.value.trim();

  //  validation process
  if (imageUrl === "") {
    alert("please enter an image url");
  }

  if (fullName === "") {
    alert("please enter  your ull name");
  }

  if (homeTown === "") {
    alert("please enter your home town ");
  }

  if (purpose === "") {
    alert(" please enter the purpose")
  }

  // categoriesRadios

  let selected = false;
  categoriesRadios.forEach(function (cat) {
    if (cat.checked) {
      selected = cat.value;
    }
  })
  if (!selected) {
    alert("please select a categroy...")
  }

saveToLocalStorage({
  imageUrl: imageUrl,
  fullName: fullName,
  purpose: purpose,
  homeTown: homeTown,
  selected: selected
});

    form.reset();  
     showCards();  
});

function showCards(){

  stack.innerHTML = "";

  let allTasks = JSON.parse(localStorage.getItem("tasks"));
  if(!allTasks)  return;

  allTasks.forEach(function (task) {
    //create card container
    const card = document.createElement("div")
    card.classList.add("card");

    //avtar image
    const avatar = document.createElement("img")
  avatar.classList.add("avatar");
  avatar.src = task.imageUrl;
  avatar.alt = "profile";
  card.appendChild(avatar);

  //NAME
  const name = document.createElement("h2");
  name.textContent = task.fullName;
  card.appendChild(name);

  // info home town
   
 const hometownInfo = document.createElement("div");
 hometownInfo.classList.add("info");

 const hometownLabel = document.createElement("span");
 hometownLabel.textContent = "Home town";

 const hometownValue =  document.createElement("span");
 hometownValue.textContent = task.homeTown;
  
 hometownInfo.appendChild(hometownLabel);
 hometownInfo.appendChild(hometownValue);
 card.appendChild(hometownInfo);

// ifno: booking 
const bookingsInfo = document.createElement("div");
bookingsInfo.classList.add("info");

const bookingsLabel = document.createElement("span");
bookingsLabel.textContent = " write purpose";
const bookingsValue = document.createElement("span")
bookingsValue.textContent = task.purpose;

bookingsInfo.appendChild(bookingsLabel);
bookingsInfo.appendChild(bookingsValue);
card.appendChild(bookingsInfo);

//button container
const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttons");

// call button
const callBtn = document.createElement("button");
callBtn.classList.add("call");
callBtn.innerHTML = `<i class="re-phone-line"></i>call`;

//massage button 
const msgBtn = document.createElement("button");
msgBtn.classList.add("msg");
msgBtn.textContent = "Message";

// Append button
buttonsDiv.appendChild(callBtn);
buttonsDiv.appendChild(msgBtn);

//Append buttondiv to card
card.appendChild(buttonsDiv);

// Finally , add the card to the dom (for example , inside a container)
document.querySelector(".stack").appendChild(card);
});
updateStack();
}


showCards();
function updateStack (){
  const cards = document.querySelectorAll(".stack .card");
 
  cards.forEach(function(card, i) {
    if (i < 3) {
      card.style.zIndex = 3 - i;
      card.style.transform = `translateY(${i * 10}px) scale(${1 - i * 0.02})`;
      card.style.opacity = `${1 - i * 0.02}`;
    }
  });
}


upBtn.addEventListener("click" , function () {
  let lastChild =  stack.lastElementChild;
  if(lastChild){ 
    //👉 Checks: “Does a last item exist?” (safety check)
    stack.insertBefore(lastChild , stack.firstElementChild)
    //update
    updateStack();
  }
});

downBtn.addEventListener("click" , function() {
  const firstChild = stack.firstElementChild;
  if(firstChild) {
//👉 This moves the first element to the end
    stack.appendChild(firstChild);
    //update
    updateStack();
  }
});