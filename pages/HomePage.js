import { Selector ,t} from "testcafe";

export class HomePage{
    constructor (){
        this.signUpLink=Selector(
            "a[href-hammerhead-stored-value='https://phptravels.net/signup']"
          );
        this.cookie=Selector("#cookie_stop");
    }
    async clickSignUpLink(){
        await t.click(this.cookie);
        await t.click(this.signUpLink);
    }
}