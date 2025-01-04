"use client";

import { useState } from "react";
import { Heart, ShoppingCart, Search, Menu, X } from "lucide-react";
import styles from "./header.module.scss";
import Image from "next/image";

const categories = ["Elektronika", "Kiyim", "Oziq-ovqat", "Uy-ro'zg'or"];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.burgerMenu}>
          <button onClick={toggleMobileMenu} aria-label="Menyu">
            <Menu size={24} />
          </button>
        </div>

        <nav className={styles.categories}>
          {categories.map((category) => (
            <a key={category} href={`${category.toLowerCase()}`}>
              {category}
            </a>
          ))}
        </nav>

        <div className={styles.logo}>
          <Image src={"/logo.svg"} alt="logo" fill priority />
        </div>

        <div className={styles.actions}>
          <button aria-label="Sevimlilar">
            <Heart size={24} />
          </button>
          <button aria-label="Savatcha">
            <ShoppingCart size={24} />
          </button>
          <button aria-label="Qidirish">
            <Search size={24} />
          </button>
        </div>
      </header>

      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={toggleMobileMenu}
          aria-label="Yopish"
        >
          <X size={24} />
        </button>
        {categories.map((category) => (
          <a
            key={category}
            href={`#${category.toLowerCase()}`}
            onClick={toggleMobileMenu}
          >
            {category}
          </a>
        ))}
      </div>
    </>
  );
}
