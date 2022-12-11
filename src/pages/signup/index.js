import React, { useState } from "react";
import SignupContainer from "../../layout/SignupContainer";
import Address from "./Address";
import BirthDay from "./BirthDay";
import BloodGroup from "./BloodGroup";
import Contact from "./Contact";
import Gender from "./Gender";
import NamePassword from "./NamePassword";
import ProfileImage from "./ProfileImage";
import Weight from "./Weight";

function Signup() {
  const [Step, setStep] = useState(0);

  const [UserName, setUserName] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const NamePass = {
    UserName,
    setUserName,
    Email,
    setEmail,
    Password,
    setPassword,
  };

  const [PhoneNo, setPhoneNo] = useState();
  const [AlterNativePhoneNo, setAlterNativePhoneNo] = useState();
  const [Social, setSocial] = useState();
  const Contacts = {
    PhoneNo,
    setPhoneNo,
    AlterNativePhoneNo,
    setAlterNativePhoneNo,
    Social,
    setSocial,
    cta: setStep,
  };

  const [Group, setGroup] = useState();
  const [WeightValue, setWeightValue] = useState();
  const [GenderValue, setGenderValue] = useState();

  const [StreetAddress, setStreetAddress] = useState();
  const [City, setCity] = useState();
  const [ZipCode, setZipCode] = useState();
  const Addresses = {
    StreetAddress,
    setStreetAddress,
    City,
    setCity,
    ZipCode,
    setZipCode,
    cta: setStep,
  };

  const [YearOld, setYearOld] = useState();
  const [OldDay, setOldDay] = useState();
  const [Month, setMonth] = useState();
  const bDAY = {
    YearOld,
    setYearOld,
    OldDay,
    setOldDay,
    Month,
    setMonth,
    cta: setStep,
  };

  const [Image, setImage] = useState();

  const handleSubmit = () => {
    console.log({
      UserName,
      Email,
      Password,
      PhoneNo,
      AlterNativePhoneNo,
      Social,
      BloodGroup: Group,
      Weight: WeightValue,
      Gender: GenderValue,
      StreetAddress,
      City,
      ZipCode,
      YearOld,
      OldDay,
      Month,
      Image,
    });
    window.open("/Dashboard/", "_self");
  };

  return (
    <SignupContainer
      text={
        {
          0: `Provide your real name for identity. Your name will be used for search.`,
          1: `Please provide correct phone no. This information will keep safe.`,
          2: `Your blood group need to accurate. If you don't know about it please contact nearest clinic`,
          3: `Note: you can not donate blood if you're under weight. Minimum weight for donation required 50kg`,
          4: `Define your gender will let us know bring new features for mother health care.`,
          5: `Please provide correct address. This information will keep safe.`,
          6: `Correct birthDate give you best experience with the community. Don't hide it.`,
          7: `Please do not use a model or doll avatar. Please keep faith on yourself you're beautiful too.`,
        }[Step]
      }
    >
      {
        {
          0: <NamePassword {...NamePass} cta={setStep} />,
          1: <Contact {...Contacts} />,
          2: <BloodGroup cta={setStep} Group={Group} setGroup={setGroup} />,
          3: (
            <Weight
              WeightVal={WeightValue}
              setWeightVal={setWeightValue}
              cta={setStep}
            />
          ),
          4: (
            <Gender
              GenderV={GenderValue}
              setGenderV={setGenderValue}
              cta={setStep}
            />
          ),
          5: <Address {...Addresses} />,
          6: <BirthDay {...bDAY} />,
          7: (
            <ProfileImage
              Image={Image}
              setImage={setImage}
              cta={handleSubmit}
            />
          ),
        }[Step]
      }
    </SignupContainer>
  );
}

export default Signup;
