import React, { useEffect, useState } from 'react';
import './AnimalDetails.css';
import { useParams } from 'react-router-dom';

import { adoptions } from '../Home/Home';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/header';

const AnimalDetails = ({ match }) => {
    const [ animalSelecionado, setAnimalSelecionado ] = useState("")
    const { id } = useParams();

    useEffect(() => {
        filterSelectedAnimal()
        window.scrollTo(0, 0);
    }, [])

    function filterSelectedAnimal() {
        var filtered = adoptions.filter((animal) => animal.id === id)
        setAnimalSelecionado(filtered[0])
    }

  return (
    <>
    <Header />
    <div className="animal-details">
      <div className="animal-image">
        <img src={animalSelecionado.url} alt={animalSelecionado.nome} />
      </div>
      <div className="animal-info">
        <h2>{animalSelecionado.nome}</h2>
        <p className="animal-type">{animalSelecionado.tipo}</p>
        <p className="animal-breed">{animalSelecionado.raca}</p>
        <p className="animal-age">Idade: {animalSelecionado.idade} ano(s)</p>
        <p className="animal-caption">{animalSelecionado.legenda}</p>
        <p className="animal-description">{animalSelecionado.descricao}</p>
        <p className="animal-location">Localização: {animalSelecionado.localizacao}</p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AnimalDetails;
