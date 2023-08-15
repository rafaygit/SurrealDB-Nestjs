import { PartialType } from '@nestjs/mapped-types';
import { CreateSurrDbDto } from './create-surr-db.dto';

export class UpdateSurrDbDto extends PartialType(CreateSurrDbDto) {}
