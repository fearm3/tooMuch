interface IUserInfo {
    email: string;
    emailConfirmed: string;
    name: string;
    phoneNumber: string;
    mobilePhoneNumber: null;
    surname: string;
    isActive:boolean;
    profilePhoto:null
}


export interface IResultUserInfo {
    result: IUserInfo;
    error: string;
    isSuccessful: boolean;
}