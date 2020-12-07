import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    console.log('Seeding..');

    const user = await prisma.user.create({
        data: {
            email: 'lucas@gmail.com',
            password: '1234',
            firstname: 'José Lucas',
            lastname: 'Alves da Silva',
            phone: '81981424449'
        }
    })

    console.log({ user });
}

main()
    .catch(error => console.log(error))
    .finally(async () => {
        await prisma.$disconnect();
    })