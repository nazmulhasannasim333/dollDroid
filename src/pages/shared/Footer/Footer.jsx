import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer text-white p-10 py-24 bg-black">
        <div className="lg:ps-32">
        <div className="py-5 text-orange-500 font-extrabold text-4xl">
          <Link className="flex items-center " to="/">
            <img className="h-10 w-16" src="https://photo-cdn2.icons8.com/xTahwouZ_2RP5XNdzmBMtCbp-N5QjD8cPXnTu3HPFGg/rs:fit:2223:1072/wm:1:re:0:0:0.65/wmid:moose/q:98/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L2VkaXRvci9vYmpl/Y3QvMzEyL2JmYzc2/ZTBmLTFmN2QtNDA2/ZS1iODc3LWMzNjVh/ODNmNjg3OC5wbmc.png" alt="" />
            <span>DollDroid</span>
          </Link>
        </div>
          <p>
            DollDroid Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <div className="flex gap-5 items-center">
            <p>Follow Us ---</p>
            <a href="https://www.facebook.com/nazmulhasannasim333" target="blank"><FaFacebook className="h-6 w-6 text-white cursor-pointer hover:text-indigo-500" /></a>
            <a href="https://twitter.com/NHnasim333" target="blank"><FaTwitter className="h-6 w-6 text-white cursor-pointer hover:text-indigo-500" /></a>
            <a href="https://www.instagram.com/nazmulhasannasim333/" target="blank"><FaInstagram className="h-6 w-6 text-white cursor-pointer hover:text-indigo-500" /></a>
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">Products</a>
          <Link to="/allToys" className="link link-hover">All Toys</Link>
          <Link to="/myToys" className="link link-hover">My Toys</Link>
          <Link to="/blog" className="link link-hover">Blog</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-slate-400">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 text-slate-700"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="line w-full h-[1px] absolute left-0 opacity-20 md-[6px] bg-[#969696]"></div>
      <div className="text-center py-5 bg-black text-white">
        <p>Copyright © 2023 - All right reserved by DollDroid Industries Ltd</p>
      </div>
    </>
  );
};

export default Footer;
