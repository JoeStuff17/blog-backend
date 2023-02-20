import { BlogInterface } from './interface/blog.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog, Content } from './schema/blog.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private bolgModel: Model<BlogInterface>) { }

  async createBlog(blogInterface: BlogInterface) {
    const createBlog = await this.bolgModel.create(blogInterface);
    await createBlog.save();
    return {
      status: true,
      message: "Created successfully",
      data: createBlog
    }
  }

  async fetchBlog() {
    const fetch = await this.bolgModel.find();
    return {
      status: true,
      message: "Data fetched successfully",
      data: fetch
    }
}
}
