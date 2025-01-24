import { useState } from "react";

function Profile() {
  const [profilePic, setProfilePic] = useState(null);
  const [bio, setBio] = useState("");
  const [socialLinks, setSocialLinks] = useState({ twitter: "", linkedin: "" });

  const handleUpload = (e) =>
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  const handleSaveBio = () => alert(`Bio saved: ${bio}`);
  const handleSocialChange = (e) => {
    setSocialLinks({ ...socialLinks, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <input type="file" onChange={handleUpload} />
      {profilePic && (
        <img
          src={profilePic}
          alt="Profile"
          style={{ width: 100, height: 100 }}
        />
      )}
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Enter your bio"
      />
      <button onClick={handleSaveBio}>Save Bio</button>

      <h3>Social Links</h3>
      <input
        name="twitter"
        value={socialLinks.twitter}
        onChange={handleSocialChange}
        placeholder="Twitter URL"
      />
      <input
        name="linkedin"
        value={socialLinks.linkedin}
        onChange={handleSocialChange}
        placeholder="LinkedIn URL"
      />
    </div>
  );
}

export default Profile;
