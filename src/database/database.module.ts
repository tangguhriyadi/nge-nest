import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: (configService:ConfigService) => ({
                type: 'postgres',
                host: configService.get('POSTGRES_HOST'),
                port: configService.get('POSTGRES_PORT'),
                password: configService.get('POSTGRES_PASSWORD'),
                database: configService.get('POSTGRES_DB'),
                username: configService.get('POSTGRES_USER'),
                autoLoadEntities: true,
                synchronize: configService.getOrThrow('POSTGRES_SYNCHRONIZE')
            }),
            inject: [ConfigService]
        })
    ]
})
export class DatabaseModule {}
