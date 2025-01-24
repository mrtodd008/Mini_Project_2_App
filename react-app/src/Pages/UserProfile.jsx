import { useState } from "react";

function UserProfile() {
  const [profilePic, setProfilePic] = useState(null);
  const [bio, setBio] = useState("");
  const [socialLinks, setSocialLinks] = useState({
    twitter: "",
    linkedin: "",
    instagram: "",
  });

  const handleUpload = (e) =>
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  const handleBioChange = (e) => setBio(e.target.value);
  const handleSocialChange = (e) =>
    setSocialLinks({ ...socialLinks, [e.target.name]: e.target.value });

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <h4>Profile Picture</h4>
        <input type="file" onChange={handleUpload} />
        {profilePic && (
          <img
            src={profilePic}
            alt="Profile"
            style={{ width: 100, height: 100 }}
          />
        )}
      </div>
      <div>
        <h4>Bio</h4>
        <textarea
          value={bio}
          onChange={handleBioChange}
          placeholder="Write something about yourself..."
        />
      </div>
      <div>
        <h4>Social Media Links</h4>
        <input
          type="text"
          name="twitter"
          value={socialLinks.twitter}
          onChange={handleSocialChange}
          placeholder="Twitter URL"
        />
        <input
          type="text"
          name="linkedin"
          value={socialLinks.linkedin}
          onChange={handleSocialChange}
          placeholder="LinkedIn URL"
        />
        <input
          type="text"
          name="instagram"
          value={socialLinks.instagram}
          onChange={handleSocialChange}
          placeholder="Instagram URL"
        />
      </div>
    </div>
  );
}

export default UserProfile;
