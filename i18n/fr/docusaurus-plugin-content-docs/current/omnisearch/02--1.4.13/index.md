---
sidebar_position: 1
sidebar_label: 1.4.13
pagination_prev: null
---

import Figure from '../../components/figures'
import Arcade from '../../components/arcade'
import Highlight from '../../components/highlight'
import BubblePropertyEditor from '../../components/bubblePropertyEditor';
import Embed from '../../components/embed'

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Scious Search 1.4.13

The following is documentation for Scious Search version `1.4.13`. Scious Search was renamed to "Omnisearch" in version `2.0.0`.

## Fonctionnalités

**Scious Search** permet de créer des expériences de recherche en temps réel, à mesure que vous tapez, dans Bubble. En tant qu'intégration approfondie, il :

- Préserve les paramètres de confidentialité de Bubble pour tous les types de données.
- Ne se dégrade pas et ne ralentit pas lorsque votre base de données atteint des millions d'enregistrements car il utilise [Algolia](https://www.algolia.com/) ou [Typesense](https://cloud.typesense.org/bubble) comme fournisseur de recherche.
- Retourne une chose de type bubble réel, qui peut être utilisée comme n'importe quel type de données bubble natif dans l'éditeur.
- Fonctionne avec toutes les versions de votre application pour que vous puissiez tester intégralement les intégrations avant de les mettre en production.
- Peut filtrer les recherches par la valeur manquante (ce qui n'est pas disponible dans une quelconque intégration actuelle d'Algolia ou de Typesense).
- Peut trier les résultats de recherche par options (ce qui n'est même pas disponible dans les recherches natives de Bubble).
- Peut trier les résultats de recherche par ordre alphabétique.
- Peut faceter les résultats de recherche.
- Peut vous faire économiser de l'argent.

## Démos

<nav className="pagination-nav">
  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://plugins.scious.io/scious-search">
      <div className="pagination-nav__sublabel">Vue d'ensemble d'Omnisearch</div>
      <div className="pagination-nav__label">Rechercher instantanément plus de 250 000 enregistrements →</div>
    </a>
  </div>

  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://plugins.scious.io/scious-search-ecommerce-typesense">
      <div className="pagination-nav__sublabel">Recherche facettée</div>
      <div className="pagination-nav__label">Modèle de commerce électronique →</div>
    </a>
  </div>

  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://bubble.io/page?version=live&type=page&name=scious-search&id=scious-plugins&tab=tabs-1">
      <div className="pagination-nav__sublabel">Éditeur d'application Bubble</div>
      <div className="pagination-nav__label">Éditeur de démo →</div>
    </a>
  </div>


## Limitations connues

- Nous n'avons pas implémenté "Recommander" d'Algolia (nous prévoyons de le faire avec l'équivalent de Typesense).
- Les filtres de recherche ne peuvent pas s'étendre sur plusieurs types de données / indices. Cela dit, nous avons des solutions de contournement pour cela (nous documenterons cela bientôt).
- Vous ne pouvez pas synchroniser plus d'un champ d'adresse géographique par enregistrement par index en utilisant Algolia - c'est une limitation d'Algolia. Typesense peut synchroniser un nombre quelconque d'adresses géographiques par enregistrement.

## Support

- Consultez [l'éditeur de notre démo](https://bubble.io/page?version=live\&type=page\&name=scious-search\&id=scious-plugins\&tab=tabs-1) pour un guide auto-documenté sur la configuration et l'utilisation de Scious Search.
- Besoin d'aide pour intégrer Omnisearch ? Envie de demander une fonctionnalité ? Déposez un message dans [notre canal de support Bubble gratuit](https://forum.bubble.io/t/introducing-scious-search-solve-instant-search-once-and-for-all/259315/last) où nous répondons aux questions dans la mesure du possible.
- Préférez-vous que quelqu'un intègre Omnisearch pour vous ? Nous proposerons bientôt des services d'intégration 'à louer'.
- Nous proposons un [Contrat de niveau de service](https://buy.stripe.com/8wMg2x1if3zz3ba6op) pour les clients ayant besoin de services de plugin et de garanties de maintenance.
