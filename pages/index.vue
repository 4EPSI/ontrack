<template>
  <header class="sticky top-0 z-20 flex items-center justify-between border-b bg-white p-3">
    <nuxt-link to="/">
      <img class="h-9" src="../assets/img/logo.png" alt="Logo">
    </nuxt-link>

    <nuxt-link to="#" class="text-sm">
      <div v-if="true" class="flex items-center gap-1">
        Day complete!
        <CheckCircleIcon class="h-7 text-green-500" />
      </div>

      <div v-else class="flex items-center gap-1">
        <div>Progress: <span class="font-mono">20%</span></div>
        <div class="h-3 w-3 rounded-full bg-red-500"></div>
      </div>
    </nuxt-link>
  </header>

  <main class="flex flex-grow flex-col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sit, laborum voluptatibus, aliquid aut dolores animi ducimus ex labore quisquam porro cumque culpa officiis reprehenderit enim accusantium alias? Porro, numquam!
  Iste alias ullam quisquam. Aspernatur quod modi numquam exercitationem expedita, sequi similique nemo id ipsum asperiores. Similique reprehenderit, officia exercitationem quaerat odio eaque, voluptate perspiciatis ex, dignissimos sit corrupti dolores.
  Maiores officia illum, adipisci culpa molestiae non, quae excepturi est quos quia perferendis vero nam unde, voluptatum sint accusantium. Architecto doloremque quo aliquam alias ut sed in vel impedit consectetur.
  Rem animi porro consequatur nam sit minima pariatur reiciendis vitae? Quibusdam atque sint odio ipsum hic ut rem nostrum? Ut fuga, quo perspiciatis sapiente sunt minus qui error necessitatibus nisi!
  Commodi ea eligendi, porro qui provident ad impedit. Illo magnam quam cupiditate ullam laboriosam reprehenderit blanditiis, tempora perspiciatis, esse laudantium omnis ipsa similique voluptatibus itaque nostrum aperiam rerum nisi quas.
  Eaque culpa sapiente enim doloribus maiores voluptate, beatae eos iusto ducimus, quas tempore quidem voluptatem neque, aliquam odio. Accusantium officiis cumque voluptatem. Reiciendis voluptates ex totam et eius ipsa nisi.
  Alias, voluptates totam dolor unde inventore et harum fugit molestiae quisquam doloremque sed tempore nisi sit tempora cum laboriosam quia itaque quos voluptatum, mollitia maxime laborum? Eum doloremque non voluptatum!
  Modi quos ad quibusdam, quae vitae perferendis esse repellat, minus rerum officiis deleniti molestias eum architecto earum libero eos cum placeat soluta amet a corporis cupiditate nihil molestiae. Enim, at.
  Sapiente necessitatibus quia dicta. Repudiandae quidem nemo sit, dolore, a aperiam voluptate, facilis in numquam libero eius error deleniti vitae ad quam neque vel ratione ullam. Sunt, alias! Officiis, quae.
  Cupiditate eos facere fugit voluptate unde, inventore dolorum veritatis necessitatibus, doloribus magni sapiente reiciendis autem delectus numquam deserunt animi magnam ratione eius, nisi nemo veniam. Iste cupiditate repellendus odio vero.</main>

  <nav class="sticky bottom-0 z-10 bg-white">
    <ul class="flex items-center justify-around border-t">
      <li v-for="icon, page in navItems" :key="page" class="flex-1">
        <nuxt-link :to="`#${page}`" class="flex flex-col items-center p-2 text-xs capitalize">
          <component :is="icon" class="h-6 w-6" /> {{ page }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>


<script setup>
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { ClockIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/outline'

const navItems = {
  timline: ClockIcon,
  activites: ListBulletIcon,
  progress: ChartBarIcon
}
</script>