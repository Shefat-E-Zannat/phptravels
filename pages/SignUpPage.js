import { Selector,t} from "testcafe";

export class SignUpPage{
    constructor(){ 
        this.firstName=Selector("input[name='first_name']");
        this.lastName=Selector("input[name='last_name']");
        this.phone=Selector("input[name='phone']");
        this.email=Selector("input[name='email']");
        this.password=Selector("input[name='password']");
        this.signUpBUtton=Selector("button[type='submit']");

        this.alertSuccess = Selector("div[class='alert alert-success signup']");

    }
    async filledCustomerInfo(fname, lname, phone, email,pass){
        await t.typeText(this.firstName, fname);
        await t.typeText(this.lastName,lname);
        await t.typeText(this.phone, phone);
        await t.typeText(this.email, email);
        await t.typeText(this.password, pass);
    }
    async clickSignUpButton(){
        await t.wait(5000);
        await t.click(this.signUpBUtton);
    }
    
    async getSuccessMsg(){
        return await this.alertSuccess.innerText;
    }
}