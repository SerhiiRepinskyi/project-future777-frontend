import { useEffect} from 'react';
import { useDispatch } from 'react-redux';

import jwt_decode from "jwt-decode";
import { API } from 'Services/API';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from 'redux/auth/authAPISlice';

// создаем в HTML скрипт, который делает запрос на 'https://accounts.google.com/gsi/client'
const src = 'https://accounts.google.com/gsi/client'
const loadScript = (src) =>
new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve()
    const script = document.createElement('script')
    script.src = src
    script.id = "script"
    script.async = true
    script.defer = true
    script.onload = () => resolve()
    script.onerror = (err) => reject(err)
    document.head.appendChild(script)
})

const GoogleAuth = () => {
    const [LoginGoogle] = API.useLoginGoogleUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate()


    useEffect(() => {

        const id = "977057280335-41hunm9r5aqak6m0vvdeq1p06rm7b5dg.apps.googleusercontent.com"

        loadScript(src)
            .then(() => {
                // /*global google*/
                if (window.google && window.google.accounts && window.google.accounts.id) {
                    window.google.accounts.id.initialize({ // инициализируемся в гугл на основе объекта конфигурации
                        client_id: id, // идентификатор клиента приложения, полученный при регистрации console.cloud.google.com
                        callback: handleCredentialResponse,// функция для обработки токена
                    })
                    window.google.accounts.id.renderButton( // рендерим кнопку гугла
                        document.getElementById("signInDiv"),
                        { theme: 'outline', size: 'large', locale: "en", width: 344, shape: "pill" }
                    )
                }
            })
            .catch(console.error)
        })

    
    async function handleCredentialResponse(response) {
   
        const { email, name } = jwt_decode(response.credential);
    
        const googleResponse = await LoginGoogle({ email, name });
    
        if (googleResponse.data && googleResponse.data.token) {
            dispatch(setCredentials(googleResponse.data));
            navigate('/home');
        }
    }

    return (

            <div id="signInDiv"></div> 
    )
}

export default GoogleAuth;
