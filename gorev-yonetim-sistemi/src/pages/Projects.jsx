import React from "react";

function Projects() {
  const handleLogout = () => {
    localStorage.removeItem("token");  // Örnek logout işlemi
    localStorage.removeItem("user");
    window.location.href = "/login";  // Login sayfasına yönlendir
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>Projeler Sayfası</h2>
      <p>Hoşgeldin! Burada projelerin listelenecek.</p>
      <button onClick={handleLogout}>Çıkış Yap</button>
    </div>
  );
}

export default Projects;