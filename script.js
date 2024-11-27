// Class to represent an animal
class Animal {
  constructor(species, name, size, location, image) {
    this.species = species;
    this.name = name;
    this.size = size;
    this.location = location;
    this.image = image;
  }
}

// Class to manage animal tables
class AnimalTable {
  constructor(tableId, sortFields) {
    this.tableId = tableId; // ID of the table
    this.animals = []; // Store animal objects
    this.sortOrder = {}; // Track sort order for each field
    sortFields.forEach(field => this.sortOrder[field] = 'asc'); // Initialize sort order
    this.sortFields = sortFields; // Fields allowed for sorting
  }

  // Add an animal to the table
  addAnimal(animal) {
    if (!this.validateAnimal(animal)) return; // Validate animal
    if (this.animals.find(a => a.name.toLowerCase() === animal.name.toLowerCase())) {
      alert("Duplicate animal names are not allowed!");
      return;
    }
    this.animals.push(animal); // Add the animal
    this.render(); // Re-render the table
  }

  // Validate animal input
  validateAnimal(animal) {
    if (!animal.name || !animal.species || !animal.size || !animal.location) {
      alert("All fields are required!");
      return false;
    }
    if (isNaN(animal.size) || animal.size <= 0) {
      alert("Size must be a valid number greater than 0!");
      return false;
    }
    return true;
  }

  // Delete an animal by name
  deleteAnimal(name) {
    this.animals = this.animals.filter(a => a.name !== name);
    this.render(); // Re-render the table
  }

  // Edit an animal by name
  editAnimal(name) {
    const animal = this.animals.find(a => a.name === name);
    if (animal) {
      const newSpecies = prompt("Enter new species:", animal.species) || animal.species;
      const newName = prompt("Enter new name:", animal.name) || animal.name;
      const newSize = prompt("Enter new size (ft):", animal.size) || animal.size;
      const newLocation = prompt("Enter new location:", animal.location) || animal.location;

      // Validate changes
      if (isNaN(newSize) || newSize <= 0) {
        alert("Size must be a valid number greater than 0!");
        return;
      }

      // Update animal
      animal.species = newSpecies;
      animal.name = newName;
      animal.size = newSize;
      animal.location = newLocation;
      this.render();
    }
  }

  // Sort the animals based on a specific field
  sortBy(field) {
    if (!this.sortFields.includes(field)) return; // Skip sorting if field is not allowed
    const order = this.sortOrder[field];
    this.animals.sort((a, b) => {
      if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
      if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
      return 0;
    });
    this.sortOrder[field] = order === 'asc' ? 'desc' : 'asc'; // Toggle sort order
    this.render();
  }

  // Render the table
  render() {
    const table = document.getElementById(this.tableId);
    table.innerHTML = `
      <thead>
        <tr>
          ${Object.keys(this.animals[0] || {}).map(field => `
            <th>
              ${field.charAt(0).toUpperCase() + field.slice(1)}
              ${this.sortFields.includes(field) ? `<button onclick="${this.tableId}.sortBy('${field}')">Sort</button>` : ''}
            </th>`).join('')}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${this.animals.map(animal => `
          <tr>
            <td>${animal.species}</td>
            <td style="${this.getNameStyle()}">${animal.name}</td>
            <td>${animal.size}</td>
            <td>${animal.location}</td>
            <td>
              <img src="./images/${animal.image}" alt="${animal.name}" 
                style="width: 100px; height: auto; border: 2px solid black;" 
                onmouseover="this.style.transform='scale(1.5)';" 
                onmouseout="this.style.transform='scale(1)';">
            </td>
            <td>
              <button onclick="${this.tableId}.deleteAnimal('${animal.name}')">Delete</button>
              <button onclick="${this.tableId}.editAnimal('${animal.name}')">Edit</button>
            </td>
          </tr>`).join('')}
      </tbody>`;
  }

  // Get name style based on table type
  getNameStyle() {
    if (this.tableId === 'dogsTable') return 'font-weight: bold;';
    if (this.tableId === 'bigFishTable') return 'font-weight: bold; font-style: italic; color: blue;';
    return '';
  }
}

// Create table instances
const bigCatsTable = new AnimalTable("bigCatsTable", ["species", "name", "size", "location"]);
const dogsTable = new AnimalTable("dogsTable", ["name", "location"]);
const bigFishTable = new AnimalTable("bigFishTable", ["size"]);

// Add sample data for Big Cats
bigCatsTable.addAnimal(new Animal("Big Cats", "Tiger", 10, "Asia", "tiger.jpg"));
bigCatsTable.addAnimal(new Animal("Big Cats", "Lion", 8, "Africa", "lion.jpg"));
bigCatsTable.addAnimal(new Animal("Big Cats", "Leopard", 5, "Africa and Asia", "leopard.jpg"));
bigCatsTable.addAnimal(new Animal("Big Cats", "Cheetah", 5, "Africa", "cheetah.jpg"));
bigCatsTable.addAnimal(new Animal("Big Cats", "Caracal", 3, "Africa", "caracal.jpg"));
bigCatsTable.addAnimal(new Animal("Big Cats", "Jaguar", 5, "Amazon", "jaguar.jpg"));

// Add sample data for Dogs
dogsTable.addAnimal(new Animal("Dog", "Rottweiler", 2, "Germany", "rottweiler.jpg"));
dogsTable.addAnimal(new Animal("Dog", "German Shepherd", 2, "Germany", "german-shepherd.jpg"));
dogsTable.addAnimal(new Animal("Dog", "Labrador", 2, "UK", "labrador.jpg"));
dogsTable.addAnimal(new Animal("Dog", "Alabai", 4, "Turkey", "alabai.jpg"));

// Add sample data for Big Fish
bigFishTable.addAnimal(new Animal("Big Fish", "Humpback Whale", 15, "Atlantic Ocean", "humpback-whale.jpg"));
bigFishTable.addAnimal(new Animal("Big Fish", "Killer Whale", 12, "Atlantic Ocean", "killer-whale.jpg"));
bigFishTable.addAnimal(new Animal("Big Fish", "Tiger Shark", 8, "Ocean", "tiger-shark.jpg"));
bigFishTable.addAnimal(new Animal("Big Fish", "Hammerhead Shark", 8, "Ocean", "hammerhead-shark.jpg"));

// Expose tables globally for sorting
window.bigCatsTable = bigCatsTable;
window.dogsTable = dogsTable;
window.bigFishTable = bigFishTable;
