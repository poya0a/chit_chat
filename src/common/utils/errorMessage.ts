const getErrorMassage = (fieldName: String) => {
  switch (fieldName) {
    case (fieldName = "userEmail"):
      return "아이디를 입력해 주세요.";
      break;
    case (fieldName = "userPassword"):
      return "아이디를 입력해 주세요.";
      break;
    case (fieldName = "userId"):
      return "아이디를 입력해 주세요.";
      break;
    case (fieldName = "userPw"):
      return "비밀번호를 입력해 주세요.";
      break;
    case (fieldName = "mbrId"):
      return "아이디를 입력해 주세요.";
      break;
    case (fieldName = "mbrPw"):
      return "비밀번호를 입력해 주세요.";
      break;
    case (fieldName = "password"):
      return "비밀번호를 입력해 주세요.";
      break;
    case (fieldName = "mbrPwCheck"):
      return "비밀번호를 한 번 더 입력해 주세요.";
      break;
    case (fieldName = "passwordCheck"):
      return "비밀번호를 한 번 더 입력해 주세요.";
      break;
    case (fieldName = "mbrNm"):
      return "이름을 입력해 주세요.";
      break;
    case (fieldName = "emailAddr"):
      return "이메일을 입력해 주세요.";
      break;
    case (fieldName = "hpNo"):
      return "휴대폰 번호를 입력해 주세요.";
      break;
    case (fieldName = "verifyNumber"):
      return "인증번호를 입력해 주세요.";
      break;
    case (fieldName = "genderCd"):
      return "성별을 선택해 주세요.";
      break;
    case (fieldName = "birthYymmdd"):
      return "생년월일을 입력해 주세요.";
      break;
    default:
  }
};

const getValidMassage = (fieldName: String) => {
  switch (fieldName) {
    case (fieldName = "mbrId"):
      return "6자리 이상 15자 이하 영문 혹은 영문과 숫자를 조합하여 입력해 주세요.";
      break;
    case (fieldName = "mbrPw"):
      return "영문, 숫자 포함 8자리 이상 50자 이하 입력해 주세요.";
      break;
    case (fieldName = "password"):
      return "영문, 숫자 포함 8자리 이상 50자 이하 입력해 주세요.";
      break;
    case (fieldName = "mbrPwCheck"):
      return "영문, 숫자 포함 8자리 이상 50자 이하 입력해 주세요.";
      break;
    case (fieldName = "passwordCheck"):
      return "영문, 숫자 포함 8자리 이상 50자 이하 입력해 주세요.";
      break;
    case (fieldName = "emailAddr"):
      return "이메일 형식이 올바르지 않습니다.";
      break;
    case (fieldName = "hpNo"):
      return "잘못된 휴대폰 번호입니다. 확인 후 다시 입력해 주세요.";
      break;
    case (fieldName = "birthYymmdd"):
      return "생년월일 형식이 올바르지 않습니다.";
      break;
    default:
  }
};

export { getErrorMassage, getValidMassage };
