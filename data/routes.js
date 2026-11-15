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
  3: {
    center: [-60, 68],
    zoom: 1.6,
    routes: [],
    points: []
  }
};
