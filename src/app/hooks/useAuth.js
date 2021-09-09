import { useContext } from 'react'
import AuthContext from 'app/contexts/SanctumAuthContext'

const useAuth = () => useContext(AuthContext)

export default useAuth
