function Navbar() {
    return (
    <nav className="py-5.5 flex items-center justify-between sticky top-0">
      <div className="text-white">
        <a href="#" className="text-2xl">Ardhika<span className="text-[#34D399]">.</span></a>
        </div>
        <ul className="text-[#B4B3BB] flex gap-5">
            <li><a href="#tentang" className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#34D399] after:transition-transform after:duration-300 after:ease-out hover:after:origin-right hover:after:scale-x-100 hover:text-[#DDD6C7]">Tentang</a></li>
            <li><a href="#proyek" className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#34D399] after:transition-transform after:duration-300 after:ease-out hover:after:origin-right hover:after:scale-x-100 hover:text-[#DDD6C7]">Proyek</a></li>
            <li><a href="#sertifikat" className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#34D399] after:transition-transform after:duration-300 after:ease-out hover:after:origin-right hover:after:scale-x-100 hover:text-[#DDD6C7]">Sertifikat</a></li>
            <li><a href="#kontak" className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#34D399] after:transition-transform after:duration-300 after:ease-out hover:after:origin-right hover:after:scale-x-100 hover:text-[#DDD6C7]">Kontak</a></li>
            <li className="pl-3.5"><a href="/documents/CV-ATS-Ardhika.pdf" download={'CV-ATS-Ardhika.pdf'} className="border-2 border-[#34D399] p-1.5 rounded-lg transition-colors duration-300 ease-in-out hover:bg-[#34D399]/20 hover:text-[#34D399]">Unduh CV</a></li>
        </ul>
    </nav>
    )
}

export default Navbar