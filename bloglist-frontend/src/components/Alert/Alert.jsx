const Alert = ({ show, text, error }) => {
  return (
    <div>
      {show && <h2 className={error ? 'error' : 'success'}>{text}</h2>}
    </div>
  )
}

export default Alert

