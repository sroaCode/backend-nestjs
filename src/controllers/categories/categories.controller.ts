import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {


    @Get('/:categoriesId/product/:productId')
    getCategories(
        @Param('categoriesId') categoriesId: string,
        @Param('productId') productId: string) {
        return `Categories ${categoriesId} and productId ${productId}`;
    }

}