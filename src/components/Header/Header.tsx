"use client";

import { useEffect, useState } from "react";
import {
  Heart,
  ShoppingCart,
  Search,
  Menu,
  ChevronRight,
  ChevronLeft,
  X,
} from "lucide-react";
import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";
import { motion } from "motion/react";

const categories = ["Elektronika", "Kiyim", "Oziq-ovqat", "Uy-ro'zg'or"];
type Header = {
  mode?: "white" | "black" | "transparentBlack" | "transparentWhite";
  garantias?: boolean;
  position?: "fixed" | "absolute" | "relative" | "sticky" | "static";
};

export default function Header({
  mode = "white",
  garantias = true,
  position = "absolute",
}: Header) {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("transparent");
  const [logo, setLogo] = useState("/logo_white.svg");

  useEffect(() => {
    if (mode === "transparentBlack") {
      setLogo("/logo_dark.svg");
      setColor("black");
      setBgColor("transparent");
    }
    if (mode === "transparentWhite") {
      setLogo("/logo_white.svg");
      setColor("white");
      setBgColor("transparent");
    }
    if (mode === "black") {
      setLogo("/logo_white.svg");
      setColor("white");
      setBgColor("black");
    }
    if (mode === "white") {
      setLogo("/logo_dark.svg");
      setColor("black");
      setBgColor("white");
    }
  }, [mode]);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (typeof document !== "undefined") {
      document.querySelector("body")!.classList.toggle("overflow-hidden");
    }
  };

  return (
    <>
      {garantias && (
        <div className={styles.topNav}>
          <button>
            <ChevronLeft size={22} />
          </button>
          <h1>Гарантия лучшей цены</h1>

          <button>
            <ChevronRight size={22} />
          </button>
        </div>
      )}
      <header
        className={styles.header}
        style={{
          width: "100%",
          position: position,
          backgroundColor: bgColor,
          color: color,
        }}
      >
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.burgerMenu}>
              <button onClick={toggleMobileMenu} aria-label="Menyu">
                <Menu size={24} color={color} />
              </button>
            </div>

            <nav>
              <ul className={styles.categories}>
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link href={`${category.toLowerCase()}`}>{category}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link href={"/"} rel="preload" className={styles.logo}>
              <Image
                className={styles.logoImg}
                src={logo}
                alt="logo"
                width={50}
                height={50}
                priority
              />
              <span>orzu store</span>
            </Link>

            <div className={styles.actions}>
              <button aria-label="likes">
                <Heart size={24} />
              </button>
              <button aria-label="basket">
                <ShoppingCart size={24} />
              </button>
              <button aria-label="search">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className={`${styles.mobileMenu} ${!isOpen && styles.opened} `}>
        <div className={styles.leftSide}>
          <div className="flex justify-between items-center">
            <Link href={"/"} rel="preload" className={styles.logo}>
              <Image
                className={styles.logoImg}
                src={"/logo_dark.svg"}
                alt="logo"
                width={50}
                height={50}
                priority
              />
              <span>orzu store</span>
            </Link>
            <button onClick={toggleMobileMenu}>
              <X size={24} />
            </button>
          </div>
          <ul className={styles.list}>
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={`${category.toLowerCase()}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={`${styles.rightSide}`} onClick={toggleMobileMenu}></div>
      </nav>
      <div
        className={`${styles.setka}`}
        style={{
          zIndex: isOpen ? 0 : -1,
          opacity: isOpen ? 1 : 0,
        }}
      ></div>
    </>
  );
}
