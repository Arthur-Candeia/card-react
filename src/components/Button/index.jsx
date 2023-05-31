/* eslint-disable react/jsx-no-target-blank */
import style from './Button.module.css'

export default function Button(props) {
  return (
    <a href={props.link} target="_blank" rel="external" className={style.button}>
      {props.content}
    </a>
  )
}