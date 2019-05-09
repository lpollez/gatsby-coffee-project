import React from "react"
import Title from "../globals/Title"

export default function Info({ title, message }) {
  return (
    <section className="py-5">
      <div className="container">
        <Title title={title} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted">{message}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

Info.defaultProps = {
  title: "Informations",
  message: `Ce site est un simple exemple de site marchand. Il est développé
              avec les technologies modernes (notamment React qui est la
              librairie de programmation développée par Facebook), ce qui le
              rend très performant. A contenu égal, il est 6 à 10 fois plus
              rapide qu'un site développé avec un CMS standard comme Wordpress
              ou Drupal. De plus, cette technologie offre une sécurité optimale
              et un hébergement simplifié. Ce site de démonstration intègre un
              formulaire de contact, un filtre sur produits et un panier
              d'achats. Vous pouvez tester le processus d'achats avec les
              données de tests indiquées. Bien sûr, le site est responsive, càd
              que son contenu s'adapte à la taille de l'écran.`,
}
