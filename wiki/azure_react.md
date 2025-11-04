# Déploiement de React dans Azure

# 1 - Créer un Azure Static Web Site

# 2 - Utiliser GitHub

# 3 - Répertoire dist

# 4 - Ajuster le script de déploiement

``` yaml
- name: npm install, build, and test
        run: |
          npm install
          npm run build

``` 

# 5 - Ajuster le CORS de l'API 

# 6 - Permettre le routage dans Azure  

``` json title="staticwebapp.config.json"  
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/dist/*.{svg,png,jpg,gif}", "/dist/assets/*"]
  }
}
``` 

