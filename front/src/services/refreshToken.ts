import api from '@/services/api'
import { login, saveRefreshToken, getRefreshToken } from '@/services/auth'

const refreshToken = async () => {
    api.post('/auth/refresh', {
        refresh_token: getRefreshToken()
    }).then((response) => {
        if (response !== undefined) {
            const data = response.data

            login(data.token)
            saveRefreshToken(data.refresh_token)
        }
    }
    )
}

export default refreshToken