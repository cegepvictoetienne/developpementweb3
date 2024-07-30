# Marche à suivre pour réparer un projet node avec inflight qui est déprécié

Si vous avez un message d'erreur du genre : 

```bash
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated @humanwhocodes/config-array@0.11.14: Use @eslint/config-array instead
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
```

Il est possible de réparer le projet en ajoutant ceci dans `package.json`  :

```json 
  "overrides": {
    "eslint": {
      "@humanwhocodes/config-array": "npm:@eslint/config-array",
      "file-entry-cache": "^8.0.0"
    }
  }
```

Ensuite, il faut effacer le fichier `package-lock.json`, le dossier `node_modules` et le réinstaller avec `npm install`.

Cela devrait réparer le problème.