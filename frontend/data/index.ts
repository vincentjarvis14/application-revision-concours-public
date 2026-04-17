import { Theme } from './types';
import { urbanismeFiches1 } from './urbanisme-part1';
import { urbanismeFiches2 } from './urbanisme-part2';
import { urbanismeFiches3 } from './urbanisme-part3';
import { environnementFiches } from './environnement-data';

const allUrbanismeFiches = [...urbanismeFiches1, ...urbanismeFiches2, ...urbanismeFiches3];

export const themes: Theme[] = [
  {
    id: 'environnement',
    title: 'Environnement Territorial',
    subtitle: 'Catégorie A - Toutes spécialités',
    color: '#6366F1',
    icon: 'business',
    sections: [
      { name: 'Les institutions françaises', fiches: environnementFiches.filter(f => f.id >= 1 && f.id <= 4) },
      { name: 'Les collectivités locales', fiches: environnementFiches.filter(f => f.id >= 5 && f.id <= 25) },
      { name: "L'action administrative locale", fiches: environnementFiches.filter(f => f.id >= 26 && f.id <= 37) },
      { name: 'Les finances publiques locales', fiches: environnementFiches.filter(f => f.id >= 38 && f.id <= 45) },
      { name: 'La commande publique', fiches: environnementFiches.filter(f => f.id >= 50 && f.id <= 60) },
      { name: 'Le statut de la fonction publique territoriale', fiches: environnementFiches.filter(f => f.id >= 61 && f.id <= 70) },
      { name: 'Les ressources humaines', fiches: environnementFiches.filter(f => f.id >= 71 && f.id <= 83) },
      { name: 'Management', fiches: environnementFiches.filter(f => f.id >= 84 && f.id <= 90) },
    ],
  },
  {
    id: 'urbanisme',
    title: "Politiques d'Urbanisme",
    subtitle: 'Spécialité Urbanisme et développement des territoires',
    color: '#10B981',
    icon: 'map',
    sections: [
      { name: "Règlement national d'urbanisme", fiches: allUrbanismeFiches.filter(f => f.id === 96) },
      { name: "Documents d'urbanisme", fiches: allUrbanismeFiches.filter(f => [98, 99].includes(f.id)) },
      { name: 'Lois spéciales', fiches: allUrbanismeFiches.filter(f => [100, 101].includes(f.id)) },
      { name: "Autorisations d'urbanisme", fiches: allUrbanismeFiches.filter(f => [102, 103, 104, 105, 106].includes(f.id)) },
      { name: "Opérations d'aménagement", fiches: allUrbanismeFiches.filter(f => f.id === 107) },
      { name: "Contentieux de l'urbanisme", fiches: allUrbanismeFiches.filter(f => f.id === 108) },
    ],
  },
];

export function getFicheById(id: number) {
  return [...allUrbanismeFiches, ...environnementFiches].find(f => f.id === id);
}

export function getAllFiches() {
  return [...environnementFiches, ...allUrbanismeFiches];
}
