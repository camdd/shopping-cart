import { useEffect, useState } from "react";
import "./Header.css";

export function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <header className={visible ? '' : 'hidden'}>
      <nav className="navbar container">
        <ul className="navbar__menu">
          <li className="navbar__item with-submenu">
            <h1>TECHNOSHOP</h1>
          </li>
        </ul>
      </nav>
    </header>
  );
}
