import { BlogService } from './blog.service';
import { Body, Controller, Get, HttpStatus, ParseFilePipe, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { BlogInterface } from './interface/blog.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('blog')
export class BlogController {
  constructor(public blogService: BlogService) { }

  @Post('/create')
  async createBlog(@Res() res, @Body() payload: BlogInterface) {
    const a = await this.blogService.createBlog(payload);
    return res.status(HttpStatus.OK).json({
      status: a.status,
      message: a.message,
      data: a.data
    })
  }

  @Get('/')
  async getBlog(@Res() res) {
    const blog = await this.blogService.fetchBlog();
    return res.status(HttpStatus.OK).json({
      status: blog.status,
      message: blog.message,
      data: blog.data
    })
  }

  ///----Uploading Excel file wid custom name----///
  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './img',
      filename: (req, file, cb) => {
        const name = file.originalname.split('.')[0];
        const fileExtension = file.originalname.split('.')[1];
        const newFileName = name.split(" ").join('_') + '_' + Date.now() + '.' + fileExtension;
        cb(null, newFileName);
      }
    }),
  }))
  uploadFile(
    @UploadedFile(new ParseFilePipe({
      validators: [
        // new MaxFileSizeValidator({ maxSize: 8000 }),
        // new FileTypeValidator({ fileType: 'image/jpeg/png' }),
      ],
    }),
    ) file: Express.Multer.File) {
    return {
      success: true,
      message: "File Upladed Successfully",
      imagePath: file.path
    };
  }
}
