/* I have added comments for OOPs concepts usage. This is a basic js file for the project we can
enhance this more to properly simulate all the functionality. */

const initialData = {
  "Big Cats": [
      { name: "Tiger", size: 10, location: "Asia", imageUrl: "./images/tiger.jpg" },
      { name: "Lion", size: 8, location: "Africa", imageUrl:"./images/lion.jpg" },
      { name:"Leopard", size :5 , location :"Africa and Asia", imageUrl:"./images/leopard.jpg"},
      { name:"Cheetah", size :5 , location :"Africa", imageUrl:"./images/cheetah.jpg"},
      { name:"Caracal", size :3 , location :"Africa", imageUrl:"./images/caracal.jpg"},
      { name:"Jaguar", size :5 , location :"Amazon", imageUrl:"./images/jaguar.jpg"}
  ],
  "Dogs": [
      { name:"Rottweiler", size :2 , location :"Germany", imageUrl:"./images/rottweiler.jpg"},
      { name:"German Shepherd", size :2 , location :"Germany", imageUrl:"./images/german-shepherd.jpg"},
      { name:"Labrador", size :2 , location :"UK", imageUrl:"./images/labrador.jpg"},
      { name:"Alabai", size :4 , location :"Turkey", imageUrl:"./images/alabai.jpg"}
  ],
  "Big Fish": [
      { name:"Humpback Whale", size :15 , location :"Atlantic Ocean", imageUrl:"./images/humpback-whale.jpg"},
      { name:"Killer Whale", size :12 , location :"Atlantic Ocean", imageUrl:"./images/killer-whale.jpg"},
      { name:"Tiger Shark", size :8 , location :"Ocean", imageUrl:"./images/tiger-shark.jpg"},
      { name:"Hammerhead Shark", size :8 , location :"Ocean", imageUrl:"./images/hammerhead-shark.jpg"}
  ]
};

const tablesContainer = document.getElementById("tablesContainer");

// Encapsulation: Each table's rendering logic is encapsulated within this function
function createTable(species, animals) {
  const section = document.createElement("section");
  section.classList.add("my-5");

  const heading = document.createElement("h2");
  heading.textContent = species;
  section.appendChild(heading);

  const sortButtons = document.createElement("div");
  sortButtons.classList.add("mb-3");
  sortButtons.innerHTML = `
     ${species === 'Big Cats' ? `
     <button class='sort-button' onclick='sortAnimals("${species}", "name")'>Sort by Name</button>
     <button class='sort-button' onclick='sortAnimals("${species}", "size")'>Sort by Size</button>
     <button class='sort-button' onclick='sortAnimals("${species}", "location")'>Sort by Location</button>` : ''}
     ${species === 'Dogs' ? `
     <button class='sort-button' onclick='sortAnimals("${species}", "name")'>Sort by Name</button>
     <button class='sort-button' onclick='sortAnimals("${species}", "location")'>Sort by Location</button>` : ''}
     ${species === 'Big Fish' ? `
     <button class='sort-button' onclick='sortAnimals("${species}", "size")'>Sort by Size</button>` : ''}
  `;
  section.appendChild(sortButtons);

  const table = document.createElement("table");
  table.classList.add("table", "table-bordered");

  const thead = document.createElement("thead");
  thead.innerHTML = `
     <tr>
        <th>Name</th>
        <th>Size (ft)</th>
        <th>Location</th>
        <th>Image</th>
        <th>Action</th>
     </tr>`;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  animals.forEach((animal) => {
     const row = document.createElement("tr");
     row.innerHTML = `
        <td class="${
            species === 'Dogs' 
              ? 'bold' 
              : species === 'Big Fish' 
                ? 'blue-italic bold' 
                : ''}">
            ${animal.name}
        </td>
        <td>${animal.size}</td>
        <td>${animal.location}</td>
        <td><img src="${animal.imageUrl}" alt="${animal.name}"></td>
        <td>
           <button class='action-button' onclick='editAnimal("${species}", "${animal.name}")'>Edit</button>
           <button class='action-button delete' onclick='deleteAnimal("${species}", "${animal.name}")'>Delete</button>
        </td>`;
     tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  section.appendChild(table);
  tablesContainer.appendChild(section);
}

function renderTables() {
  tablesContainer.innerHTML = "";
  for (const [species, animals] of Object.entries(initialData)) {
     if (animals.length > 0) {
        createTable(species, animals);
     }
  }
}

/**
 * Event listener for form submission.
 * Handles adding new animals with validation.
 */
document.getElementById("animalForm").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const species = document.getElementById("species").value.trim();
  const name = document.getElementById("name").value.trim();
  const size = parseInt(document.getElementById("size").value.trim());
  const location = document.getElementById("location").value.trim();
  const imageUrl = document.getElementById("imageUrl").value.trim() || "./images/default.jpg";
  
  if (!species || !name || !size || !location) {
    alert("All fields are required!");
    return;
  }

  if (size <= 0) {
    alert("Size must be a positive number!");
    return;
  }

  if (initialData[species] && initialData[species].some(animal => animal.name.toLowerCase() === name.toLowerCase())) {
    alert(`An animal named "${name}" already exists in the "${species}" category.`);
    return;
  }

  if (!initialData[species]) {
    initialData[species] = [];
  }
  
  initialData[species].push({ name, size, location, imageUrl });
  renderTables();

  e.target.reset();
});

function deleteAnimal(species, name) {
  initialData[species] = initialData[species].filter(animal => animal.name !== name);
  
  if (initialData[species].length === 0) {
     delete initialData[species];
  }
  
  renderTables();
}

function editAnimal(species, oldName) {
  const animalIndex = initialData[species].findIndex(animal => animal.name === oldName);
  
  if (animalIndex !== -1) {
    const animal = initialData[species][animalIndex];

    const newName = prompt("Edit Name:", animal.name);
    const newSize = prompt("Edit Size:", animal.size);
    const newLocation = prompt("Edit Location:", animal.location);
    const newImageUrl = prompt("Edit Image URL:", animal.imageUrl) || "./images/default.jpg";

    if (!newName || !newSize || !newLocation) {
      alert("All fields are required!");
      return;
    }

    const sizeAsNumber = Number(newSize);
    if (sizeAsNumber <= 0 || isNaN(sizeAsNumber)) {
      alert("Size must be a positive number!");
      return;
    }

    if (
      initialData[species].some(
        (animal, index) =>
          index !== animalIndex && animal.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      alert(`An animal named "${newName}" already exists in the "${species}" category.`);
      return;
    }

    initialData[species][animalIndex] = {
      name: newName,
      size: sizeAsNumber,
      location: newLocation,
      imageUrl: newImageUrl,
    };

    renderTables();
  }
}

function sortAnimals(species, key) {
    if (key === 'size') {
       initialData[species].sort((a, b) => a.size - b.size);
    } else { 
       initialData[species].sort((a, b) => a[key].localeCompare(b[key]));
    }
    
    renderTables();
}

renderTables();
