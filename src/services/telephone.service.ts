const base_url = `${import.meta.env.VITE_API}/telephone`

export const dialUp = (key: string) => {

    const url = `${base_url}/${key}`;
    fetch(url);

}