import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <footer className="bg-blue-900 pt-3 text-center sm:text-xl md:text-left">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <img
              src="https://istad.co/resources/img/CSTAD_120.png"
              alt="CSTAD - Advanced IT Center in Cambodia"
              className="w-24 h-24 mx-auto md:mx-0"
            />
            <p className="mt-3 text-white">Start your IT career with CSTAD</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <p className="text-white font-bold">Learn More</p>
            <ul className="footer-ul">
              <li>
                <a href="course">Course</a>
              </li>
              <li>
                <a href="/page/news">IT News</a>
              </li>
              <li>
                <a href="/page/job-opportunity">Job Opportunity</a>
              </li>
              <li>
                <a href="/page/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/page/faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4">
            <p className="text-white font-bold">Contact Us</p>
            <ul className="footer-ul">
              <li>(+855) 95-990-910</li>
              <li>(+855) 93-990-910</li>
              <br />
              <li>
                <a href="https://t.me/istadkh" target="_blank">
                  <i className="fab fa-telegram i-style text-white pr-1"></i>
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCUaq9S8Gu4zteE-x77JT-kA"
                  target="_blank"
                >
                  <i className="fab fa-youtube i-style text-white pr-1"></i>
                  Youtube
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4">
            <p className="text-white font-bold">Follow Us</p>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fistad.co&amp;tabs&amp;width=255&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=536767018150991"
              width="255"
              height="130"
              style={{ border: "none", overflow: "hidden" }} // Fix: Replace the style attribute value with an object
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
        <hr className="border-white opacity-50" />
        <p className="text-white text-center text-2xl">
          ©<span>2024</span>
          <span>
            Center of Science and Technology Advanced Development | All Rights
            Reserved
          </span>
        </p>
      </div>
    </footer>
  );
}
