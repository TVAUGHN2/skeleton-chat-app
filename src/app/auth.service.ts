import { Injectable } from '@angular/core';
import { UserProfiles } from './data.model';

@Injectable()
export class AuthService {
    userProfiles: UserProfiles = new UserProfiles();

    login(user: string, password: string): boolean {
        user = user.toUpperCase(); //optimization, so not calling toUpperCase for every profile
        var isValid: boolean;
        this.userProfiles.userProfiles.forEach(profile=> {
            //this assumes that emails are unique and so if a user doesn't
            //enter the correct password for an email, it should stop immediately
            //rather than contining through other emails
            if (user === profile["email"].toUpperCase()){
                if (password === profile["pwd"]){
                    localStorage.setItem('email', user);
                    localStorage.setItem('fname', profile["fname"]);
                    localStorage.setItem('lname', profile["lname"]);
                    isValid = true;
                    return isValid;
                }
                isValid = false;
                return isValid;
            }
        });
        return isValid;
    }

    logout(): any {
        localStorage.removeItem('email');
        localStorage.removeItem('fname');
        localStorage.removeItem('lname');

        
    }

    getUser(): any {
        return { email: localStorage.getItem('email'), 
                 fname: localStorage.getItem('fname'), 
                 lname: localStorage.getItem('lname')
                };
    }

    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
