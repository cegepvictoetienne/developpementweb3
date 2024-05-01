# Exercice - Express avec modèle  

- Faire un API pour une chenil qui doit faire l’inventaire de ses résidents (chats et chiens)  
- GET /animal pour la liste de tous les animaux  
- GET /animal/:id pour extraire un animal par son ID  
- POST /animal pour ajouter un animal dans la liste  
- DELETE /animal/:id pour supprimer un animal de la liste  
- Un animal a les attributs suivants :  
    - ID  
    - Nom  
    - Type = Chat ou Chien  
    - Age  
    - Propriétaire  
- Bien sûr, c’est en TypeScript, donc un type Animal doit être créé!  
- Faire l’API des animaux avec le modèle généré (express-generator-typescript).
- Assurez-vous de valider le nom, la race et le propriétaire de l’animal.
- Ajouter le numéro de téléphone du propriétaire et valider que le numéro est bien sous la forme (999) 999-9999
- Testez les méthodes en utilisant Postman

