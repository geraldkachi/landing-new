export const moneyFormmater = (value) => {
    const number = value;
    const formatter = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0
    });
    const formattedNumber = formatter.format(number); // "₦1,234,567"
    return formattedNumber;
};
