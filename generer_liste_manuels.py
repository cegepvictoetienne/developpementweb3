

def liste_articles():
    import yaml

    with open('mkdocs.yml', 'r') as file:
        configuration = yaml.unsafe_load(file)

    liste = []
    for rubrique in configuration['nav'][2]["Leçons"]:
        for item in rubrique:
            for element in rubrique[item]:
                for k in element.keys():
                    entree = { 'titre' : k,  'fichier':element[k]}
                    liste.append(entree)
    return liste

def extraire_manuel(article):
    with open(article, 'r') as file:
        contenu = file.readlines()
    
    manuels = []

    entete_manuel = False
    for ligne in contenu:
        if "!!! manuel" in ligne:
            entete_manuel = True
        else:
            if entete_manuel and "](" in ligne:
                manuels.append(ligne.lstrip())
            else:
                entete_manuel = False

    return manuels


with open('wiki/manuels.md', 'w') as file:
    file.write("# Tous les manuels référencés dans le cours \n")

    articles = liste_articles()

    for article in articles:
        file.write(f"## {article['titre']}")
        file.write("\n")
        manuels = extraire_manuel("wiki/" + article['fichier'])
        for  manuel in manuels:
            file.write(manuel)
