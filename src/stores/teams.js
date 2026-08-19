import { defineStore } from "pinia";

// fct pour utiliser le store 'teams'
export const useTeamStore = defineStore('team', {
  // state = objet avec les données
  state: () => ({
    team: [
    {
      pseudo: "Lukas",
      fonction: "étudiant",
      ddn: "2002-01-20",
      actif: true
    },
    {
      pseudo: "Adrien",
      fonction: "étudiant",
      ddn: "2000-02-20",
      actif: false
    },
    {
      pseudo: "Cindy",
      fonction: "directrice",
      ddn: "1990-04-01",
      actif: true
    },
    {
      pseudo: "Pierre",
      fonction: "formateur",
      ddn: "1980-08-14",
      actif: true
    },
    {
      pseudo: "Greg",
      fonction: "formateur",
      ddn: "1975-04-03",
      actif: false
    },
  ],
  }),
  // méthodes getters
  getters: {
    // getter qui accède au state et qui renvois state.team
    allTeam: (state) => {return state.team},

    // getter qui accède au state et qui renvois uniquement les formateurs de team
    //allFormateurs: (state) => {return state.team}
  },
  // méthodes setters
  actions: {
    toggleActif(index) {
      // this fait référence au state
      this.team[index].actif = !this.team[index].actif
    },
  },
})