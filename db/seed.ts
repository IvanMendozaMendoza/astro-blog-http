import { db, Clients } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Clients).values([
		{name: "John Doe", age: 25},
		{name: "Jane Smith", age: 30},
		{name: "Mike Johnson", age: 28},
		{name: "Sarah Wilson", age: 22},
		{name: "David Brown", age: 35}
	])
	console.log('seed executed');
}
