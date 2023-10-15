import { TUserBasic } from "../store/slices/user/userSlice";

export type TSignUpresponse = {
    status: number;
    data: {
        userData: TUserBasic
        token: string
    };
}