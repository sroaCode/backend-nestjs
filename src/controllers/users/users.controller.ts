import { Controller, Get, Post, Param, Query, Body } from '@nestjs/common';
import { count } from 'console';

@Controller('users')
export class UsersController {

    @Get()
    Inicio() {
        return {
            message: "listado de usuarios"
        }
    }

    @Get('idUser/:idUser')
    getUser(@Param('idUser') idUser: String) {
        return {
            message: "Consulta usuario especifico",
            user: idUser,
            data: "Listado de la data del usuario"
        }
    }

    //Example : http://localhost:3000/users/idUser?name=sebastian&age=25&company=cocacola&country=colombia
    @Get('idUser')
    getUserFilterBy(
        @Query('name') name: String,
        @Query('age') age: number,
        @Query('company') company: String,
        @Query('country') country: String) {
        return {
            message: "Consulta usuario filtrado",
            name: name,
            age: age,
            company: company,
            country: country
        }
    }

    @Post()
    createUser(@Body() payload: any){
        return {
        message: "operacion crear usuario",
        resultado: "Creado con exito",
        payload: payload,
        }
    }

}
