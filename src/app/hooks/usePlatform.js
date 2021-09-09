import { useContext } from 'react'
import PlatformContext from 'app/contexts/PlatformContext'

const usePlatform = () => useContext(PlatformContext)

export default usePlatform
