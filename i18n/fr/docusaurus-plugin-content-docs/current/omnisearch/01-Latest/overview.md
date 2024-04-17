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

# Omnisearch [Latest]

Voici la documentation pour la dernière version du plugin Omnisearch - `version 2.0.0`. Ce plugin était précédemment appelé "Scious Search".

## Fonctionnalités

**Omnisearch** permet de créer des expériences de recherche en temps réel, à mesure que vous tapez, dans Bubble. En tant qu'intégration approfondie, il :

- Préserve les paramètres de confidentialité de Bubble pour tous les types de données.
- Ne se dégrade pas et ne ralentit pas lorsque votre base de données atteint des millions d'enregistrements, car il utilise [Algolia](https://www.algolia.com/) ou [Typesense](https://cloud.typesense.org/bubble) en tant que fournisseur de recherche.
- Renvoie un élément Bubble réel, qui peut être utilisé comme n'importe quel type de données natif de Bubble dans l'éditeur.
- Fonctionne avec toutes les versions de votre application afin que vous puissiez tester en profondeur les intégrations avant de les mettre en production.
- Peut filtrer les recherches en fonction de la présence ou de l'absence d'une valeur (ce qui n'est pas disponible dans les intégrations actuelles d'Algolia ou de Typesense)
- Peut trier les résultats de recherche par options (ce qui n'est même pas disponible dans les recherches natives de Bubble).
- Peut trier les résultats de recherche par ordre alphabétique.
- Peut filtrer les résultats de recherche par facettes.
- Peut vous faire économiser de l'argent.

## Démos

<nav className="pagination-nav">
  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://plugins.scious.io/omnisearch">
      <div className="pagination-nav__sublabel">Aperçu d'Omnisearch</div>
      <div className="pagination-nav__label">Recherche instantanée sur plus de 250 000 enregistrements →</div>
    </a>
  </div>

  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://plugins.scious.io/omnisearch-ecommerce-typesense">
      <div className="pagination-nav__sublabel">Recherche avec facettes</div>
      <div className="pagination-nav__label">Modèle de commerce électronique →</div>
    </a>
  </div>

  <div className="pagination-nav__item">
    <a className="pagination-nav__link" href="https://bubble.io/page?version=live&type=page&name=omnisearch&id=scious-plugins&tab=tabs-1">
      <div className="pagination-nav__sublabel">Éditeur de l'application Bubble</div>
      <div className="pagination-nav__label">Éditeur de démonstration →</div>
    </a>
  </div>


## Limitations connues

- Nous n'avons pas implémenté la fonction de recommandation d'Algolia (nous prévoyons de le faire avec un équivalent de Typesense).
- Les filtres de recherche ne peuvent pas s'étendre sur plusieurs types de données / index. Cela dit, nous avons des solutions de contournement pour cela (nous les documenterons bientôt)
- Vous ne pouvez pas synchroniser plus d'un champ d'adresse géographique par enregistrement par index en utilisant Algolia - c'est une limitation d'Algolia. Typesense peut synchroniser un nombre quelconque d'adresses géographiques par enregistrement.

## Support

- Consultez [l'éditeur de notre démonstration](https://bubble.io/page?version=live\&type=page\&name=omnisearch\&id=scious-plugins\&tab=tabs-1) pour un guide auto-documenté sur la configuration et l'utilisation d'Omnisearch.
- Besoin d'aide pour intégrer Omnisearch ? Vous souhaitez demander une fonctionnalité ? Laissez un message dans [notre canal de support Bubble gratuit](https://forum.bubble.io/t/omnisearch-integrate-algolia-typesense-and-friends/317306/last) où nous répondons aux questions dans la mesure du possible.
- Vous préférez que quelqu'un intègre Omnisearch pour vous ? Nous proposerons bientôt des services d'intégration à la demande.
- Nous proposons un [accord de niveau de service](https://buy.stripe.com/8wMg2x1if3zz3ba6op) pour les clients nécessitant des garanties de service et de maintenance du plugin.
