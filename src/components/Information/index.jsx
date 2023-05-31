export default function Information(props) {
  return (
    <p 
    style={{
      width: '100%',
      textAlign: 'center',
      padding: '10px',
      borderTop: '1px solid darkgreen',
      borderBottom: props.verify ? '1px solid darkgreen' : 'none'
    }}
    >
      {props.info}
    </p>
  )
}