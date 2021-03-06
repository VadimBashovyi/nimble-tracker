import { useState, useEffect, useRef } from 'react'
import shortid from 'shortid'
import Container from './Container'
import TrackerForm from './TrackerForm'
import TrackerItem from './TrackerItem'
import GlobalStyle from '../../assets/GlobalStyles'

const TimeTracker = () => {
  const conditionItems = localStorage.getItem('elements')
    ? JSON.parse(localStorage.getItem('elements'))
    : []

  const [item, setItem] = useState(conditionItems)

  const [storedItems, setStoredItems] = useState(conditionItems)

  const [idToDelete, setIdToDelete] = useState('')

  const input = useRef(null)

  const addItem = (title) => {
    setItem((prev) => [
      {
        id: shortid.generate(),
        title,
        startingTime: Date.now(),
        isRunning: true,
        resumeTime: 0,
        distance: 0,
        finalTime: [0],
      },
      ...prev,
    ])
  }

  const msToTime = (num) => {
    let hours = Math.floor((num % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes = Math.floor((num % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((num % (1000 * 60)) / 1000)

    const wrapZeros = (num) => (num < 10 ? '0' + num : num)

    return (
      wrapZeros(hours) + ':' + wrapZeros(minutes) + ':' + wrapZeros(seconds)
    )
  }

  const countdownUpdate = (countDownDate, finalTime, isRunning) => {
    let now = Date.now(),
      distance = now - countDownDate,
      fullDistance = distance

    if (finalTime && isRunning) {
      fullDistance = finalTime.reduce((a, b) => a + b) + distance
    } else if (finalTime && !isRunning) {
      fullDistance = finalTime.reduce((a, b) => a + b)
    }

    return {
      time: msToTime(fullDistance),
      fullDistance,
    }
  }

  const delTracker = (itemId) => {
    setIdToDelete(itemId)
  }

  const playClick = (id) => {
    setItem((prev) =>
      prev.map((el) => {
        return el.isRunning === true
          ? el.id === id
            ? {
                ...el,
                isRunning: false,
                distance: countdownUpdate(el.startingTime).fullDistance,
                finalTime: el.finalTime.concat([
                  countdownUpdate(el.startingTime).fullDistance,
                ]),
              }
            : el
          : el.id === id
          ? {
              ...el,
              isRunning: true,
              resumeTime: Date.now(),
              startingTime: Date.now(),
            }
          : el
      }),
    )
  }

  useEffect(() => {
    setItem((prev) => prev.filter((el) => el.id !== idToDelete))
  }, [idToDelete])

  useEffect(() => {
    localStorage.setItem('elements', JSON.stringify(item))
    setStoredItems(JSON.parse(localStorage.getItem('elements')))
    console.table(item)
  }, [item])

  return (
    <Container>
      <GlobalStyle />
      <div className="wrapper">
        <h1 className="title">tracker</h1>
      </div>

      <TrackerForm addItem={addItem} input={input} />

      <div className="scroll-wrapper">
        <ul className="list">
          {storedItems.map((i) => (
            <TrackerItem
              key={i.id}
              title={i.title}
              isRunning={i.isRunning}
              countdown={() =>
                countdownUpdate(i.startingTime, i.finalTime, i.isRunning)
              }
              delTracker={() => delTracker(i.id)}
              playClick={() => playClick(i.id)}
            />
          ))}
        </ul>
      </div>
    </Container>
  )
}

export default TimeTracker
