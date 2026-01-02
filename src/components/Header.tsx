import HamburgerIcon from '../assets/hamburger-icon.png'
export default function Header(){
  return(
    <div>
      <div className="fixed py-4 px-5 flex justify-between top-0 right-0 left-0 md:px-8 items-center border-b border-gray-400 bg-white">
        <div className="hidden sm:block w-8">
          <img src={HamburgerIcon} alt="hamburger-icon" className='w-full' />
        </div>
        <div className="text-[20px] font-[500] font-[Roboto, sans-serif] sm:text-[25px]">Linker</div>
        <div className='w-8'>
        </div>
      </div>
    </div>
  );
}