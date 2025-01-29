import { useState, useEffect } from "react";

function UserProfile() {
  const [profilePic, setProfilePic] = useState(null);
  const [bio, setBio] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    instagram: "",
    linkedin: "",
  });

  // Load saved data on component mount
  useEffect(() => {
    const savedBio = localStorage.getItem("bio");
    const savedLinks = JSON.parse(localStorage.getItem("socialLinks"));
    const savedProfilePic = localStorage.getItem("profilePic");

    if (savedBio) setBio(savedBio);
    if (savedLinks) setSocialLinks(savedLinks);
    if (savedProfilePic) setProfilePic(savedProfilePic);
  }, []);

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>DJ Profile</h2>

      {profilePic && (
        <img
          src={profilePic}
          alt="Profile"
          style={{
            display: "block",
            margin: "0 auto",
            width: 100,
            height: 100,
            borderRadius: "50%",
          }}
        />
      )}

      <p>{bio}</p>

      <h3>Social Links</h3>
      <p>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </p>
      <p>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}

export default UserProfile;
