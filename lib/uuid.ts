import { randomBytes } from "crypto"


const UUID = (size: number = 4) => {
    return randomBytes(size).toString("hex")
}

export default UUID