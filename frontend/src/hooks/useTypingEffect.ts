import { useReducer, useEffect } from 'react'

const TYPING_SPEED_MS = 65
const DELETING_SPEED_MS = 40
const PAUSE_AFTER_TYPED_MS = 2200

type State = {
  index: number
  displayed: string
  isTyping: boolean
}

type Action =
  | { type: 'TYPE'; phrase: string }
  | { type: 'START_DELETING' }
  | { type: 'DELETE' }
  | { type: 'NEXT_PHRASE'; total: number }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TYPE':
      return { ...state, displayed: action.phrase.slice(0, state.displayed.length + 1) }
    case 'START_DELETING':
      return { ...state, isTyping: false }
    case 'DELETE':
      return { ...state, displayed: state.displayed.slice(0, -1) }
    case 'NEXT_PHRASE':
      return { index: (state.index + 1) % action.total, displayed: '', isTyping: true }
  }
}

export function useTypingEffect(phrases: readonly string[]): string {
  const [{ index, displayed, isTyping }, dispatch] = useReducer(reducer, {
    index: 0,
    displayed: '',
    isTyping: true,
  })
  const currentPhrase = phrases[index]
  const total = phrases.length

  useEffect(() => {
    if (isTyping) {
      if (displayed === currentPhrase) {
        const id = setTimeout(() => dispatch({ type: 'START_DELETING' }), PAUSE_AFTER_TYPED_MS)
        return () => clearTimeout(id)
      }
      const id = setTimeout(
        () => dispatch({ type: 'TYPE', phrase: currentPhrase }),
        TYPING_SPEED_MS,
      )
      return () => clearTimeout(id)
    } else {
      if (displayed === '') {
        const id = setTimeout(
          () => dispatch({ type: 'NEXT_PHRASE', total }),
          DELETING_SPEED_MS,
        )
        return () => clearTimeout(id)
      }
      const id = setTimeout(() => dispatch({ type: 'DELETE' }), DELETING_SPEED_MS)
      return () => clearTimeout(id)
    }
  }, [isTyping, displayed, currentPhrase, total])

  return displayed
}
