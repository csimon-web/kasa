import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/NoMatch.css'

function NoMatch() {
  return (
    <main>
      <p className="nomatch_title">404</p>
      <p className="nomatch_description">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <p className="nomatch_link_paragraph">
        <Link to="/" className="nomatch_link">
          Retourner sur la page d&apos;accueil
        </Link>
      </p>
    </main>
  )
}

export default NoMatch
