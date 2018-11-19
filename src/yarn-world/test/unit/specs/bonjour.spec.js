// Importer Vue et le composant à tester
import Vue from 'vue'
import bonjour from '@/components/bonjour';

// Ici nous avons plusieurs tests avec Jasmine 2.0, cependant vous pouvez utiliser
// n'importe quel combo de lanceur de tests / bibliothèque d'assertions que vous préférez

describe('bonjour', () => {
  // Inspecter l'objet d'options du composant
  it('a le hook `created`', () => {
    expect(typeof bonjour.created).toBe('function')
  })

  // Évaluer les résultats des fonctions dans
  // l'objet d'options du composant
  it('contient les données par défaut', () => {
    expect(typeof bonjour.data).toBe('function')
    const defaultData = bonjour.data()
    expect(defaultData.message).toBe('bonjour !')
  })

  // Inspecter l'instance au montage du composant
  it('affecte correctement les messages à la création', () => {
    const vm = new Vue(bonjour).$mount()
    expect(vm.message).toBe('au revoir !')
  })

  // Monter une instance et inspecter le résultat en sortie
  it('rend le message correct', () => {
    const Constructor = Vue.extend(bonjour)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.message span').textContent)
      .to.equal('au revoir !')
  })
})