EX - Carrello della spesa
===
## Consegna:
### 📌 Milesone 1: Mostrare la lista dei prodotti
Partire dall'array fornito:
1. Creare un componenete che mostra la lista dei prodotti.

2. Per ogni prodotto mostra nome e prezzo.

Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.

### 📌 Milesone 2: Aggiungere prodotti al carrello
1. Aggiungere uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello.

2. Per ogni prodotto della lista aggiungere un bottone "Aggiungi al carrello":
    - Al click del bottone usa la funzione addToCart per aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
    - Se il prodotto è già nel carrello, ignora l'azione.

3. Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello, se addedProducts contiene almeno un elemento. 
    - Per ogni prodotto nel carrello mostra: nome, prezzo, quantità.

Obiettivo: l'utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.

### 📌 Milestone 3: Modificare il carrello
1. Al click sucessivo del bottone aggiungi al carrello, se il prodotto è già presente:
    - Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente.

2. Per ogni prodotto nel carrello, aggiungi un bottone 
"Rimuovi dal carrello":
    - Al click usa la funzione removeFromCart per rimuovere il prodotto dal carrello.

3. Sotto la lista del carrello, mostra il totale da pagare:
    - Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati.

Obiettivo: Gestire l'aggiunta, la rimozione e il calcolo del totale del carrello, in modo dinamico.

<hr>

### 🎯 Bonus 1: Modifica dinamica delle quantità
1. Al posto di mostrare solo il numero quantity, usa un input di tipo number:
- Quando l’utente modifica il valore dell’input, usa la funzione updateProductQuantity per aggiornare la quantità del prodotto.

2. Migliora la funzione updateProductQuantity per gestire:
- Numeri decimali: Forza la quantità a essere un numero intero.
- Valori inferiori a 1: Non permettere quantità negative o pari a zero.

Obiettivo: Consentire una modifica precisa e dinamica delle quantità direttamente nel carrello.

### 🎯 Bonus 2: Usare useReducer per gestire lo stato del carrello
1. Sostituisci useState con useReducer per gestire lo stato del carrello.

2. Configura il reducer con queste azioni:
- ADD_ITEM: Aggiunge un nuovo articolo al carrello con quantity = 1.
- REMOVE_ITEM: Rimuove un articolo specifico dal carrello.
- UPDATE_QUANTITY: Modifica la quantità di un articolo esistente nel carrello, assicurandoti di gestire i casi limite (es. valori negativi).

3. Inizializza lo stato con un array vuoto e usa useReducer per gestire le azioni del carrello.

Obiettivo: Migliorare la struttura del codice utilizzando un approccio più scalabile e organizzato.