import { column, defineDb, defineTable } from 'astro:db';

// https://astro.build/db/config

const Clients = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    age: column.number(),
    isActive: column.boolean({default:true})
  }
})


export default defineDb({
  tables: {
    Clients
  }
});
