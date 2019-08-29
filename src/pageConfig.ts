import MainLayout from './layouts/main';
import AboutLayout from './layouts/about';
import TechLayout from './layouts/tech';

export const ApiDomain = "https://jsonplaceholder.typicode.com/"

export const DefaultImage = "https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"
export const NodeJsImage = "https://nodejs.org/static/images/logo.svg"

export const navTitle = "포트폴리오"
export const navSubTitle = "포트폴리오 홈페이지 제작 중입니다."

export const navCategoryInput = [
    { name : "PORTFOLIO", url : "/" , component : MainLayout , layoutTitle : "포트폴리오" ,clicked : false},
    { name : "ABOUTME" , url : "/about", component : AboutLayout , layoutTitle : "자기소개" ,clicked : false},
    { name : "TECH", url : "/tech" ,component : TechLayout, layoutTitle : "기술분야" ,clicked : false},
];

export const navRelatedLink = [
    { name : "github", url :"https://github.com/IMHOSUNG" }
]
