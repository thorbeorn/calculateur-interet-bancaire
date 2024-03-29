# calculateur interet bancaire
L'application de Calculatrice d'Intérêts Bancaires est un outil intuitif et pratique conçu pour estimer précisément les intérêts générés sur des sommes d'argent spécifiques, en prenant en compte des variables clés telles que les intérêts par quinzaine ou mensuel, les ajouts fixes et une somme initiale.

# Lien des éléments
[Github](https://github.com/thorbeorn/calculateur-interet-bancaire)

# Pourquoi ?
**Optimiser vos Finances :** Une application de calcul d'intérêts bancaires se révèle être l'outil idéal pour une gestion financière efficace. En intégrant des fonctionnalités telles que le calcul des intérêts par quinzaine, les ajouts réguliers et la somme initiale, cette application offre une vision claire de la croissance de vos fonds au fil du temps. Cela vous permet de planifier et d'optimiser vos économies ou vos investissements.

**Compréhension Financière Améliorée :** Cette application constitue une ressource pédagogique inestimable. En expliquant comment les intérêts s'accumulent et en montrant l'impact des variables telles que les ajouts périodiques sur votre épargne ou vos investissements, elle renforce votre compréhension financière.

**Facilité dans les Transactions Financières :** Les particuliers utilisent cette application pour estimer rapidement les montants à rembourser ou à recevoir lors de transactions ou de prêts avec des intérêts par quinzaine. Cela simplifie les calculs et assure une clarté financière.

En résumé, créer une application de calcul d'intérêts bancaires offre des avantages significatifs, qu'il s'agisse d'optimiser ses propres finances, d'améliorer la transparence dans le secteur bancaire ou de renforcer la compréhension financière des utilisateurs.

# Comment ?
- **Étape 1 : Étude Approfondie des Livrets d'Épargne**
Pour commencer, j'ai entrepris une étude minutieuse sur les différents types de livrets d'épargne disponibles. J'ai examiné leurs caractéristiques, leurs taux d'intérêt, les conditions pour bénéficier des intérêts, ainsi que les éventuelles limites de dépôt. Cette première phase m'a permis de comprendre la diversité des produits financiers et leurs particularités.

- **Étape 2 : Investigation Approfondie des Calculs d'Intérêts**
Ensuite, je me suis plongé dans la compréhension détaillée des calculs d'intérêts appliqués à ces livrets, couvrant différents scénarios. J'ai exploré comment les intérêts sont calculés, que ce soit initialement avec une somme fixe, avec des ajouts réguliers au fil du temps, ou encore lorsque le livret atteint son plafond. Comprendre ces mécanismes m'a permis d'anticiper les différentes situations que les utilisateurs pourraient rencontrer.

- **Étape 3 : Choix du Langage de Programmation**
Après une analyse approfondie des besoins du projet, j'ai décidé d'utiliser Node.js comme langage de programmation principal. Cette décision s'est basée sur sa polyvalence, sa performance et la robustesse de sa communauté de développeurs. Node.js offre une grande flexibilité pour créer une application performante, en particulier pour la gestion des calculs complexes liés aux intérêts bancaires.

- **Étape 4 : Développement de l'Application**
En intégrant mes connaissances des livrets d'épargne et des calculs d'intérêts, j'ai entamé le développement de l'application. J'ai utilisé Node.js pour construire une plateforme conviviale permettant aux utilisateurs d'estimer les intérêts bancaires en fonction de divers scénarios. L'interface utilisateur a été conçue pour être intuitive, offrant des calculs précis et des résultats faciles à interpréter.

- **Étape 5 : Tests et Améliorations Continues**
Une fois l'application développée, j'ai procédé à des tests approfondis pour garantir son bon fonctionnement et sa précision dans diverses situations. J'ai pris en compte les retours des utilisateurs et les éventuels bugs pour apporter des améliorations continues, veillant à ce que l'application soit fiable et conforme aux attentes des utilisateurs.

En suivant ces étapes, de l'étude initiale des produits financiers à la mise en œuvre technique via Node.js, j'ai pu créer une application robuste et précise pour le calcul des intérêts bancaires, répondant aux besoins variés des utilisateurs en matière de planification financière.

# Comment l'utiliser
### Première étape
Vous devez installer [python3](https://www.python.org/downloads/) et [git](https://github.com/git-guides/install-git)

### Deuxième étape
Vous devez cloner le git qui contien l'application
```bash
    git clone https://github.com/thorbeorn/calculateur-interet-bancaire.git
```

### Troisième étape
Vous pouvez maintenant lancer l'application avec python3
```bash
    python3 {Application Name}
```

# Applications
### Ajout fixe
La fonction ajout fixe est faite pour calculer les interets par quinzaine d'un compte d'épargne.
En se basant sur les informations de départ : 
- La somme de départ, qui correspond à la somme sur le compte au debut de l'année
- La somme ajouter fixement, qui correspond à la somme qui sera ajouter au compte chaque quinzaine
- L'interet, qui correspond à l'interet qui est ficer sur le compte en %

> par exemple avec une somme de départ de 30 euros, la somme ajouter fixement est définit à 25 euros et l'interet sur ce compte est à 6%, nous optenons en sorti un tableau qui présente l'avancement des interets sur l'année mais aussi des totaux qui correspondent aux differents éléments du tableau.

Le programme ajout_complexe.py est une implémentation en Python d'une fonction appelée ajout_complexe qui calcule les intérêts par quinzaine d'un compte d'épargne sur une période donnée, mais cette fois-ci avec une structure d'entrée plus complexe.

### Ajout complexe
La fonction prend deux arguments en entrée :
- entree_complexe: un dictionnaire représentant les données d'entrée, où les clés sont les années et les valeurs sont des dictionnaires contenant les dépôts ou les retraits pour chaque quinzaine.
- interet: le taux d'intérêt fixé sur le compte, en pourcentage.

À l'intérieur de la fonction, des variables sont initialisées pour suivre les différents cumuls :
- interet_cumule: total des intérêts cumulés.
- ajout_cumule: total des sommes ajoutées cumulées.
- total_cumule: total cumulé sur le compte (somme initiale + intérêts cumulés + sommes ajoutées cumulées).
- calculated_initial: une copie de la somme initiale pour effectuer des calculs dessus sans la modifier.

La fonction parcourt le dictionnaire entree_complexe en utilisant une double boucle imbriquée, pour chaque année (annee) et chaque quinzaine (quinzaine).
À chaque itération, elle vérifie si un dépôt ou un retrait est spécifié pour cette quinzaine.
- Si un dépôt est spécifié, la somme est ajoutée à calculated_ajout et ajout_cumule, puis les intérêts sont calculés et ajoutés à interet_cumule.
- Si un retrait est spécifié, la somme est soustraite à calculated_ajout et ajout_cumule, puis les intérêts correspondants sont soustraits à interet_cumule.
Après avoir parcouru toutes les années et toutes les quinzaines, le total cumulé est calculé en ajoutant les intérêts cumulés et les sommes ajoutées cumulées.

Les résultats sont stockés dans un dictionnaire calcul_result contenant les clés "interet_cumule", "ajout_cumule", et "total_cumule". Ce dictionnaire est ensuite renvoyé comme résultat de la fonction.
Enfin, la fonction est appelée avec un exemple de dictionnaire entree contenant des données d'entrée pour deux années, puis les résultats sont affichés avec print.
Cela permet de gérer des scénarios plus complexes où les dépôts ou les retraits peuvent varier pour chaque quinzaine et pour chaque année. La sortie du programme fournira les totaux des intérêts cumulés, des sommes ajoutées cumulées et du total cumulé sur le compte pour les années spécifiées dans l'entrée complexe.

### Sortie détaillée
La fonction sortie_detaille est une implémentation en Python qui affiche un détail des calculs d'intérêts et de cumuls sur un compte d'épargne, mois par mois et quinzaine par quinzaine, pour une période donnée.
Voici une description détaillée du fonctionnement de cette fonction :

La fonction prend quatre arguments en entrée :
- initial: la somme de départ sur le compte au début de l'année.
- ajout: la somme qui sera ajoutée au compte à chaque quinzaine.
- interet: le taux d'intérêt fixé sur le compte, en pourcentage.
- ans: le nombre d'années pour lesquelles les intérêts seront calculés.

À l'intérieur de la fonction, des variables sont initialisées pour suivre les différents cumuls :
- interet_cumule: total des intérêts cumulés.
- ajout_cumule: total des sommes ajoutées cumulées.
- total_cumule: total cumulé sur le compte (somme initiale + intérêts cumulés + sommes ajoutées cumulées).
- calculated_initial: une copie de la somme initiale pour effectuer des calculs dessus sans la modifier.

La fonction imprime un en-tête de tableau détaillant les informations affichées : année, mois, quinzaine, ajout, intérêt, ajout cumulé, et intérêt cumulé.
La fonction utilise deux boucles imbriquées pour parcourir chaque année et chaque quinzaine dans cette année.

À chaque itération, elle calcule le montant ajouté et les intérêts pour cette quinzaine en fonction des paramètres fournis.
Elle ajoute ces valeurs aux cumuls correspondants (interet_cumule et ajout_cumule).
Elle imprime les détails de chaque quinzaine dans le tableau.

Après avoir parcouru toutes les années et toutes les quinzaines, la fonction imprime les totaux des intérêts cumulés, des sommes ajoutées cumulées et du total cumulé sur le compte.
Enfin, la fonction ne renvoie rien, elle imprime simplement les détails des calculs.
Cela permet d'avoir une vision détaillée de l'évolution des intérêts et des cumuls sur le compte d'épargne pour chaque quinzaine, mois par mois, sur la période spécifiée.

### Sortie détaillée json
La fonction sortie_detaille_json est une version légèrement modifiée de la fonction précédente sortie_detaille, qui génère et retourne un dictionnaire au format JSON contenant les détails des calculs d'intérêts et de cumuls sur un compte d'épargne, mois par mois et quinzaine par quinzaine, pour une période donnée.

Voici une description détaillée du fonctionnement de cette fonction :
La fonction prend quatre arguments en entrée :
- initial: la somme de départ sur le compte au début de l'année.
- ajout: la somme qui sera ajoutée au compte à chaque quinzaine.
- interet: le taux d'intérêt fixé sur le compte, en pourcentage.
- ans: le nombre d'années pour lesquelles les intérêts seront calculés.

À l'intérieur de la fonction, des variables sont initialisées pour suivre les différents cumuls :
- interet_cumule: total des intérêts cumulés.
- ajout_cumule: total des sommes ajoutées cumulées.
- total_cumule: total cumulé sur le compte (somme initiale + intérêts cumulés + sommes ajoutées cumulées).
- calculated_initial: une copie de la somme initiale pour effectuer des calculs dessus sans la modifier.

La fonction initialise un dictionnaire vide result pour stocker les détails des calculs.
Elle utilise deux boucles imbriquées pour parcourir chaque année et chaque quinzaine dans cette année.

À chaque itération, elle crée un dictionnaire pour stocker les détails de chaque quinzaine, y compris le mois, le montant ajouté, l'intérêt et les cumuls correspondants.
Elle ajoute ce dictionnaire au dictionnaire de l'année en cours.
Elle met également à jour les cumuls interet_cumule et ajout_cumule.

Après avoir parcouru toutes les années et toutes les quinzaines, la fonction ajoute les totaux des intérêts cumulés, des sommes ajoutées cumulées et du total cumulé sur le compte au dictionnaire result.
Enfin, la fonction retourne le dictionnaire result.
Cela permet d'obtenir un format JSON contenant une représentation détaillée de l'évolution des intérêts et des cumuls sur le compte d'épargne pour chaque quinzaine, mois par mois, sur la période spécifiée.

# Author & Developer
### Author
- [@thorbeorndev](https://github.com/thorbeorndev)
### Developer
- [@thorbeorndev](https://github.com/thorbeorndev)

# License
[MIT](https://choosealicense.com/licenses/mit/)
