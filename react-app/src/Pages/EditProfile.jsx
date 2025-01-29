import { useState, useEffect } from "react";

function EditProfile() {
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

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleSocialChange = (e) => {
    setSocialLinks({ ...socialLinks, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = () => {
    if (profilePic) localStorage.setItem("profilePic", profilePic);
    localStorage.setItem("bio", bio);
    localStorage.setItem("socialLinks", JSON.stringify(socialLinks));

    alert("Profile saved successfully!");
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>Edit Profile</h2>

      <div style={{ marginBottom: "15px" }}>
        <input type="file" onChange={handleUpload} />
        {profilePic && (
          <img
            src={profilePic}
            alt="Profile"
            style={{
              display: "block",
              marginTop: "10px",
              width: 100,
              height: 100,
              borderRadius: "50%",
            }}
          />
        )}
      </div>

      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Enter your bio"
        style={{
          width: "100%",
          height: "80px",
          marginBottom: "15px",
          padding: "10px",
          fontSize: "14px",
        }}
      />

      <h3>Social Links</h3>
      <input
        name="instagram"
        value={socialLinks.instagram}
        onChange={handleSocialChange}
        placeholder="Instagram URL"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "14px",
        }}
      />
      <input
        name="linkedin"
        value={socialLinks.linkedin}
        onChange={handleSocialChange}
        placeholder="LinkedIn URL"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          fontSize: "14px",
        }}
      />

      <button
        onClick={handleSaveProfile}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Save Profile
      </button>
    </div>
  );
}

export default EditProfile;
