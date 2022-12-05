export function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-800 text-white flex justify-center">
      <a href="https://github.com/yosuanicolaus/lucasloaves">
        &copy; Yosua Nicolaus {year}
      </a>
    </div>
  );
}
