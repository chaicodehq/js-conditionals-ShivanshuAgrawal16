/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here

  if (typeof password != 'string') {
    return 'weak';
  }

  
  const len = password.length

  if(len === 0) {
    return 'weak';
  }

  let isLengthGood = false;
  let isUpperInvolved = false;
  let isLowerInvolved = false;
  let isNumberInvolved = false;
  let isSpecialCharInvolved = false;


  let criteraMet = 0;
  if (len >= 8) {
    isLengthGood = true;
    criteraMet++;
  }
  for (let i = 0; i < len; i++) {
    let ascii = password[i].charCodeAt();

    if (ascii >= 65 && ascii <= 90) {
      isUpperInvolved = true;
    }
    else if (ascii >= 97 && ascii <= 122) {
      isLowerInvolved = true;
    }
    else if (ascii >= 48 && ascii <= 57) {
      isNumberInvolved = true;
    }
    else {
      isSpecialCharInvolved = true;
    }

    if (isUpperInvolved && isLowerInvolved && isNumberInvolved && isSpecialCharInvolved) {
      break;
    }
  }

  if (isUpperInvolved) criteraMet++;
  if (isLowerInvolved) criteraMet++;
  if (isNumberInvolved) criteraMet++;
  if (isSpecialCharInvolved) criteraMet++;

  if (criteraMet <= 1) {
    return 'weak';
  } else if (criteraMet <= 3) {
    return 'medium';
  } else if (criteraMet <= 4) {
    return 'strong';
  } else {
    return 'very strong';
  }

}
