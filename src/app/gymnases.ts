import { Seances } from "./seances"

export interface Gymnases {
    id: string;
    idGymnase:number,
    nomGymnase: string;
    adresse: string;
    ville: string;
    surface: number;
    seance:Seances[];


  }

