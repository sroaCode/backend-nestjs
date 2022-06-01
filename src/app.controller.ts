import { Controller, Get, Param } from '@nestjs/common';
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
}
