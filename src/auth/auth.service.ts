import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signup(){
        return {msg: "hello"}
    }

    signin(){
        return {msg:"hello2"}
    }
}