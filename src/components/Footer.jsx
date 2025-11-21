const Footer = () => {
  return (
    <footer className="bg-slate-950 text-center py-6 border-t border-slate-800">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} MJ_Dev - Medin Jusufović. Sva prava
        zadržana.
      </p>
      <div className="mt-2 flex justify-center space-x-4">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          GitHub
        </a>
        <a
          href="mailto:jusufovicmedin@gmail.com"
          className="text-blue-400 hover:text-blue-300 transition"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
