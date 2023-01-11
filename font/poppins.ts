import { Poppins, } from '@next/font/google'
const poppins = Poppins({
    subsets: ['latin'], preload: true,
    weight: ['300', '400', '500', '600', '700']
})
export default poppins

