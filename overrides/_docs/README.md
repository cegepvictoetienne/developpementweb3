# theme
Thème Zensical pour tous les sites de notes de cours


# Pour ajouter le thème au site de notes de cours

``` bash
git submodule add git@github.com:cegepvictoetienne/theme.git overrides
git commit -m "Ajout du thème partagé comme submodule"
```  

# Modifier zensical.toml  

``` toml
[project.theme]
custom_dir = "overrides"
```  

# Au clone initial du site de notes de cours  

``` bash
git clone --recurse-submodules https://github.com/cegepvictoetienne/site-web3.git
``` 


