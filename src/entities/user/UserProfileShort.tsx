import { Context } from '@/server/context'

interface IProps {
  user: Context['user']
}

const ProfileShort = ({user}: IProps) => {
  if (!user) 
    return null

  return (
    <span className="header-user-profile-mc">
      <span className="name">{user.name}</span>
    </span>
  )
}

export default ProfileShort
