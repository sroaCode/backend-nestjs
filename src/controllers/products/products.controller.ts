import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    //Inicio
    @Get('')
    Inicio(){
        return "Inicio";
    }

    //Creando nuevos End Points
    //http://localhost:3000/nuevo
    @Get('nuevo')
    newEndPoint() {
        return "Yo soy nuevo";
    }

    @Get('/ruta')
    hello() {
        return "nueva ruta";
    }

    //recibir Paramteros
    @Get('/:productId')
    getProduct(@Param('productId') productId: string) {
        return `Product ${productId}`;
    }

    //Parametros de tipo Query
    @Get("parametrosQuery")
    getProducts(
        @Query('limit') limit = 100, //valor por defecto en casi de no enviar el limit
        @Query('offset') offset = 100,
        @Query('marca') marca: string) {
        return `products: limit => ${limit} offset => ${offset} y la marca es = ${marca}`
    }
}