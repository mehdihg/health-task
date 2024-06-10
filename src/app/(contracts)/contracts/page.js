'use client'
import ProgressContract from "@/app/_components/progresscontract/ProgressContract";
import styles from "./contracts.module.css";
import ContractTitle from "@/app/_components/contractTitle/ContractTitle";
import message from "../../../../public/icons/message.png";
import GenderForm from "@/app/_components/genderform/GenderForm";
import { useState } from "react";
export default function Contracts() {
  const currentStep = 1;
  const totalSteps = 9;
  const genderOptions = [
    { value: "female", label: "خانم" },
    { value: "male", label: "آقا" },
    { value: "noPreference", label: "فرقی ندارد" },
  ];

  const [selectedGender, setSelectedGender] = useState("noPreference");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  return (
    <div>
      <ContractTitle title={"مشخصات مورد انتظار مراقب"} image={message} />
      <ProgressContract currentStep={currentStep} totalSteps={totalSteps} />
      <GenderForm selectedGender={selectedGender} handleGenderChange={handleGenderChange} genderOptions={genderOptions} />
    </div>
  );
}
