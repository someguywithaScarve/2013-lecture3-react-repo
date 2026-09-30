export interface DiamondCardProps {
    id: number;
    image: string;
    price: string;
    productName: string;
    sale?: boolean;
}

export const data: DiamondCardProps[] = [
    {
        id: 1,
        image: "src/assets/images/pexels-the-glorious-studio-10475791.jpg",
        productName: "Kate",
        price: "$ 1,360",
    },
    {
        id: 2,
        image: "src/assets/images/pexels-the-glorious-studio-10475793.jpg",
        productName: "Kress",
        price: "$ 1,450",
    },
    {
        id: 3,
        image: "src/assets/images/pexels-the-glorious-studio-10475794.jpg",
        productName: "Kiera",
        price: "$1,769",
        sale: true,
    },
];
export default data;