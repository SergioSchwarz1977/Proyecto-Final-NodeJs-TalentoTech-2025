import { generateToken } from '../data/tokenTest.js';

export const login = (req,res) =>{
    console.log(req.body)
    const { email, password } = req.body;
    if(email === 'test@gmail.com' && password === '123456'){
        const user = { id: '123', email: email };
        const token = generateToken(user);
        return res.json({ token });
    } else {
        return res.status(401).json({ message: 'Credencial invalida' });
    }   
}
