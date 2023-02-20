import { Blog, BlogSchema, Content } from './blog/schema/blog.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog/blog.controller';
import { BlogService } from './blog/blog.service';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  imports: [
    MongooseModule.forFeature([
        {name: Blog.name, schema: BlogSchema},
    ])
],
})
export class CollectionsModule {}
