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

  return { plants, fetchPlants }
})
