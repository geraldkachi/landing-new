/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
import { AES, enc } from 'crypto-js';
// import {
//   AIcardposoutlin,
//   AIwallet1Outlin,
//   AIcoin1Outlin,
//   AIsecuritycardoutlin
// } from 'arvara-icons';
// import MasterCard from '../assets/wallet/master-card.svg';
// import VisaCard from '../assets/wallet/visa-credit-card.svg';
// import Fastcash from '../assets/loan/fastcash.svg';
// import Staff from '../assets/loan/staff.svg';
// import Fedworker from '../assets/loan/fedworkers.svg';
// import Remita from '../assets/loan/remitaloan.svg';
import { format } from 'date-fns';

export const stripNumber = (val) => {
  let no = val;
  if (val?.includes('+234')) {
    const temp = val?.split('+234');
    no = `0${temp[1]}`;
  }
  if (val?.includes('234')) {
    const temp = val?.split('234');
    no = `0${temp[1]}`;
  }
  return no;
};

export function UpperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function LowerCaseFirst(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

export function FormatNumber(numb, fixed) {
  if(!numb) return '0.00'
  const num = Number(numb);

  var array = Math.floor(num).toString().split('');
  var index: number = -3;
  while (array.length + index > 0) {
    array.splice(index, 0, ',');
    index -= 4;
  }

  if (fixed > 0) {
    const decimalPart = num.toFixed(fixed).split('.')[1];
    return array.join('') + '.' + decimalPart;
  }
  return array.join('');
}

export const moneyFormmater = (value: number) => {
  const formatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0
  });
  const formattedNumber = formatter.format(value); // "₦1,234,567"
  return formattedNumber;
};

export const nextRepaymentDay = (amount: string, interest: string, tenor: number) => {
  const part = Number(tenor) <= 30 ? 1 : Number(tenor) / 30;
  const totalInterest = Number(interest) * part;
  return Math.ceil(Number(amount) + Number(totalInterest));
};

export const totalRepay = (amount: string, interest: string) => {
  const loanAmount = parseFloat(amount);
  const interestRate = parseFloat(interest);
  const totalRepayment = loanAmount + (loanAmount * interestRate) / 100;
  return totalRepayment;
};

export const convertDaysToMonths = (days: number): number => {
  if (days < 30) {
    return days;
  } else {
    const months = days / 30;
    return months;
  }
};

export const loanPurposes = [
  'Rent',
  'Car',
  'Travel',
  'Medical',
  'Business',
  'School Fees',
  'Others',
];

export const encryptData = (message: string) => {
  const encrypts = AES.encrypt(message, import.meta.env.VITE_ENCRYPTION_KEY).toString();
  return encrypts;
};

export const decryptData = (message: string) => {
  const decrypts = AES.decrypt(message, import.meta.env.VITE_ENCRYPTION_KEY).toString(enc.Utf8);
  return decrypts;
};

// export const loanRoutes = {
//   fastcash: '/dashboard/fastcash-loan',
//   ippis: '/dashboard/fedpay-loan',
//   remita: '/dashboard/remita-loan',
//   staff: '/dashboard/staff-loan',
//   loantypes: '/dashboard/loan-type',
//   employmentRecord: '/dashboard/employment-record'
// }
// export const arvoPayRoutes = {
//   history: '/arvo-pay/history',
//   createBatch: '/arvo-pay/create-batch',
// }

// export const loanTypes = {
//   remita: {
//     bg: 'bg-[#EEF0F6]',
//     title: 'Remita Loan',
//     link: loanRoutes.remita,
//     allowException: true,
//     icon: <img src={Remita} className="mx-auto" />,
//     iconbg: 'bg-[#DBE2F5]',
//     description: 'Loan period of 30 - 90 days. Maximum loan of N1,000,000'
//   },
//   ippis: {
//     bg: 'bg-[#EAF3F1]',
//     allowException: true,
//     title: 'Fed Workers',
//     link: loanRoutes.ippis,
//     icon: <img src={Fedworker} className="mx-auto" />,
//     iconbg: 'bg-[#BCE9E0]',
//     description: 'Loan period of 7 - 60 days. Maximum loan of N1,000,000'
//   },
//   fastcash: {
//     bg: 'bg-[#F6F2EC]',
//     title: 'Fast Cash',
//     allowException: false,
//     link: loanRoutes.fastcash,
//     icon: <img src={Fastcash} className="mx-auto" />,
//     iconbg: 'bg-[#F6E4C6]',
//     description: 'Loan period of 7 - 60 days. Maximum loan of N1,000,000'
//   },
//   staff: {
//     title: 'Staff',
//     bg: 'bg-[#F7F4F3]',
//     allowException: false,
//     link: loanRoutes.staff,
//     icon: <img src={Staff} className="mx-auto" />,
//     iconbg: 'bg-[#FFD9CE]',
//     description: 'Loan period of 365 days. Maximum loan of N1,000,000'
//   }
// };

// export const composeVerification = (verification: string) => {
//   const obj = {
//     isFastCash: 'fastcash',
//     isIppis: 'ippis',
//     remitaLoan: 'remita',
//     staffLoan: 'staff'
//   };

//   return obj[verification];
// };

export const requiredContact = 40;

export const breakPoints = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const cardImage = {
  visa: 'VisaCard',
  verve: 'VisaCard',
  mastercard: 'MasterCard'
}

export const calculateRepaymentAmount =(
  amount: number,
  interest: number,
  tenor: number
) => {
  // for tenor less and equal to 30, part is 1;
  const part = Number(tenor) <= 30 ? 1 : Number(tenor) / 30;
  const totalInterest = Number(interest) * part;
  const result = Math.ceil(Number(amount) + (Number(amount) * (Number(totalInterest)) / 100))
  return result;
}

export const composeRepaymentPlan = (tenure: number, totalRepayment: number) => {
  const plans = [];
  if (tenure <= 30) {
    plans.push({ label: `1 Month  - ${moneyFormmater(totalRepayment)}`, value: `${totalRepayment}` });
  }

  if (tenure > 30)  {
  const part = Number(tenure) <= 30 ? 1 : Number(tenure) / 30;
    const repaymentPerMonth = totalRepayment / part
    for (let x = 0; x < convertDaysToMonths(tenure); x++) {
      const month = x + 1;
      plans.push({
        label: `${month} Month${month === 1 ? '' : '(s)'}  - ${moneyFormmater(repaymentPerMonth)}`,
        value: `${repaymentPerMonth}`
      });
    }
  }

  return plans;
};

export const formatDate = (date: string, formater?: string) => {
  return date && format(new Date(date), formater || 'yyyy-MM-dd');
}

export const convertCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "NGN",
  currencyDisplay: "narrowSymbol",
  minimumFractionDigits: 0,
});

export const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth'
  });
};
