function Header({ texto, imagem1,imagem2, preco }) {
  return (
    <>
      <h1>{texto}</h1>

      <h2>{preco}</h2>

      <img src={imagem1} alt={texto} />
      <img src={imagem2} alt={texto} />

    </>
  );
}

export default Header;
