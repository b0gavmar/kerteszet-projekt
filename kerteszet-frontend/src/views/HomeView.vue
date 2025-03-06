<script setup>
import { usePlantStore } from '@/stores/plant.js'
import { onMounted } from 'vue'

const plantStore = usePlantStore()

onMounted(async () => {
  await plantStore.fetchPlants()
})
</script>

<template>
  <main class="container mt-4 mb-4">
    <div v-if="plantStore.plants.length > 0" class="row justify-content-center gap-3">
      <div v-for="plant in plantStore.plants" :key="plant.id" class="col-12 col-md-4 col-lg-4">
        <div class="card bg-dark text-white shadow-lg">
          <div class="card-body">
            <h5 class="card-title">{{ plant.name }}</h5>
            <p class="card-text">
              <strong>Évelő?</strong> {{ plant.perennial ? 'Igen' : 'Nem' }}<br />
              <strong>Kategória:</strong> {{ plant.category }} <br />
              <strong>Ár:</strong> {{ plant.price }}
            </p>
            <button class="btn btn-primary w-100" @click="">
              Szerkesztés
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-white mt-4">
      <p>Nincsenek növények.</p>
    </div>
  </main>
</template>
