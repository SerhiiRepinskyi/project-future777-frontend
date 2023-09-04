import { useEffect } from 'react';
import jwt_decode from "jwt-decode";

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
    // const dispatch = useDispatch();
    // const navigate = useNavigate()

    useEffect(() => {

        const id = "977057280335-41hunm9r5aqak6m0vvdeq1p06rm7b5dg.apps.googleusercontent.com"

        loadScript(src)
            .then(() => {
                /*global google*/
                google.accounts.id.initialize({ // инициализируемся в гугл на основе объекта конфигурации
                    client_id: id, // идентификатор клиента приложения, полученный при регистрации console.cloud.google.com
                    callback: handleCredentialResponse,// функция для обработки токена
                })
                google.accounts.id.renderButton( // рендерим кнопку гугла
                    document.getElementById("signInDiv"),
                    { theme: 'outline', size: 'large', locale: "en", width: 344, shape: "pill" } 
                )
            })
            .catch(console.error)
        })

    function handleCredentialResponse(response) {
    // нам приходит в response.credential токен, вытягиваем из гугла имя и почту
    // TODO: создать и експортировать функцию loginGoogleUser (она в файле operation) 
    // TODO: authSlice добавить в слайс auth в builder добавляем .addCase(loginGoogleUser.fulfilled, handleFulfilled)

        console.log("Encoded JWT ID token: " + response.credential);
        const {email, name} = jwt_decode(response.credential)
        console.log('name', name)
        console.log('email', email)
        
        // dispatch(loginGoogleUser({email, name}))

    }


    return (

            <div id="signInDiv"></div> 
    )
}

export default GoogleAuth;
