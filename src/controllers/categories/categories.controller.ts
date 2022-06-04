import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {


    @Get('/:categoriesId/product/:productId')
    getCategories(
        @Param('categoriesId') categoriesId: string,
        @Param('productId') productId: string) {
        return {
            message:"recibido con exito",
            endPoint:"/categoriesId/:categoriesId/product/:productId",
            categoriesId:categoriesId,
            productId:productId,
        }
        
    }

}