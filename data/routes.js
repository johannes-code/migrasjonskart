// Kartdata per steg. Koordinater er [lengdegrad, breddegrad].
// Rutene er SKJEMATISKE – de viser retning og omtrentlig område, ikke eksakte stier.
// Hver rute har [fra, til] = andel av stegets scroll der den tegnes.
// Punkter vises fra `show` (og skjules igjen ved `hide`, om satt).
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
    center: [100, 65],
    zoom: 1.3,
    routes: [
      { id: 'ane-vest', draw: [0.55, 0.8], kind: 'ane',
        coords: [[103, 52.9], [85, 55], [65, 57], [45, 57], [25, 55]] },
      { id: 'ane-ost', draw: [0.35, 0.6], kind: 'ane',
        coords: [[103, 52.9], [120, 58], [145, 62], [165, 64], [-170, 66], [-155, 63]] }
    ],
    points: [
      { name: 'Yana (~31 000 år)', at: [135.4, 70.7], show: 0.05 },
      { name: "Mal'ta (~24 000 år)", at: [103, 52.9], show: 0.2 },
      { name: 'Mot Amerika', at: [-155, 63], show: 0.55 },
      { name: 'Mot Europa', at: [25, 55], show: 0.75 }
    ]
  },
  3: {
    center: [20, 64],
    zoom: 3.4,
    routes: [
      { id: 'skandinavia-sor', draw: [0.1, 0.45],
        coords: [[13.5, 55.8], [12, 57.5], [10.5, 59], [6, 59], [5, 61], [7, 63], [10.5, 64]] },
      { id: 'skandinavia-nordost', draw: [0.1, 0.55], kind: 'east',
        coords: [[40, 64], [37, 67.5], [33, 69.4], [30, 70.2], [26, 71], [19, 70], [14, 68], [12, 66], [10.5, 64]] },
    ],
    points: [
      { name: 'Sør-Sverige (>12 000 år)', at: [13.5, 55.8], show: 0.05 },
      { name: 'Øst-Finnmark (~11 600 år)', at: [30, 70.2], show: 0.3 },
      { name: 'Sør-Norge (~10 300 år)', at: [9, 59.3], show: 0.75 }
    ]
  },
  4: {
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
  5: {
    center: [30, 64],
    zoom: 3.6,
    routes: [
      { id: 'sibir', draw: [0.05, 0.4], kind: 'gene',
        coords: [[34, 62.5], [33, 65.5], [35, 69]] },
      { id: 'samisk-nord', draw: [0.45, 0.85], kind: 'language',
        coords: [[29, 61.8], [27.5, 65], [25.5, 68.5]] },
      { id: 'samisk-vest', draw: [0.45, 0.85], kind: 'language',
        coords: [[29, 61.8], [24, 63], [18.5, 63.8], [14, 64]] }
    ],
    points: [
      { name: 'Kola (≥3500 år)', at: [35, 69], show: 0.35 },
      { name: 'Midt-Skandinavia (~500 e.Kr.)', at: [14, 64], show: 0.8 }
    ]
  },
  6: {
    center: [-112, 76],
    zoom: 2.6,
    routes: [
      { id: 'paleo', draw: [0.1, 0.45], kind: 'paleo',
        coords: [[178, 65], [-170, 66], [-160, 68], [-140, 69.5], [-120, 69], [-95, 69.5],
                 [-82, 72], [-70, 76.5], [-58, 76], [-53, 70.5]] },
      { id: 'thule', draw: [0.45, 0.75],
        coords: [[-170, 66], [-156.8, 71.3], [-140, 70], [-123, 70.5], [-105, 69],
                 [-92, 72], [-80, 74], [-69, 77]] }
    ],
    points: [
      { name: 'Beringstredet (~5000 år)', at: [-170, 66], show: 0.05, hide: 0.45 },
      { name: 'Alaska (thule-kulturen)', at: [-156.8, 71.3], show: 0.45 },
      { name: 'Grønland (1200-tallet)', at: [-69, 77], show: 0.72 }
    ]
  }

};
