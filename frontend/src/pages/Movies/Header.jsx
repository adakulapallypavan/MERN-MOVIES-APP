import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white py-6 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-5xl font-extrabold tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <Link
  to="/"
  className="hover:text-gray-400 transition-colors duration-300"
  style={{
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '32px',
    color: '#E50914', // Netflix red
    textTransform: 'uppercase',
    position: 'relative', // For the underline
    paddingBottom: '5px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)', // Soft glow around the text
  }}
>
  My Movie App
  <span
    style={{
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '2px',
      backgroundColor: '#E50914', 
    }}
  ></span>
</Link>










        </div>
      </div>
    </header>
  );
};

export default Header;
