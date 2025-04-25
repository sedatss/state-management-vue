# state-management

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## Antwoord model

### Wat is de State-management opdracht.

Deze opdracht gebaseerd op het project PintAndPillage. Waar je een
dorp kan bouwen en andere dorpen kan aanvallen. Een klein deel van de
dorp ontwikkeling is in deze opdracht verwerkt.

Dit project bevat een gameboard met 9 tiles. 8 tiles zijn blank_spots
en 1 daarvan is een building_spot. Op de building_spot moet een nieuw
gebouw gemaakt worden. Om de state van deze tiles bij te houden, wordt
er gebruik gemaakt van Vuex. Vuex is de officiële state management
library van Vue. Die gebruikt gaat worden in deze module.

Het doel van de opdracht is om de state van de building_spot te
wijzigen door gebruik te maken van Vuex.

### De opdracht.

Door gebruik te maken van Vuex moet de building_spot op het gameboard
geupdate worden naar een hop_farm of lumberyard. Hiervoor moet een
nieuw component aangemaakt worden, een BuildingList Deze BuildingList
bevat de bovenstaande twee gebouwen die geselecteerd kunnen worden.
Door op een knop te klikken moet het geselecteerde gebouw op de
building_spot gebouwd worden. Het bouwen van een gebouw is helaas
niet onmiddellijk. Daarom start er eerst een timer van 10 seconden
wanneer er op de knop geklikt wordt en verandert de building_spot
eerst naar under_construction state. Na 10 seconden is de constructie
klaar en wordt het geselecteerde gebouw neergezet.

