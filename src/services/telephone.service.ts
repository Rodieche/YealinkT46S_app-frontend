const base_url = `${import.meta.env.VITE_API}/telephone`

export const dialUp = async (key: string) => {

    const url = `${base_url}/${key}`;
    const resp = await fetch(url);
    console.log(resp);
    return;

}