import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return 'Hola mundo!'
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
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `Product ${productId}`;
  }

  @Get('categories/:categoriesId/product/:productId')
  getCategories(
    @Param('categoriesId') categoriesId: string,
    @Param('productId') productId: string) {
    return `Categories ${categoriesId} and productId ${productId}`;
  }

  //Parametros de tipo Query
  @Get("products")
  getProducts(
    @Query('limit') limit = 100, //valor por defecto en casi de no enviar el limit
    @Query('offset') offset = 100,
    @Query('marca') marca: string) {
    return `products: limit => ${limit} offset => ${offset} y la marca es = ${marca}`
  }
}
