import Link from "next/link";

const Header = () => (
  <div>
    <header className="odc-header">
      <nav className="odc-header--top">
        <Link href="/">
          <a>Dashboard</a>
        </Link>
        <Link href="/">
          <a>HTS</a>
        </Link>
        <Link href="/">
          <a>ART</a>
        </Link>
        <Link href="/">
          <a>Analysis</a>
        </Link>
        <Link href="/">
          <a>Transfers</a>
        </Link>
      </nav>
    </header>
    <style jsx>{`
      .odc-header {
        display: flex;
        flex-direction: row;
        //position: fixed;
        background-color: #fff;
        padding: 1%;
        width: 100%;
        margin: 0;
        box-shadow: 0px 20px 35px 0px rgba(0, 0, 0, 0.1);
      }

      a {
        text-decoration: none;
        color: blue;
        font-size: 12px;
        padding: 0 10px;
        color: #4a4848;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
);

export default Header;
