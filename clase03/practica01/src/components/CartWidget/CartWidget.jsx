import { AiFillShopping } from 'react-icons/ai';
import imagen from '../../assets/react.svg'

export const CartWidget = () => {
    return (
        <div className='col-xl-3'>
            {/* <img src={imagen} alt="imagen" /> */}
            {/* <img src="/vite.svg" alt="" /> */}
            <i><AiFillShopping size={40}/></i>
            {/* <img width={'50px'} src="https://imgs.search.brave.com/SUy4vxiivPYcycORbkjxAlqc_zngoZK67B_WjCKHdY0/rs:fit:889:1200:1/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzE0/OTkvMTg1OC9wcm9k/dWN0cy8xMDY3X0Nh/cnJpdG9Qcm9kdWN0/b3NfMTIwMHgxMjAw/LnBuZz92PTE1Njkx/NDQwNDc" alt="carrito"/> */}
        </div>
    )
}

