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
    @Get('/NuevoEndPoint')
    newEndPoint() {
        return "Nuevo end point";
    }

    @Get('/ruta')
    route() {
        return "nueva ruta";
    }

    //Parametros de tipo Query
    //Ejemplo -> http://localhost:3000/products/filtrado?limit=12&offset=23&marca=Gucci
    @Get("/filtrado")
    getFilter(
        @Query('limit') limit = 100, //valor por defecto en casi de no enviar el limit
        @Query('offset') offset = 100,
        @Query('marca') marca: string) {
        return `products: limit => ${limit} offset => ${offset} y la marca es = ${marca}`
    }

    //recibir Paramteros
    @Get('/:productId')
    getProductId(@Param('productId') productId: string) {
        return `Product ${productId}`;
    }
}