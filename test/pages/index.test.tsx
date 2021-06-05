import { render, screen, fireEvent } from '../testUtils'
import Home from '../../pages/index'

describe('something', () => {
  it('matches snapshot', () => {
    expect.hasAssertions()
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('clicking button triggers alert', () => {
    expect.hasAssertions()
    render(<Home />)
    jest.spyOn(window, 'alert').mockImplementation()
    fireEvent.click(screen.getByText('Test Button'))
    expect(window.alert).toHaveBeenCalledWith('With typescript and Jest')
  })
})
