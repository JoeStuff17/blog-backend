import { Content } from './../schema/blog.schema';
import { Document } from "mongoose";
export interface BlogInterface extends Document {

    userId: number;

    blogTitle: string;

    blogSubtitle: string;

    blogFile: [
        title: string,
        desc: string,
        imgUrl: string
    ];

    blogDesc: string;

    blogKeyword: string;

    blogAlt: string;

    contents: [ContentInterface];

}

interface ContentInterface {

    contentTitle: string;

    contentSubtitle: string;

    contentFile: [
        title: string,
        desc: string,
        imgUrl: string
    ];

    contentDesc: string;

    contentKeyword: string;

    contentAlt: string;
}