# Introduction à Node.js - Exercices


## Application console  

Créer une application console qui lit une commande au resto :  

- 3 choix d’entrées  
- 2 choix de menu principaux  
- Demander un dessert (o / n)  
- Inscrire :  
    - Le total de la commande  
    - La TPS  
    - La TVQ  
    - Le montant total  
- Demander si le client désire donner du pourboire (%, $, ou rien)  
- Traiter l’opération selon le choix du client  
- Valider le résultat obtenu selon les diverses possibilités  
- Utiliser un type pour représenter les choix de menu  
- Utiliser une fonction pour afficher les choix de menu et lire la réponse de l’utilisateur  
- Tout dois être en TypeScript  

## Serveur Web  

Créer un serveur Web :  

- À partir de cette url : localhost:3000?nom=votreNom&prenom=votrePrenom&hasard=unNombre  

-  Ex: localhost:3000?nom=Rivard&prenom=Etienne&hasard=10


- Affichez en HTML :  
    - Bonjour « votrePrenom » « votreNom »  
    - Voici le décompte selon le nombre fourni :  (Boucle de N à 0 en décrémentant de 2)  
        - Nombre
        - Nombre -2 
        - Nombre -4
        - Nombre -6
        - …
