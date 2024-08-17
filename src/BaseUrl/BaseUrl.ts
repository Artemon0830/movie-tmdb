

export const baseUrl = 'https://api.themoviedb.org/3'
export const urls ={
   movie: {base: '/discover/movie',
      byId: (id: number | string) => `/movie/${id}`,
}}