import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('App Component', () => {
  it('should render hello world',()=>{
    const { getByText } = render(<App/>)

    expect(getByText("hello world")).toBeInTheDocument()
    expect(getByText("hello world")).toHaveAttribute('class', expect.stringContaining('h2'))
  })

  it('should render list items',()=>{
    const { getByText, queryByText } = render(<App/>)

    expect(getByText("Diener")).toBeInTheDocument()
    expect(getByText("Yanne")).toBeInTheDocument()
    expect(getByText("Karol")).toBeInTheDocument()
  })

  it('should be able to add a new item to the list', async () => {
    const { getByText, getByPlaceholderText } = render(<App/>)

    const inputElement = getByPlaceholderText('Novo Item')
    const addButton = getByText('Adicionar')

    await userEvent.type(inputElement, 'Novo')
    await userEvent.click(addButton)
    expect(getByText('Novo')).toBeInTheDocument()
  })

})
