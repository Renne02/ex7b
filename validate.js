// ADD REGULAR EXPRESSION FUNCTION TO VALIDATE NUMBER ONLY IN STRING ATTRIBUTE
function isNumeric(value) {
	/*
		/^ : เริ่มต้นของ String
		? คือ optional
		/d คือ ตัวเลข
		+ คือมี 1 หรือมากกว่านั้น
		$/ คือจบ Sting
		.test(value) เอา value ไปตรวจสอบกับ REGULAR EXPRESSION ว่าถูกไหม
	*/

    return /^\d+$/.test(value);
}

function checkSID() {
	let sid = (document.getElementById("sid").value).trim();
  
	if (sid.length == 10 && isNumeric(sid)) {
	  return true;
	} else {
	  return false;
	}
}

function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (sid.length == 10) {
    return true;
  } else {
    return false;
  }
}

function checkCandiNo() {
	let candi = (document.getElementById("candi").value).trim();
  
	if (!isNumeric(candi) || !(candi >= 1 && candi <= 10)) {
	  return true;
	} else {
	  return false;
	}
  }
  
  function validateForm(){
	  if(!checkSID()){
		alert("Invalid value for Student ID!");
		document.getElementById("sid").focus();
		return false;
	  }else{
		  if(checkCandiNo()){
			alert("Invalid value for Candidate No!!");
			document.getElementById("candi").focus();
			return false;
		  }else{
			  alert("Your input data passes validation!!");
			  return true;
		  }
	  }
  }