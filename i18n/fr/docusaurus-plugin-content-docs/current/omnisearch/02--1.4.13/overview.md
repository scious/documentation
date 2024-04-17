---
sidebar_position: 1
sidebar_label: Aperçu
pagination_prev: null
---

import Figure from '../../components/figures'
import Arcade from '../../components/arcade'
import Highlight from '../../components/highlight'
import BubblePropertyEditor from '../../components/bubblePropertyEditor';
import Embed from '../../components/embed'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Recherche Scious 1.4.13

Ce qui suit est la documentation pour la version de recherche Scious `1.4.13`. La recherche Scious a été renommée en "Omnisearch" dans la version `2.0.0`.

## Fonctionnalités

**La recherche Scious** permet de construire des expériences de recherche en temps réel, à mesure que vous tapez dans Bubble. En tant qu'intégration profonde, cela:

- Préserve les paramètres de confidentialité de Bubble pour tous les types de données.
- Ne se dégrade pas ou ne ralentit pas lorsque votre base de données atteint des millions d'enregistrements car elle utilise [Algolia](https://www.algolia.com/) ou [Typesense](https://cloud.typesense.org/bubble) comme fournisseur de recherche.
- Renvoie une chose de bulle réelle, qui peut être utilisée comme n'importe quel type de données de bulle natif dans l'éditeur.
- Fonctionne avec toutes les versions de votre application afin que vous puissiez tester minutieusement les intégrations avant de les mettre en ligne.
- Peut filtrer les recherches pour savoir si une valeur est manquante (ce qui n'est pas disponible dans une quelconque intégration actuelle d'Algolia ou Typesense).
- Peut trier les résultats de recherche par options (ce qui n'est même pas disponible dans les recherches natives de Bubble).
- Peut trier les résultats de recherche par ordre alphabétique.
- Peut facetter les résultats de recherche.
- Peut vous faire économiser de l'argent.

## Démos

<nav className="pagination-nav">
  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://plugins.scious.io/scious-search">
      <div className="pagination-nav__sublabel">Aperçu de la recherche Scious</div>
      <div className="pagination-nav__label">Rechercher instantanément plus de 250 000 enregistrements →</div>
    </a>
  </div>

  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://plugins.scious.io/scious-search-ecommerce-typesense">
      <div className="pagination-nav__sublabel">Recherche facetée</div>
      <div className="pagination-nav__label">Modèle d'e-commerce →</div>
    </a>
  </div>

  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://bubble.io/page?version=live&type=page&name=scious-search&id=scious-plugins&tab=tabs-1">
      <div className="pagination-nav__sublabel">Éditeur d'application Bubble</div>
      <div className="pagination-nav__label">Éditeur de démonstration →</div>
    </a>
  </div>


## Limitations connues

- Nous n'avons pas implémenté le "Recommend" d'Algolia (nous prévoyons de le faire avec un équivalent de Typesense).
- Les filtres de recherche ne peuvent pas s'étendre sur plusieurs types de données / indices. Cela dit, nous avons des solutions de contournement pour cela (nous documenterons cela bientôt).
- Vous ne pouvez pas synchroniser plus d'un champ d'adresse géographique par enregistrement par index en utilisant Algolia - c'est une limitation d'Algolia. Typesense peut synchroniser n'importe quel nombre d'adresses géographiques par enregistrement.

## Support

- Reportez-vous à [notre éditeur de démonstration](https://bubble.io/page?version=live\&type=page\&name=scious-search\&id=scious-plugins\&tab=tabs-1) pour un guide auto-documenté sur la façon de configurer et d'utiliser la recherche Scious.
- Besoin d'aide pour intégrer la recherche Scious? Vous souhaitez demander une fonctionnalité? Laissez un message dans [notre canal de support gratuit de Bubble](https://forum.bubble.io/t/introducing-scious-search-solve-instant-search-once-and-for-all/259315/last) où nous répondons aux questions selon notre capacité.
- Préférez-vous que quelqu'un intègre la recherche Scious pour vous? Nous proposerons bientôt des services d'intégration 'à louer'.
- Nous proposons un [accord de niveau de service](https://buy.stripe.com/8wMg2x1if3zz3ba6op) pour les clients nécessitant des garanties de service et de maintenance pour les plugins.
