import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './footer.module.scss'

const Footer = () => {

  const nome = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    } 
  `) 

  return (
    <footer className={footerStyles.footer}>
      <p>Todos os direitos reservados © 
        {nome.site.siteMetadata.author}
          2019
      </p>
    </footer>
  )
}

export default Footer