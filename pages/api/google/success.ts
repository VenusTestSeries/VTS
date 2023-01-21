import { NextApiRequest, NextApiResponse } from "next"


const SuccessGoogleAuth = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await fetch('http://localhost:5000/auth/google/success', {

        })
        const result = await data.json()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({ error })
    }
}

export default SuccessGoogleAuth


// console.log(code)
// const { code } = req.query
// res.status(200).json({ code })
