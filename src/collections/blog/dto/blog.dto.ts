import { IsNotEmpty } from "@nestjs/class-validator";

export class blogDto{

    @IsNotEmpty()
    title: string;

    subtitle: string;

    file : [];

    desc: string;

    keyword: string;

    alt : string;
}