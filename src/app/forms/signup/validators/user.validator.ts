import { UserService } from './../../../services/user.service';
import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UserValidation {

    static alreadyExists(userservice: UserService) {
        return (control: AbstractControl): Promise<ValidationErrors | null> => {
            return new Promise((resolve, reject) => {
                userservice.getUser(control.value)
                    .subscribe(
                        data => {
                            if(data.message == "Found"){
                                resolve({ alreadyExists: true })
                            }else{
                                resolve(null)
                            } 
                        },
                        error => {
                            console.log("error coming",error)
                        }
                    )
            })
        }
    }
}