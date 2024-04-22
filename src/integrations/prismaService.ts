import { PrismaClient } from "@prisma/client";
import Elysia from "elysia";

const prisma = new PrismaClient();

export default new Elysia({ name: "prismaService" })
    .decorate({ prisma })