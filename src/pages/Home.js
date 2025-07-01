function Home() {
  return (
    <div className="row align-items-center">
      <div className="col-md-6 text-start">
        <h1 className="display-4 mb-3">Selamat Datang!</h1>
        <p className="lead">Saya adalah <strong>Fullstack JavaScript Developer</strong> yang berfokus pada solusi web modern.</p>
        <a href="#portfolio" className="btn btn-primary mt-3">Lihat Portofolio</a>
      </div>
      <div className="col-md-6 text-center">
        <img src="https://via.placeholder.com/250" alt="Foto Profil" className="rounded-circle img-fluid shadow" />
      </div>
    </div>
  );
}

export default Home;
