// Kartdata per steg. Koordinater er [lengdegrad, breddegrad].
// Rutene er SKJEMATISKE – de viser retning og omtrentlig område, ikke eksakte stier.
// Hver rute har [fra, til] = andel av stegets scroll der den tegnes.
window.MIGRATION_STEPS = {
  1: {
    center: [25, 25], // [lon, lat] globusen roteres til
    zoom: 1.35,
    routes: [
      { id: 'afrika-levant', draw: [0.15, 0.45], label: null,
        coords: [[38, 8], [39, 15], [34, 28], [35.5, 32.5]] },
      { id: 'levant-europa', draw: [0.45, 0.75], label: null,
        coords: [[35.5, 32.5], [30, 39], [24, 42], [17, 47], [12.5, 50.3]] },
      { id: 'levant-asia', draw: [0.45, 0.8], label: null,
        coords: [[35.5, 32.5], [48, 30], [60, 26], [78, 22], [92, 24], [105, 25]] }
    ],
    points: [
      { name: 'Jebel Irhoud (~300 000 år)', at: [-8.87, 31.85], show: 0 },
      { name: 'Øst-Afrika', at: [38, 8], show: 0.1 },
      { name: 'Ranis / Zlatý kůň (~45 000 år)', at: [12.5, 50.3], show: 0.7 }
    ]
  },
  2: {
    center: [72, 56],
    zoom: 1.9,
    routes: [
      { id: 'lena-altaj', draw: [0.1, 0.35], kind: 'gene',
        coords: [[129.7, 62], [118, 58], [104, 53], [89, 51]] },
      { id: 'altaj-vestsibir', draw: [0.3, 0.45], kind: 'gene',
        coords: [[89, 51], [80, 54], [73.4, 55.3]] },
      { id: 'vestsibir-volga', draw: [0.45, 0.65], kind: 'gene',
        coords: [[73.4, 55.3], [62, 56.5], [50, 55.5]] },
      { id: 'volga-karelen', draw: [0.6, 0.8], kind: 'gene',
        coords: [[50, 55.5], [42, 59], [34, 62.5]] }
    ],
    points: [
      { name: 'Lena-elva (~4000 år)', at: [129.7, 62], show: 0.05 },
      { name: 'Altaj–Sajan', at: [89, 51], show: 0.3 },
      { name: 'Seima-Turbino (Vest-Sibir)', at: [73.4, 55.3], show: 0.42 },
      { name: 'Midt-Volga', at: [50, 55.5], show: 0.6 },
      { name: 'Karelen (~3500 år)', at: [34, 62.5], show: 0.78 }
    ]
  },
  3: {
    center: [30, 64],
    zoom: 3.6,
    routes: [
      { id: 'skandinavia-sor', draw: [0.05, 0.3],
        coords: [[9, 54], [10, 56.5], [12, 58], [10.5, 59.8]] },
      { id: 'skandinavia-nordost', draw: [0.05, 0.4],
        coords: [[40, 64], [37, 67.5], [32, 69.5], [26, 71], [19, 70], [14, 68], [12, 66], [10.5, 64]] },
      { id: 'sibir', draw: [0.35, 0.65], kind: 'gene',
        coords: [[62, 63.5], [54, 65], [45, 67.5], [35, 69]] },
      { id: 'samisk-nord', draw: [0.65, 0.95], kind: 'language',
        coords: [[29, 61.8], [27.5, 65], [25.5, 68.5]] },
      { id: 'samisk-vest', draw: [0.65, 0.95], kind: 'language',
        coords: [[29, 61.8], [24, 63], [18.5, 63.8], [14, 64]] }
    ],
    points: [
      { name: 'Kola (≥3500 år)', at: [35, 69], show: 0.6 },
      { name: 'Fra Sibir', at: [62, 63.5], show: 0.35 },
      { name: 'Midt-Skandinavia (~500 e.Kr.)', at: [14, 64], show: 0.9 }
    ]
  },
  4: {
    center: [-60, 68],
    zoom: 1.6,
    routes: [],
    points: []
  }
};
