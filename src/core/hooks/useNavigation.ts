import { useEffect } from 'react'
import { useAuth } from '../../app/modules/auth/hooks/useAuth'

export const useNavigation = () => {
  const { verifed, verifyCredentials } = useAuth()
  useEffect(() => {
    verifyCredentials()
  }, [])
  return { verifed }
}
