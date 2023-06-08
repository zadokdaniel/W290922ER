interface Order {
    name: string, 
    createdAt: Date = new Date()
    isDelivered: boolean = false
}

interface Product {
    id: number // unique = generated
    title: string 
    category: string
    size: string
    price: number 
    color: string
    discount: number
    weight: number
    deliveryTime: number // in days
    orders: Order[] = []

    addOrder: (name) => Order
    removeOrder: (name) => Order
    changeIsDelivered: (name) => Order
}

1. create the interfaces above as es5 constructors
2. convert the es5 syntax to es6 class keyword
3. create a Point, circle and square classes

interface Point {
	x: number (in constructor default 0)
	y: number (in constructor default 0)
	color: string	

	move: (dx: number, dy: number) => void (* Point)
	setColor: (color: string) => void (* Point)
}

interface Circle extends Point { 
	radius: number (in constructor throw error if not received)
	
	transform: (dRadius: number) => void (* Circle)
}

interface Square extends Point {
	width: numebr (in constructor throw error if not received)
	
	rotate: (dAngle: number) => void (* Square)	
}






* bonus break them each in different module
* bonus try converting to typescript