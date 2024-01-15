// Importing required dependencies
import Link from 'next/link';
import Image from 'next/image';

// Navbar component
const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-[#00206080] opacity-90 backdrop-blur-lg  h-20 mx-auto text-white p-4">
            <div className="container mx-auto flex justify-between  items-center">
                <Link className='mt-[-1.2rem]' href="/">
                    <Image src="/logo.png" alt="Digital Workspaces" width={150} height={50} />
                </Link>

                <ul className="flex space-x-4  mt-[-1.2rem]">
                    {['HOME', 'ABOUT US', 'CONTACT US'].map((item) => (
                        <li key={item}>

                            {/* <h2 className="hover:text-[#FFAB00]">{item}</h2> */}
                            <h4 className="scroll-m-20 text-base font-normal tracking-wide hover:text-[#FFAB00] hover:scale-110 duration-200">
                                {item}
                            </h4>

                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
