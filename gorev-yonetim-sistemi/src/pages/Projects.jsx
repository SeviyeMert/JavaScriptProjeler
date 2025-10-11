import React from "react";

function Projects() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <h2>Projeler Sayfası</h2>
      <button onClick={handleLogout}>Çıkış Yap</button>
    </div>
  );
}

export default Projects;
