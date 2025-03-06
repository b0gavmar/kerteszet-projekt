import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePlantStore = defineStore('plant', () => {
  const plants = ref({})

  const fetchPlants = async () => {
    try {
      const response = await axios.get('http://localhost:3000/plants')
      plants.value = response.data
    } catch (err) {
      console.log(err)
    }
  }

  const addPlant = async (newPlant) => {
    try {
      await axios.post('http://localhost:3000/plants', newPlant)
    } catch (err) {
      console.log(err)
    }
  }

  const updatePlant = async (updatedPlant) => {
    try {
      console.log(updatedPlant.id)
      await axios.put(`http://localhost:3000/plants/${updatedPlant.id}`, updatedPlant)
    } catch (err) {
      console.log(err)
    }
  }

  const deletePlant = async (plantId) => {
    try {
      await axios.delete(`http://localhost:3000/plants/${plantId}`)
    } catch (err) {
      console.log(err)
    }
  }

  return { plants, fetchPlants, addPlant, updatePlant, deletePlant }
})
