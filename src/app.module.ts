import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories/categories.controller';
import { ProductsController } from './controllers/products/products.controller';
import { BrandsController } from './controllers/brands/brands.controller';
import { UsersController } from './controllers/users/users.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { CustomersController } from './controllers/customers/customers.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, BrandsController, UsersController, OrdersController, CustomersController],
  providers: [AppService],
})
export class AppModule {}
