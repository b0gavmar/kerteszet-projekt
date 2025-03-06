<script setup>
import { ref} from 'vue'
import { usePlantStore } from '@/stores/plant.js'
import {useRouter} from 'vue-router'

const router = useRouter()
const plantStore = usePlantStore()

const newPlant = ref({
  name: '',
  perennial: 0,
  category: '',
  price: '',
})

const isValid = ref(true)

const perennial = ref(false)

const addNewPlant = async () => {
  newPlant.value.perennial = perennial
  if (
    newPlant.value.name.trim() == '' ||
    newPlant.value.category.trim() == '' ||
    newPlant.value.price.trim() == ''
  ) {
    isValid.value = false
    return
  } else {
    await plantStore.addPlant(newPlant.value)
    await router.push('/')
  }
}
</script>

<template>
  <main class="container mt-4 mb-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6 bg-dark text-white p-4 rounded shadow">
        <h2 class="text-center mb-4">Új növény hozzáadása</h2>

        <div class="mb-3">
          <label class="form-label">Név:</label>
          <input
            type="text"
            v-model="newPlant.name"
            class="form-control"
            placeholder="Adja meg a növény nevét"
            required
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Kategória:</label>
          <select v-model="newPlant.category" class="form-select">
            <option value="virág">virág</option>
            <option value="bokor">bokor</option>
            <option value="fa">fa</option>
          </select>
        </div>

        <div class="mb-3 form-check">
          <label class="form-check-label" for="perennialCheckbox">Évelő?</label>
          <input
            type="checkbox"
            v-model="newPlant.perennial"
            class="form-check-input"
            id="perennialCheckbox"
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Ár:</label>
          <input
            type="text"
            v-model="newPlant.price"
            class="form-control"
            placeholder="Adja meg az árát"
            required
          />
        </div>

        <button class="btn btn-success w-100 mt-3" @click="addNewPlant">Mentés</button>
      </div>
    </div>
  </main>
</template>
