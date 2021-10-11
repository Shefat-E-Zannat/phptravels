const faker=require ('faker');

import {HomePage} from "../pages/HomePage.js";
import {SignUpPage} from "../pages/SignUpPage.js";

const homePage = new HomePage();
const signuppage=new SignUpPage();

fixture `Getting Started`.page`https://phptravels.net`;

test ("User can successfully register new accout ", async (t) => {
await t.maximizeWindow();
await homePage.clickSignUpLink();
await signuppage.filledCustomerInfo("Shefat","Zannat","01918722178",faker.internet.email(),"T@skor123");
await signuppage.clickSignUpButton();
//await t.debug();
await t
.expect(await signuppage.getSuccessMsg())
.contains("Signup successfull please login.");




});

