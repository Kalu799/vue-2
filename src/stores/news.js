import { defineStore } from "pinia";

// fct pour utiliser le store 'teams'
export const useNewsStore = defineStore('news', {
  // state = objet avec les données
  state: () => ({
    news: [
      {
        titre: "News 1",
        content: "contenu news 1",
        author: "Jean-Test",
        date: "2020-01-20",
        comments: [
          {
            pseudo: "pseudo du com 1, news 1",
            content: "contenu du premier commentaire",
            date: "2020-01-22",
          },
          {
            pseudo: "pseudo du com 2, news 1",
            content: "contenu du 2ième commentaire",
            date: "2020-01-22",
          }
        ]
      },
      {
        titre: "News 2",
        content: "contenu news 2",
        author: "Jean-Test",
        date: "2020-01-20",
        comments: [
          {
            pseudo: "pseudo du com 1, news 2",
            content: "contenu du premier commentaire",
            date: "2020-01-22",
          },
          {
            pseudo: "pseudo du com 2, news 2",
            content: "contenu du 2ième commentaire",
            date: "2020-01-22",
          }
        ]
      },
    ]
  }),
  // méthodes getters
  getters: {
    // getter qui accède au state et qui renvois state.team
    //allTeam: (state) => {return state.team},

    // getter qui accède au state et qui renvois uniquement les formateurs de team
    //allFormateurs: (state) => {return state.team}

    allNews: (state) => {return state.news}
  },
  // méthodes setters
  actions: {
    // action pour toggle le status d'actif
    //toggleActif(index) {
      // this fait référence au state
    //  this.team[index].actif = !this.team[index].actif
    //},
    // action pour supp un membre
    //deleteMember(index) {
    //  this.team.splice(index, 1)
    //},
    // action pour ajouter un membre
    addComment(payload, index) {
      this.news[index].comments.push(payload)
    },
  },
})