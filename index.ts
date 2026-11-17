import  z, { email, number, parse } from "zod";

// object
  const user1 =z.object({
  name:z.string(),
  email:z.email({
    error:"Emial nai kno"
  }),
  image:z.url().optional(),
  role:z.string().default("user"),
  age:z.number().nullable()
})

user1.parse({
  name:"Murad",
  email:"muradvcv@gmail.com",
  age:null,
})





// Enums,Array,Union and more

const user2 =z.object({
  name:z.string(),
  // enum
  role:z.enum(["admin","user"]),
  // array
  id:z.tuple([z.string(),z.number()]),
  // union
  age:z.union([z.string(),z.number()])
})

user2.parse({
  name:"murad",
  role:"user",
  id:["43",2],
  age:"43"
})