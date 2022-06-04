import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    //Inicio
    @Get('')
    Inicio(){
        return {
            message:"Inicio",
            endPoint:"products/"
        }
    }

    @Get('/ruta')
    route() {
        return {
            message:"nueva ruta",
            endPoint:"products/ruta"
        }
    }

    //Parametros de tipo Query
    //Ejemplo -> http://localhost:3000/products/filtrado?limit=12&offset=23&marca=Gucci
    @Get("/filtrado")
    getFilter(
        @Query('limit') limit = 100, //valor por defecto en casi de no enviar el limit
        @Query('offset') offset = 100,
        @Query('marca') marca: string) {
        return {
            message: `Filtrado exitoso`,
            limit: limit,
            offset: offset,
            marca: marca,
        }
    }

    //recibir Paramteros
    @Get('/:productId')
    getProductId(@Param('productId') productId: string) {
        return {
            message:"productId",
            endPoint:"products/:productId",
            productId:productId
        }
    }

    @Post()
    create(@Body() payload: any){
        return {
            message: "created xdxd",
            payload: payload,
        };
    }
}