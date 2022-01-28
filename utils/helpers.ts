import beef from "../public/imgs/Beef_trans.png";
import chicken from "../public/imgs/Chicken_trans.png";
import lamb from "../public/imgs/Lamb_trans.png";
import roo from "../public/imgs/Roo_trans.png";
import puppy from "../public/imgs/Puppy_trans.png";

export const getImage = (firstLetter: string) => {
    switch(firstLetter) {
        case('C'):
            return "/imgs/Chicken_trans.png";
        case('B'):
            return "/imgs/Beef_trans.png";
        case('L'):
            return "/imgs/Lamb_trans.png";
        case('K'):
            return "/imgs/Roo_trans.png";
        case('P'):
            return "/imgs/Puppy_trans.png";
    }
}

export const getLink = (firstLetter: string) => {
    switch(firstLetter) {
        case('C'):
            return "/products/chicken";
        case('B'):
            return "/products/beef";
        case('L'):
            return "/products/lamb";
        case('K'):
            return "/products/kangaroo";
        case('P'):
            return "/products/puppy";
        default:
            return "";
    }
}