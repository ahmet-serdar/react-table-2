export const tableDefinition = [
    "number",
    "string",
    "string",
    "string",
    "number"
  ];
  
  export const columns = [
    { name: "id", title: "ID" },
    { name: "name", title: "Name" },
    { name: "description", title: "Description" },
    { name: "rating", title: "Rating" },
    { name: "price", title: "Price" }
  ];
  
  export const rows = [
    {
      id: {
          type: 'string',
          value: 11
      },
      name:{
          type: 'editable-string',
          value:"50 Pairs of Clear Plastic Earrings Transparent Invisible Retainer Studs New",
      }, 
      description:{
          type:'editable-string',
          value: "Earrings: 50 Pairs of Clear Plastic Earrings Transparent Invisible Retainer Studs New",
      },
      size:{
          type: 'dropdown',
          value:['xs', 's', 'm' , 'l', 'xl']
      },
      color:{
          type:'radiobutton', 
          value: ['white', 'beige', 'dark blue', 'indian red' ]
      },
      delivery:{
          type: 'radiobutton',
          value: ['standart', 'fast', 'express']
      },       
      rating: {
          type: 'string',
          value: "5.0",
        },
      price: {
          type: 'number',
          value: 1.59
      } 
    },
    {
        id: {
            type: 'string',
            value: 12
        },
        name:{
            type: 'editable-string',
            value:"ad;laksd;lka of Clear Plastic Earrings Transparent Invisible Retainer Studs New",
        }, 
        description:{
            type:'editable-string',
            value: "Earrings: 50 Pairs of Clear Plastic Earrings Transparent Invisible Retainer Studs New",
        },
        size:{
            type: 'dropdown',
            value:['xs', 's', 'm' , 'l', 'xl']
        },
        color:{
            type:'radiobutton', 
            value: ['black', 'beige', 'dark blue', 'indian red' ]
        },
        delivery:{
            type: 'radiobutton',
            value: ['standart', 'fast', 'express']
        },       
        rating: {
            type: 'string',
            value: "5.0",
          },
        price: {
            type: 'number',
            value: 3.61
        } 
      },
]