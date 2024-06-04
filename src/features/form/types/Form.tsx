export default interface Form {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  username: string;
  password: string;
  confirmPassword: string;
  userProfile: 'personal' | 'business';
  dateBirth: string;
  gender: string;
  companyName: string;
  companySize: string;
  role: string;
  notification: boolean;
  how: string;
  teams: boolean;
}
