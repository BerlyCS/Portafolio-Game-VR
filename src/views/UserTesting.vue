<script setup>
import NavBar from '../components/NavBar.vue'
import ForestBackground from '../components/ForestBackground.vue'
import {
  gameVersion,
  userTests,
  demoId,
  drivePreview,
  driveView,
  findings,
  feedbackFor,
} from '../data/userTests'
import {
  Play,
  ExternalLink,
  ClipboardCheck,
  Users,
  Gamepad2,
  Calendar,
} from 'lucide-vue-next'

const meta = [
  { icon: Gamepad2, label: 'Versión', value: gameVersion.version },
  { icon: ClipboardCheck, label: 'Build', value: gameVersion.build },
  { icon: Users, label: 'Plataforma', value: gameVersion.platform },
  { icon: Calendar, label: 'Fecha', value: gameVersion.date },
]
</script>

<template>
  <div class="relative min-h-screen bg-slate-950 overflow-x-hidden">
    <ForestBackground />
    <NavBar />

    <main class="relative z-10 pt-32 pb-24">
      <!-- Encabezado -->
      <section class="max-w-7xl mx-auto px-6 mb-16">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full
                      bg-slate-900/80 border border-orange-500/40 backdrop-blur-md">
            <ClipboardCheck class="w-4 h-4 text-orange-400" />
            <span class="text-xs text-orange-200 font-semibold tracking-wide uppercase">
              Evidencia de HCI
            </span>
          </div>
          <h1 class="text-5xl md:text-7xl font-black text-slate-100 tracking-tight mb-4">
            Pruebas de Usuario
          </h1>
          <p class="text-lg text-slate-400 leading-relaxed">
            Evaluación de la jugabilidad y la experiencia en VR. Aquí se documenta la
            retroalimentación de cada participante, la versión del juego utilizada y las
            mejoras identificadas durante las sesiones de prueba.
          </p>
        </div>
      </section>

      <!-- Info de versión -->
      <section class="max-w-7xl mx-auto px-6 mb-16">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="m in meta"
            :key="m.label"
            class="p-4 rounded-xl bg-slate-900/60 border border-slate-800"
          >
            <div class="flex items-center gap-2 mb-2">
              <component :is="m.icon" class="w-4 h-4 text-orange-400" />
              <p class="text-[10px] text-slate-500 uppercase tracking-widest">{{ m.label }}</p>
            </div>
            <p class="text-sm font-bold text-slate-100">{{ m.value }}</p>
          </div>
        </div>
      </section>

      <!-- Demo -->
      <section class="max-w-7xl mx-auto px-6 mb-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl md:text-5xl font-black text-slate-100 tracking-tighter mb-4 leading-none">
              Demo del juego
            </h2>
            <p class="text-slate-400 leading-relaxed mb-6">
              Versión jugable utilizada como base durante las pruebas de usuario.
            </p>
            <a
              :href="driveView(demoId)"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full
                     bg-orange-500 hover:bg-orange-400 text-slate-950
                     font-bold transition shadow-[0_0_30px_rgba(249,115,22,0.4)]"
            >
              <Play class="w-4 h-4" />
              Ver demo en Drive
            </a>
          </div>

          <div class="relative aspect-video rounded-3xl overflow-hidden
                      bg-slate-900 border border-slate-800
                      shadow-[0_0_60px_rgba(6,182,212,0.15)]">
            <iframe
              :src="drivePreview(demoId)"
              class="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>

      <!-- Hallazgos -->
      <section class="max-w-7xl mx-auto px-6 mb-24">
        <div class="flex items-center gap-3 mb-10">
          <ClipboardCheck class="w-6 h-6 text-orange-400" />
          <h2 class="text-3xl md:text-4xl font-black text-slate-100 tracking-tight">
            Hallazgos
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div
            v-for="(f, i) in findings"
            :key="i"
            class="p-5 rounded-2xl bg-slate-900/50 border border-slate-800
                   hover:border-orange-500/50 transition"
          >
            <p class="text-sm text-slate-200 mb-3">{{ f.text }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="id in f.users"
                :key="id"
                class="px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30
                       text-[10px] font-bold text-orange-400 uppercase tracking-wide"
              >
                {{ userTests.find((u) => u.id === id)?.name || `Usuario ${id}` }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Tests de usuarios -->
      <section class="max-w-7xl mx-auto px-6">
        <div class="flex items-center gap-3 mb-10">
          <Users class="w-6 h-6 text-orange-400" />
          <h2 class="text-3xl md:text-4xl font-black text-slate-100 tracking-tight">
            Participantes ({{ userTests.length }})
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <article
            v-for="test in userTests"
            :key="test.id"
            class="rounded-2xl bg-slate-900/70 backdrop-blur-md border border-slate-800
                   overflow-hidden hover:border-orange-500/50 transition-all duration-500"
          >
            <div class="relative aspect-video bg-slate-950">
              <iframe
                :src="drivePreview(test.videoId)"
                class="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></iframe>
            </div>

            <div class="p-6">
              <div class="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800
                              flex items-center justify-center">
                    <Users class="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-slate-100 leading-tight">
                      {{ test.name }}
                    </h3>
                  </div>
                </div>
                <span class="px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30
                             text-[10px] font-bold text-orange-400 uppercase tracking-wide">
                  {{ test.version }}
                </span>
              </div>

              <div class="mb-4">
                <h4 class="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2">
                  Retroalimentación
                </h4>
                <ul class="space-y-1.5 text-sm text-slate-300">
                  <li
                    v-for="(f, i) in feedbackFor(test.id)"
                    :key="i"
                    class="flex items-start gap-2"
                  >
                    <span class="text-orange-500 mt-1 shrink-0">▸</span>
                    <span>{{ f }}</span>
                  </li>
                </ul>
              </div>

              <a
                :href="driveView(test.videoId)"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 text-xs font-semibold
                       text-orange-400 hover:text-orange-300 transition"
              >
                <ExternalLink class="w-3.5 h-3.5" />
                Ver video completo
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>
