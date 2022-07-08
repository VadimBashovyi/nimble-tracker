import { BiCaretRightCircle } from 'react-icons/bi'

const TrackerForm = ({ addItem, input }) => {
  const submitHandler = (evt) => {
    evt.preventDefault()

    if (input.current.value === '') {
      addItem(new Date().toLocaleString())
    } else {
      addItem(input.current.value)
    }

    input.current.value = ''
  }

  const formIcon = <BiCaretRightCircle size={30} color={'#1ce08f'} />

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        className="form-input"
        ref={input}
        type="text"
        placeholder="Enter tracker name"
      />
      <button type="submit" className="form-btn">
        {formIcon}
      </button>
    </form>
  )
}

export default TrackerForm
