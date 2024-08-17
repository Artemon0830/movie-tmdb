import React from 'react';
import {Metadata} from "next";
import {mService} from "@/services/api.service";
export const generateMetadata = async ({params}:{params:{id:number}}):Promise<Metadata> => {
    console.log(params.id)
    let movieById = await mService.getMovieById(params.id);
    return {title: movieById?.title}
}
type Props = { children: React.ReactNode; };

const UsersLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default UsersLayout;