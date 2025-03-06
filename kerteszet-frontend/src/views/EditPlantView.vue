<script setup>
import { ref, onMounted, toRaw } from 'vue'
import { usePlantStore } from '@/stores/plant.js'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const plantStore = usePlantStore()

const currentPlant = ref({
  id: route.params.id,
  name: '',
  perennial: 0,
  category: '',
  price: '',
})

const isValid = ref(true)

const perennial = ref(0)

const updatePlant = async () => {
  currentPlant.value.perennial = perennial.value
  if (
    currentPlant.value.name.trim() == '' ||
    currentPlant.value.category.trim() == '' ||
    isNaN(currentPlant.value.price)
  ) {
    isValid.value = false
  } else {
    console.log(toRaw(currentPlant.value))
    await plantStore.updatePlant(toRaw(currentPlant.value))
    await router.push('/')
  }
}

const deletePlant = async () => {
  await plantStore.deletePlant(currentPlant.value.id)
  await router.push('/')
}

onMounted(async () => {
  await plantStore.fetchPlants()
  const foundPlant = plantStore.plants.find((p) => p.id == route.params.id)

  if (foundPlant) {
    currentPlant.value = { ...foundPlant }
  }

  perennial.value = currentPlant.value.perennial
})
</script>

<template>
  <main class="container mt-4 mb-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 bg-dark text-white p-4 rounded shadow">
        <h2 class="text-center mb-4">Növény szerkesztése</h2>

        <div class="mb-3">
          <label class="form-label">Név:</label>
          <input
            type="text"
            v-model="currentPlant.name"
            class="form-control"
            placeholder="Adja meg a növény nevét"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Kategória:</label>
          <select v-model="currentPlant.category" class="form-select">
            <option value="virág">virág</option>
            <option value="bokor">bokor</option>
            <option value="fa">fa</option>
          </select>
        </div>

        <div class="mb-3 form-check">
          <label class="form-check-label" for="perennialCheckbox">Évelő?</label>
          <input
            type="checkbox"
            v-model="currentPlant.perennial"
            class="form-check-input"
            id="perennialCheckbox"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Ár:</label>
          <input
            type="text"
            v-model="currentPlant.price"
            class="form-control"
            placeholder="Adja meg az árát"
            required
          />
        </div>

        <button class="btn btn-success w-100 mt-3" @click="updatePlant()">Mentés</button>
        <button class="btn btn-danger w-100 mt-3" @click="deletePlant()">Törlés</button>
      </div>
    </div>
  </main>
</template>
