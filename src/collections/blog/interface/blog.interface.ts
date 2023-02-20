import { Content } from './../schema/blog.schema';
import { Document } from "mongoose";
export interface BlogInterface extends Document {

    userId: number;

    blogTitle: string;

    blogSubtitle: string;

    blogFile: string;

    blogDesc: string;

    blogKeyword: [];

    blogAlt: string;

    contents: [ContentInterface];

}

interface ContentInterface {

    contentTitle: string;

    contentSubtitle: string;

    contentFile: string;

    contentDesc: string;

    contentKeyword: [];

    contentAlt: string;
}