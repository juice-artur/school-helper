import { ApiProperty } from "@nestjs/swagger";

export class CreateSchoolDto {
  @ApiProperty({
    description: 'Title of the school',
    example: 'Greenwood High School',
  })
  title: string;

  @ApiProperty({
    description: 'Description of the school',
    example: 'A leading educational institution.',
  })
  description: string;

  @ApiProperty({
    description: 'City where the school is located',
    example: 'New York',
  })
  city: string;

  @ApiProperty({ description: 'Postal index of the city', example: '10001' })
  index: string;

  @ApiProperty({
    description: 'Contact phone number for the school',
    example: '+1-555-555-5555',
  })
  phone: string;
}
