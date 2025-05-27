export const validateAuthToken = (allowedUserTypes = []) => {
    return (req, res, next) => {
        try {
            //1. Validar si existen las cookies
            if(!req.cookies){
                return res.status(401).json({message: "No cookies found, authorization required"})
            }

            //2. extraer el token de las cookies
            const {authToken} = req.cookies;

            //3. Validar si el token existe
            if(!authToken){
                return res.status(401).json({message: "jwt must be provided"})
            }

            //4. Extraer toda la información que tiene el token
            const decoded = jsonWebToken.verify(authToken, config.JWT.secret)

            //Almacenar los datos del usuario en un request
            req.user = decoded

            //verificar el rol
            if(allowedUserTypes.length > 0 && !allowedUserTypes.includes(decoded.userType)){
                return res.status(403).json({message: "Access denied"})
            }

            //Si todo está bien, podemos continuar
            next()
            
        } catch (error) {
            console.log("error: " + error)
            return res.status(401).json({message: "Invalid token"})
        }
    }
}