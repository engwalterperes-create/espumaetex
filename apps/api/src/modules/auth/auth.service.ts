import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  // TODO: implementar autenticação (login, registro, JWT, refresh, recuperação de senha)
}
