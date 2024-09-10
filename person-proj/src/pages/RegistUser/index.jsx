import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUsersToStorage } from "../../utils/saveUserToStorage";
import { getUsersFromStorage } from "../../utils/getUsersFromStorage";
import Button from "../../components/Button";
import NavigateButton from "../../components/NavigateButton";
import { ROUTE } from "Route";
import {
  BottomButtonsWrapper,
  Content,
  InputName,
  InputWrapper,
  StyledInput,
  Title,
  Wrapper,
} from "styles";
import axios from "axios";

function RegistUser() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleJobChange = (e) => {
    setJob(e.target.value);
  };
  useEffect(() => {
    if (name !== "" && age !== "" && job !== "") {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [name, age, job]);
  const registeUser = () => {
    if (buttonDisabled) {
      return;
    }

    // axios.post("요청URL",전달데이터);
    axios.post("http://localhost:8080/person/form",{ name, age, job });
    alert("등록되었습니다.");
    
    navigate(ROUTE.LIST);
    
  };//registeUser


  return (
    <Wrapper>
      <Title>사용자 정보 입력</Title>
      <Content>
        <InputWrapper>
          <InputName>이름</InputName>
          <StyledInput
            onChange={handleNameChange}
            type="text"
            placeholder="Enter your name"
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>나이</InputName>
          <StyledInput
            onChange={handleAgeChange}
            type="text"
            placeholder="Enter your age"
          />
        </InputWrapper>
        <InputWrapper>
          <InputName>직업</InputName>
          <StyledInput
            onChange={handleJobChange}
            type="text"
            placeholder="Enter your job"
          />
        </InputWrapper>
      </Content>
      <BottomButtonsWrapper>
        <Button text="입력" clickFunc={registeUser} disabled={buttonDisabled} />
        <NavigateButton
          disabled={buttonDisabled}
          text="목록으로"
          clickFunc={() => navigate(ROUTE.LIST)}
        />
      </BottomButtonsWrapper>
    </Wrapper>
  );
}

export default RegistUser;
