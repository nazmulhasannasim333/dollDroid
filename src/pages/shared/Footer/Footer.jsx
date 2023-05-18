import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer text-white p-10 bg-black  ">
        <div className="lg:ps-32">
          <h2 className="text-4xl font-bold text-indigo-600">DollDroid</h2>
          <p>
            DollDroid Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
          <div className="flex gap-5 items-center">
            <p>Follow Us ---</p>
            <FaFacebook className="h-6 w-6 text-white cursor-pointer hover:text-indigo-500" />
            <FaTwitter className="h-6 w-6 text-white cursor-pointer hover:text-indigo-500" />
            <FaInstagram className="h-6 w-6 text-white cursor-pointer hover:text-indigo-500" />
          </div>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">Toys</a>
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
                className="input input-bordered w-full pr-16"
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
