import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function BackgroundSection({
  img,
  styleClass,
  title,
  subtitle,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div>
        <h1 className="title text-white text-uppercase text-center display-4 font-weight-bold">
          {title}
        </h1>
        <h3 className="title text-white text-center display-4 font-weight-bold">
          {subtitle}
        </h3>
      </div>
      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "Titre par défaut",
  styleClass: "default-background",
}
