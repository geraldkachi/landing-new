import { IData } from "./successHandler";

export interface Identity {
  calls?: string
  email?: string;
  bvnNumber?: string;
  customerId?: string;
  bvnLastName?: string;
  bvnFirstName?: string;
  bvnPhoneNumber?: string;
  bvnDateOfBirth?: string;
  isBVNVerified?: boolean;
  isStaffCustomer?: boolean
  isEmailVerified?: boolean;
  isPhoneNumberVerified?: boolean;
}

export interface User {
  meta: string;
  customer: Customer;
  identity: Identity;
  deviceId: object;
}

export interface Verification {
  isActive: boolean;
  data: User;
}

export interface Customer {
  stateOfResidence: any;
  city: string;
  id?: string;
  dob?: string;
  email?: string;
  image?: string;
  gender?: string;
  lastName?: string;
  blockedBy?: string;
  lastLogin?: string;
  firstName?: string;
  otherName?: string;
  businessId?: string;
  homeAddress?: string;
  phoneNumber?: string;
  maritalStatus?: any;
  profileComplete?: boolean;
  loanPreQualification?: {
    employmentRecordComplete?: string
  };
  password?: string
}
export interface ILoanStatus {
  code: number;
  stage: string;
  btnTxt: string;
  category: string;
  btnIsActive: boolean;
  description: string;
  data?: null | {
    loan?: {
      id?: string
      assignmentId?: string
      defaultAmount?: string
      totalRepayment?: string
      nextRepaymentDate?: string
      nextRepaymentAmount?: string
    }
  }
}
export { };

// export interface LoanStatusTypes {
//   btnTxt: string
//   category: string
//   code: number
//   data?: null | {
//     loan?: {
//       id?: string
//       assignmentId?: string
//       defaultAmount?: string
//       totalRepayment?: string
//       nextRepaymentDate?: string
//       nextRepaymentAmount?: string
//     }
//   }
//   description: string
//   stage: null | string
// }
