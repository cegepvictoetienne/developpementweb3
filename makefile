# Variables
PYTHON      := python3
VENV        := venv
VENV_BIN    := $(VENV)/bin
DOCS_DIR    := wiki
SITE_DIR    := site
SCRIPTS_DIR := overrides/scripts

.PHONY: help install build serve clean pre-build rebuild deploy

help:
	@echo "Cibles disponibles :"
	@echo "  make install     - Crée le venv et installe les dépendances"
	@echo "  make build       - Pipeline complet : pre-build -> zensical"
	@echo "  make serve       - Lance le serveur de dev Zensical"
	@echo "  make clean       - Supprime le dossier site/ et les caches"
	@echo "  make rebuild     - clean + build"
	@echo "  make deploy      - build + rsync vers le serveur"

# --- Installation ---
$(VENV)/bin/activate:
	$(PYTHON) -m venv $(VENV)
	$(VENV_BIN)/pip install -r requirements.txt

install: $(VENV)/bin/activate

# --- Étapes pre-build (avant zensical) ---
pre-build: install
	@echo "==> Pre-build : génération de contenu dynamique"
	$(VENV_BIN)/python $(SCRIPTS_DIR)/generer_horaire.py --titre_page "Horaire" --chemin_excel template/horaire.xlsx --chemin_markdown $(DOCS_DIR)/horaire.md 
	$(VENV_BIN)/python $(SCRIPTS_DIR)/generer_horaire.py --titre_page "Horaire rencontre" --chemin_excel template/rencontre-finale.xlsx --chemin_markdown $(DOCS_DIR)/horaire-rencontres.md
	$(VENV_BIN)/python $(SCRIPTS_DIR)/generer_evaluation.py --modele template/projet_integrateur.md --chemin_excel template/grille_correction.xlsx --chemin_markdown $(DOCS_DIR)/projet_integrateur.md
	@echo "==> Pre-build terminé"

# --- Build Zensical ---
zensical-build: pre-build
	@echo "==> Build Zensical"
	$(VENV_BIN)/zensical build --clean

# Cible principale
build: zensical-build
	@echo "✓ Build complet dans $(SITE_DIR)/"

# --- Dev server (sans post-build, pour le live reload) ---
serve: install pre-build
	$(VENV_BIN)/zensical serve

# --- Nettoyage ---
clean:
	rm -rf $(SITE_DIR)
	rm -rf .cache
	find . -type d -name __pycache__ -exec rm -rf {} +

rebuild: clean build

sync-overrides:
	rsync -a --delete --exclude='.git' overrides/ overrides-copy/

deploy: sync-overrides
	mike deploy --push 2025

