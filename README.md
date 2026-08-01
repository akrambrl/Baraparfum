# Bar à Parfum — site vitrine

Site du **Bar à Parfum** par Emmanuelle Jane : bar à parfum itinérant pour
mariages, événements d'entreprise et hôtellerie (Paris & Île-de-France).

Site 100 % statique — HTML, CSS et JavaScript sans framework ni build.
Il suffit d'ouvrir `index.html` ou de servir le dossier tel quel
(GitHub Pages, Netlify, Vercel, OVH…).

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil : concept, déroulé, les trois formules |
| `mariage.html` | Prestation mariage (cocktail, cadeau d'invité) |
| `entreprise.html` | Séminaires, soirées, lancements, salons |
| `hotellerie.html` | Welcome gift, amenities, réassort mensuel |
| `collection.html` | Les huit parfums, pyramides olfactives |
| `prestataires.html` | Grille revendeur, marque blanche, compte revendeur |
| `devis.html` | Formulaire de demande de devis |
| `mentions.html` | Mentions légales & CGV (champs `[…]` à compléter) |

## À personnaliser avant mise en ligne

- **Téléphone** : remplacer `01 00 00 00 00` / `+33100000000` (présent dans le pied de page de chaque page).
- **Email** : `contact@baraparfum-event.fr` — dans les pages **et** dans `assets/main.js` (constante `EMAIL`).
- **Mentions légales** : compléter les champs entre crochets dans `mentions.html`.
- **Formulaires** : sans backend, l'envoi ouvre un email pré-rempli (`mailto:`).
  Pour un vrai envoi serveur, brancher un service type Formspree/Basin dans
  `assets/main.js` (handler du formulaire `#form-devis`).

## Visuels

Les photos de `assets/img/` sont des visuels libres de droit issus d'Unsplash
(licence Unsplash : usage commercial autorisé, sans attribution obligatoire).
Remplacez-les par vos vraies photos du bar (mêmes noms de fichiers) quand vous
les avez sous la main — format JPEG, ~1600 px de large recommandé.

## Structure

```
├── index.html … mentions.html   Pages du site
└── assets/
    ├── style.css                Design system (palette papier/encre, Gloock + Instrument Sans)
    └── main.js                  Menu mobile, animations au scroll, formulaires
```
