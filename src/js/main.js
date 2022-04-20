"use strict";

const haushaltsbuch = {
  gesamtbilanz: {
    einnahmen: 0,
    ausgaben: 0,
    bilanz: 0,
  },

  neuer_eintrag: {
    titel: null,
    typ: null,
    betrag: null,
    datum: null,
  },

  eintrag_erfassen() {
    this.neuer_eintrag.titel = prompt("titel:");
    this.neuer_eintrag.typ = prompt("Typ (Einnahmen oder Ausgaben):");
    this.neuer_eintrag.betrag = parseInt(prompt("Betrag in Cent:"));
    this.neuer_eintrag.datum = prompt("Datum (jjjj-mm-tt:");
  },

  eintrag_ausgeben() {
    console.log(`Titel: ${this.neuer_eintrag.titel}
      Typ: ${this.neuer_eintrag.typ}
      Betrag: ${this.neuer_eintrag.betrag}
      Datum: ${this.neuer_eintrag.datum}`);
  },

  eintrag_mitgesamtbilanz_verrechnen() {
    if (this.neuer_eintrag.typ === "Einnahmen") {
      this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
      this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
    } else if (this.neuer_eintrag.typ === "Ausgaben") {
      this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
      this.gesamtbilanz.bilanz -= -this.neuer_eintrag.betrag;
    } else {
      console.log(`Der Typ "${this.neuer_eintrag.typ}" ist nicht bekannt`);
    }
  },

  gesamtbilanz_ausgeben() {
    console.log(`
  Einnahmen: ${this.gesamtbilanz.einnahmen} ct 
  Ausgaben: ${this.gesamtbilanz.ausgaben} ct
  Bilanz: ${this.gesamtbilanz.bilanz} ct
  Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`);
  },

  eintrag_hinzufuegen() {
    this.eintrag_erfassen();
    this.eintrag_ausgeben();
    this.eintrag_mitgesamtbilanz_verrechnen();
    this.gesamtbilanz_ausgeben();
  },
};

haushaltsbuch.eintrag_hinzufuegen();
haushaltsbuch.eintrag_hinzufuegen();
