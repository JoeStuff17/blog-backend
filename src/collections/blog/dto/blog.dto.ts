import { IsNotEmpty } from "@nestjs/class-validator";

export class blogDto{

    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    blogTitle: string;

    @IsNotEmpty()
    blogSubtitle: string;

    @IsNotEmpty()
    blogFile: string;

    @IsNotEmpty()
    blogDesc: string;

    @IsNotEmpty()
    blogKeyword: string;

    @IsNotEmpty()
    blogAlt: string;
}