const Pokemon = ({ name, url }) => {
    return (
        <div>
            <h1 src={url} width={50}>{name}</h1>
        </div>
    );
}

export default Pokemon;