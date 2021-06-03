import { FC, ReactElement } from 'react'
import { render, RenderResult } from '@testing-library/react'

const Providers: FC<any> = ({ children }) => {
  return children
}

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
