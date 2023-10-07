export type Navigation = {
    id: number; 
    name: string;
    path: string;
}

export type Info = {
    title: string;
    description: string;

}



export type Project = {
    id: string;
    img: string;
    title: string;
    name: string;
}

export type Profile = {
    image: string;
    name: string;
    title: string;
}

export type MapData = {
    id: number;
    name: string;
    lgt?: number[];
    popUp?: string;
    markerIcon?: any;
}