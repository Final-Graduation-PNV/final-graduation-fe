import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { editProfile, seeProfile } from "../../api/authAPI";
import CityList from "../../components/features/city/CityList";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";
import "../../styles/Profile/EditProfile.scss";
import { setImageUser, setUserName } from "../../utils/localStorageUtils";
import Cart from "../Modals/Cart";

function EditProfile() {
  const navigate = useNavigate();
  const [inforProfile, setInforProfile] = useState({
    name: "",
    avatar: "",
    phone: "",
    birth: "",
    gender: "",
    address: "",
    city: ""
  });
  setImageUser(inforProfile.avatar)
  setUserName(inforProfile.name)
  const [imgFile, setImgFile] = useState(null);

  const { AlertProfile } = Cart()

  useEffect(() => {
    const getUserProfile = async () => {
      const res = await seeProfile();
      setInforProfile(res.data.user)
    }
    getUserProfile()
  }, [])

  const saveProfileHandler = async () => {

    const handleSave = async (data) => {
      try {
        const res = await editProfile(data);
        console.log("edit profile: ", res)

        AlertProfile(res.data.message)
      } catch (err) {
        console.log("err edit profile:", err)
      }
    }
    if (imgFile) {
      const formData = new FormData()
      formData.append('file', inforProfile.avatar)
      formData.append("upload_preset", "gl32w86e")
      formData.append("cloud_name", "dx88ipscr")
      await axios.post("https://api.cloudinary.com/v1_1/dx88ipscr/image/upload", formData)
        .then((res) => {
          handleSave({ ...inforProfile, avatar: res.data.secure_url });
        })
    } else {
      handleSave(inforProfile);
    }

  }

  const changeHandler = (e) => {
    setInforProfile({ ...inforProfile, [e.target.name]: e.target.value })
  }
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImgFile(event.target.files[0]);
      let reader = new FileReader();
      reader.onload = (e) => {
        setInforProfile({ ...inforProfile, avatar: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  console.log("infor ", inforProfile)
  console.log("img file:", imgFile);
  return (
    <>
      <Header />
      <div className="container-EditProfile">
        <div className="container-editprofile">
          <p className="editProfile__tittle">Account Setting</p>
          <div className="editProfile">
            <div className="editprofile-info">
              <div className="editprofile-account">
                <div className="editprofile-info__img">
                  <img src={inforProfile.avatar} style={{ width: 100, height: 100, borderRadius: 50 }} alt="Account image" />
                </div>
                <div className="editProfile-info-text">
                  <input className="editProfile-info-text__name" value={inforProfile.name} name="name" onChange={changeHandler} />
                  <input name="image" type="file" onChange={onImageChange} />

                </div>
              </div>
              <div className="editprofile-form">
                <div className="editprofile-location">
                  <p className="editprofile-location__title">Date of birth:</p>
                  <input className="editinfor-text-birth__input" type="date" value={inforProfile.birth} name="birth" onChange={changeHandler} />
                </div>
                <div className="editprofile-location">
                  <p className="editprofile-location__title">City: </p>
                  <select value={inforProfile.city} name="city" onChange={changeHandler} className="edit-cityProfile">
                    {CityList.map((city, id) => (
                      <option key={id} value={city.name}>{city.name}</option>
                    ))}
                  </select>
                </div>
                <div className="editprofile-location">
                  <p className="editprofile-location__title">Address: </p>
                  <input className="editprofile-location__text" value={inforProfile.address} name="address" onChange={changeHandler} />
                </div>
                <div className="editprofile-gener">
                  <div className="editprofile-phone">
                    <p className="editprofile-phone__title">Phone:</p>
                    <input className="editprofile-phone__text" value={inforProfile.phone} name="phone" onChange={changeHandler} />
                  </div>
                  <div className="editprofile-gender">
                    <p className="editprofile-gender__title">Gender:</p>
                    <select value={inforProfile.gender} name="gender" onChange={changeHandler} className="editGenderProfile">
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Male">Other</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
            <div className="btn-edit">
              <div className="btn-edit btn-edit__cancel" onClick={() => navigate("/profile")}>Cancel</div>
              <div className="btn-edit btn-edit__save" onClick={() => { saveProfileHandler() }}>Save</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>


  )

}
export default EditProfile