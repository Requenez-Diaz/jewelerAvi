import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createClientsDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  gmail: string;

  @IsNumber()
  @IsNotEmpty()
  numberPhone: number;

  @IsString()
  @IsNotEmpty()
  direction: string;
}
