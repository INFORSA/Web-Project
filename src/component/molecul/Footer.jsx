import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className=" mx-auto flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-3">Temukan Kami di Sosial Media</h2>
          <div className="flex justify-center md:justify-center">
            <a href="#" className="mr-4 no-underline text-black">
              <FontAwesomeIcon style={{ fontSize: '2em' }} icon={faInstagram} /><div>INFORSA_UNMUL</div>
            </a>
            <a href="#" className="mr-4 no-underline text-black">
              <FontAwesomeIcon icon={faSpotify} style={{ fontSize: '2em' }} /><div>INPODCAST</div>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-3">Alamat Kami</h2>
          <p>Jalan Sambaliung No.9 Kampus Gunung Kelua</p>
          <p>Samarinda</p>
          <p>75119</p>
        </div>
        <div className="w-full md:w-1/3 text-center md:text-center">
          <h2 className="text-lg font-semibold mb-3">Video Profile</h2>
          <div className="embed-responsive aspect-ratio-16/9">
            <iframe
              className="embed-responsive-item"
              title="YouTube Video"
              src="https://www.youtube.com/embed/gli0Ak_m0Ks?si=fvkYf5UerG4FTteA"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
