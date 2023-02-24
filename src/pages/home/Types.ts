import { IMediaQuery } from "../../hoc/withMediaQuery";

export type HomeProps = IMediaQuery;

export interface HomeState{
    images: string[],
    activeImage: string;
    color: string;
    size: number;
    activeColor: number;
}