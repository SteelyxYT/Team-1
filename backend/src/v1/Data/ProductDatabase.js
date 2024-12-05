let objects = [
    {
        id: 0,
        name: "Test",
        price: 50,
        description: "test produkt",
        stock: 20,
        image: null
    }
];

// Get all objects
const getAllObjects = () => {
    return [...objects];
}

// Add object
const addObject = (object) => {
    const id = objects.length ? objects[objects.length - 1].id + 1 : 1; // Ensure the ID is unique by checking the length of the movies array
    const newObject = { id, ...object };
    objects.push(newObject);
    return newObject;
}

// Get object by id
const getObjectById = (id) => {
    id = parseInt(id);
    if (isNaN(id)) return null; // Return null if id is not a number
    return objects.find((object) => object.id === id); // // Ensure the id is a number with parseInt
}
// Get object by name
const getObjectByName = (name) => {
    return objects.filter((object) => object.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())); // // Ensure the id is a number with parseInt
}

// Delete object by id
const deleteObjectById = (id) => {
    id = parseInt(id); // Ensure the ID is a number
    if (isNaN(id)) return false; // Handle invalid IDs

    // makes index = id of movie
    const index = objects.findIndex((object) => object.id === id);

    // Check if index is not -1/does not exist | if it does exist, delete it by splicing. Splicing removes the element at the specified index
    if (index !== -1) {
        objects.splice(index, 1);
        return true;
    }
    return false;
}

// Update object by id
const updateObjectById = (id, updatedObject) => {
    id = parseInt(id); // Ensure the ID is a number
    if (isNaN(id)) return false; // Handle invalid IDs

    // makes index = id of object | check if id/object exists | if it does, update it.
    const index = objects.findIndex((object) => object.id === id);
    if (index !== -1) {
        objects[index] = { ...objects[index], ...updatedObject };
        return objects[index];
    }
    return null;
}


module.exports = {
    getAllObjects,
    addObject,
    getObjectById,
    getObjectByName,
    deleteObjectById,
    updateObjectById
}