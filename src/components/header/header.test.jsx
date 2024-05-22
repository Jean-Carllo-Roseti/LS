/* eslint-disable no-undef */
import { describe, it } from '@jest/globals'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './index'

describe('Header Component', () => {
  it('Verificação de logo e "state" inicial do hamburguer', () => {
    const { getByAltText, getByTestId } = render(<Header />)

    // Verifica se o logotipo está presente
    expect(getByAltText('logomarca da empresa')).toBeInTheDocument()

    // Verifica se o menu está inicialmente fechado
    expect(getByTestId('hamburguer-menu')).toHaveClass('is-close')
  })

  it('Funcionamento do hamburguer', () => {
    const { getByTestId } = render(<Header />)

    const hamburgerIcon = getByTestId('hamburger-icon')

    // Simula um clique no ícone do menu
    fireEvent.click(hamburgerIcon)

    // Verifica se o menu é aberto após o clique
    expect(getByTestId('hamburguer-menu')).toHaveClass('is-open')
  })
})
