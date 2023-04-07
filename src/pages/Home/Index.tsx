import { Play } from 'phosphor-react'
import { CountdowContainer, FormContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <FormContainer action="">
        <div>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="">durante</label>
          <input type="number" id="minutesAmount" />

          <span>minutos</span>
        </div>

        <CountdowContainer>
          <span>0</span>
          <span>0</span>
          <span>:</span>
          <span>0</span>
          <span>0</span>
        </CountdowContainer>

        <button type="submit">
          <Play size={24} />
          Começar
        </button>
      </FormContainer>
    </HomeContainer>
  )
}
