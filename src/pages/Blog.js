const blogPosts = [
  {
    title: "Pengalaman Magang di Startup Teknologi",
    content: "Saya terlibat dalam project nyata bersama tim profesional..."
  },
  {
    title: "Tips Belajar Fullstack JavaScript",
    content: "Kuasai dasar HTML, CSS, JavaScript lalu lanjut ke React dan Node.js..."
  }
];

function Blog() {
  return (
    <div>
      <h2 className="mb-4">Blog & Pengalaman Kerja</h2>
      {blogPosts.map((post, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h4 className="card-title">{post.title}</h4>
            <p className="card-text">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
