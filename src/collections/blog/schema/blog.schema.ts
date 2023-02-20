import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true, collection:'content'})
export class Content{

    @Prop()
    contentTitle: string;

    @Prop()
    contentSubtitle: string;

    @Prop()
    contentFile : [];

    @Prop()
    contentDesc: string;

    @Prop()
    contentKeyword: [];

    @Prop()
    contentAlt : string;
}
const ContentSchema = SchemaFactory.createForClass(Content)

@Schema({timestamps:true, collection:'blog'})
export class Blog{

    @Prop()
    userId: number;

    @Prop()
    blogTitle: string;

    @Prop()
    blogSubtitle: string;

    @Prop()
    blogFile : [];

    @Prop()
    blogDesc: string;

    @Prop()
    blogKeyword: [];

    @Prop()
    blogAlt : string;

    @Prop({type: [ContentSchema]})
    contents : Content
}

export const BlogSchema = SchemaFactory.createForClass(Blog);