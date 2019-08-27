import Card from './component/body/PostCard/card';
import Me from './component/body/aboutme/aboutme';
import TECH from './component/body/technical/technical';

export const DefaultImage = "https://aliceasmartialarts.com/wp-content/uploads/2017/04/default-image.jpg"

export const navTitle = "포트폴리오"
export const navSubTitle = "포트폴리오 홈페이지 제작 중입니다."

export const navCategoryInput = [
    { name : "PORTFOLIO", url : "/" , component : Card},
    { name : "ABOUTME" , url : "/about", component : Me},
    { name : "TECH", url : "/tech" ,component : TECH},
];

export const navRelatedLink = [
    { name : "github", url :"https://github.com/IMHOSUNG" }
]
