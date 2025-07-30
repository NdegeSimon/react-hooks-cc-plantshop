import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(data => setPlants(data))
      .catch(error => console.error("Error fetching plants:", error));
  }, []);

  const addPlant = (newPlant) => {
    setPlants(prevPlants => [...prevPlants, newPlant]);
  };

  const updatePlant = (updatedPlant) => {
    setPlants(prevPlants => 
      prevPlants.map(plant => 
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  };

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={filteredPlants} onUpdatePlant={updatePlant} />
    </main>
  );
}

export default PlantPage;
