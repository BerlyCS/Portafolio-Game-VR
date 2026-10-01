const DRIVE_FILE = 'https://drive.google.com/file/d/'

export const driveView = (id) => `${DRIVE_FILE}${id}/view`
export const drivePreview = (id) => `${DRIVE_FILE}${id}/preview`

export const gameVersion = {
  version: 'v1.2',
  build: 'Unity',
  platform: 'Meta Quest 2',
  date: '1 de octubre 2026',
}

export const demoId = '13-U1Au-MNubrSuIcMGVr_beGiy4jpUjM'

export const userTests = [
  {
    id: 1,
    name: 'Usuario 1',
    version: 'v1.0',
    videoId: '1ad2_ZQyGAgiz7AGkXsOzQ6I1RxuY3X4c',
  },
  {
    id: 2,
    name: 'Usuario 2',
    version: 'v1.0',
    videoId: '1_q537R7HC63kxGU3D-uhZ89LSgg4mCb2',
  },
  {
    id: 3,
    name: 'Usuario 3',
    version: 'v1.1',
    videoId: '13x6Ljjc4jJqTsGcS-GBISEaXY1OQzFOB',
  },
  {
    id: 4,
    name: 'Usuario 4',
    version: 'v1.2',
    videoId: '1c6S0tekmfK7yxoxbgo5ahCo5Vqb9OC4w',
  },
  {
    id: 5,
    name: 'Usuario 5',
    version: 'v1.2',
    videoId: '13GOFDFYGGUalEIQCprwSvFcJ3Y-VYVeu',
  },
]

export const findings = [
  { text: 'Encontró útil la espada', users: [1, 2] },
  { text: 'Tuvo problemas con la alimentación del fuego', users: [1, 2, 4] },
  { text: 'Entendió la mecánica del arco', users: [1, 2, 3, 5] },
  { text: 'Le sorprendió la mecánica del boss', users: [4, 5] },
  { text: 'Encontró naturales los gestos del arco', users: [1, 3, 4, 5] },
  { text: 'Logró completar el juego', users: [5] },
  { text: 'Tuvo dificultades de hand-tracking al usar el arco', users: [1, 2] },
  { text: 'Reportó errores al usar el hacha con la mano derecha', users: [2, 4] },
  { text: 'Destacó la ambientación y la atmósfera del entorno', users: [3, 5] },
]

export const feedbackFor = (id) =>
  findings.filter((f) => f.users.includes(id)).map((f) => f.text)
