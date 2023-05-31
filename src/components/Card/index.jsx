/* eslint-disable react/prop-types */
import style from './Card.module.css'
import Information from '../Information/'
import Button from '../Button'

export default function Card({avatar, name, bio, email, phone, githubUrl, linkedinUrl, instagramUrl}) {
  return (
    <div className={style.container}>
      <img src={avatar} alt={name} className={style.profileImg}/>
      <h1 style={{margin: '20px 0px 10px 0'}}>{name}</h1>
      <Information info={bio} verify={false}/>
      <Information info={email} verify={false}/>
      <Information info={phone} verify={true}/>
      <Button link={githubUrl} content='GitHub'/>
      <Button link={linkedinUrl} content='Linkedin'/>
      <Button link={instagramUrl} content='Instagram' />
    </div>
  )
}