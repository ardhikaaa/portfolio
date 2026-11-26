function Navbar() {
    return (
    <div className="py-5.5 flex items-center justify-between">
      <div className="text-white">
        <a href="#hero">My Portfolio</a>
        </div>
        <ul className="text-white flex gap-5">
            <li><a href="">Tentang</a></li>
            <li><a href="">Proyek</a></li>
            <li><a href="">Sertifikat</a></li>
            <li><a href="">Kontak</a></li>
            <li className="pl-3.5"><a href="" download>Unduh CV</a></li>
        </ul>
    </div>
    )
}

export default Navbar